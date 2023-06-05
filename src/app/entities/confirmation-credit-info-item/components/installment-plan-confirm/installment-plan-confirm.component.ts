import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-installment-plan-confirm',
  templateUrl: './installment-plan-confirm.component.html',
  styleUrls: ['./installment-plan-confirm.component.scss'],
})
export class InstallmentPlanConfirmComponent implements OnInit, OnDestroy {
  @Input() userInfo: any;
  @ViewChild('copyText') copyTextRef!: ElementRef;
  aSub!: Subscription;
  iSub!: Subscription;
  rSub!: Subscription;

  flag = false;
  type: string | undefined;
  isRemoveClientInfo = false;

  formData: any;
  addClientInfoId: number = 0;
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
    public flagService: FlagService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.getAddClientInfo();

    this.aSub = this.flagService.isAddClientInfoForm$.subscribe(
      ({ flag, addClientInfo, type }) => {
        this.flag = flag;
        this.type = type;

        if (!flag && addClientInfo) {
          this.getAddClientInfo();
        } else {
          this.formData = addClientInfo;
        }
      },
      (error) => {
        console.log(error);
      }
    );

    this.rSub = this.flagService.removeAddClientInfo$.subscribe(
      ({ flag, id }) => {
        this.isRemoveClientInfo = flag;

        if (id) {
          this.addClientInfoId = id;
        }
      }
    );
  }

  getAddClientInfo() {
    this.iSub = this.apiService.getAddClientInfo().subscribe((info) => {
      this.addClientInfo = info;
    });
  }

  copy(event: any) {
    const copyText = this.copyTextRef.nativeElement.innerText;

    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = copyText;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  addInfo() {
    this.flagService.isAddClientInfoForm$.next({
      flag: true,
      type: 'ADD_OTHER',
    });
  }

  editAddClientInfo(id: number, description: string, value: string) {
    this.flagService.isAddClientInfoForm$.next({
      flag: true,
      addClientInfo: { id, description, value },
      type: 'ADD_OTHER',
    });
  }

  removeAddClientInfo(id: number) {
    this.flagService.removeAddClientInfo$.next({
      flag: true,
      id,
    });
  }

  ngOnDestroy(): void {
    this.aSub?.unsubscribe();
    this.iSub?.unsubscribe();
    this.rSub?.unsubscribe();
  }
}
