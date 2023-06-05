import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-add-info-list',
  templateUrl: './add-info-list.component.html',
  styleUrls: [
    '../installment-plan-confirm/installment-plan-confirm.component.scss',
    './add-info-list.component.scss',
  ],
})
export class AddInfoListComponent implements OnInit, OnDestroy {
  @Input() type: string = '';

  iSub!: Subscription;
  aSub!: Subscription;

  addClientInfo: any = [
    // {
    //   active: true,
    //   claimsId: 51817,
    //   createdAt: '2023-05-20T20:30:19.141Z',
    //   createdBy: '1331d1f1-2a19-4bfb-99fd-ba0835b652d1',
    //   description: 'Новый номер',
    //   id: 11,
    //   type: 'ADD_PHONE',
    //   updatedAt: '2023-05-20T20:30:19.141Z',
    //   updatedBy: null,
    //   value: '+998909998877',
    // },
  ];

  constructor(
    private flagService: FlagService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.getAddClientInfo();
  }

  getAddClientInfo() {
    this.iSub = this.apiService.getAddClientInfo().subscribe((info) => {
      this.addClientInfo = info;
    });

    this.aSub = this.flagService.isAddClientInfoForm$.subscribe(
      ({ flag, addClientInfo, type }) => {
        if (!flag && addClientInfo) {
          this.getAddClientInfo();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editAddClientInfo(id: number, description: string, value: string) {
    this.flagService.isAddClientInfoForm$.next({
      flag: true,
      addClientInfo: { id, description, value },
      type: this.type,
    });
  }

  removeAddClientInfo(id: number) {
    this.flagService.removeAddClientInfo$.next({
      flag: true,
      id,
    });
  }

  ngOnDestroy(): void {
    this.iSub?.unsubscribe();
    this.aSub?.unsubscribe();
  }
}
