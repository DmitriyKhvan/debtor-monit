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

  constructor(private flagService: FlagService) {}

  ngOnInit(): void {
    this.aSub = this.flagService.isAddPhoneForm$.subscribe(
      ({ flag, phoneData }) => {
        this.flag = flag;

        if (phoneData) {
          this.userInfo.addClientInfo.push({
            description: phoneData.description,
            value: phoneData.value,
            type: phoneData.type,
          });
        }
      }
    );
  }

  onlyPhones({ userData, type }: any) {
    return userData.filter((user: any) => user.type === type);
  }

  addPhone() {
    this.flagService.isAddPhoneForm$.next({ flag: true });
  }

  ngOnDestroy(): void {
    this.aSub?.unsubscribe();
  }
}
