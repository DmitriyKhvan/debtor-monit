import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';

@Component({
  selector: 'app-confirmation-credit-info-item',
  templateUrl: './confirmation-credit-info-item.component.html',
  styleUrls: ['./confirmation-credit-info-item.component.scss'],
})
export class ConfirmationCreditInfoItemComponent implements OnInit, OnDestroy {
  @Input() userInfo: any;
  cSub!: Subscription;
  loader: boolean = false;

  confirmInfo: any = null;

  tab = 'info';

  statusStyleDic: any = {
    1: 'default',
    2: 'success',
    3: 'danger',
  };

  statusNameDic: any = {
    1: 'НОВАЯ ЗАЯВКА',
    2: 'ЗАЯВКА ОДОБРЕНА',
    3: 'ЗАЯВКА ОТКЛОНЕНА ',
  };

  constructor(public apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  toggleTab(tabName: string) {
    this.tab = tabName;
  }

  confirmCredit(option: string) {
    this.loader = true;
    this.cSub = this.apiService.confirmCredit(option).subscribe((userInfo) => {
      // this.confirmInfo = res.data;
      this.userInfo = userInfo;

      this.loader = false;
    });
  }

  ngOnDestroy(): void {
    this.cSub?.unsubscribe();
  }
}
