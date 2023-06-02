import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit, OnDestroy {
  @Input() userInfo: any;
  aSub!: Subscription;
  flag: boolean = false;
  type: string | undefined;

  constructor(private flagService: FlagService) {}

  ngOnInit(): void {
    this.aSub = this.flagService.isAddClientInfoForm$.subscribe(
      ({ flag, addClientInfo, type }) => {
        this.flag = flag;
        this.type = type;

        if (addClientInfo) {
          this.userInfo.addClientInfo.push({
            description: addClientInfo.description,
            value: addClientInfo.value,
            type: addClientInfo.type,
          });
        }
      }
    );
  }

  onlyPhones({ userData, type }: any) {
    return userData.filter((user: any) => user.type === type);
  }

  addPhone() {
    this.flagService.isAddClientInfoForm$.next({
      flag: true,
      type: 'ADD_PHONE',
    });
  }

  ngOnDestroy(): void {
    this.aSub?.unsubscribe();
  }
}
