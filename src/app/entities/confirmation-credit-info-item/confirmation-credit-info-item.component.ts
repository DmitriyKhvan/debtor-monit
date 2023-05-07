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

  tab = 'info';

  constructor(public apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  toggleTab(tabName: string) {
    this.tab = tabName;
  }

  confirmCredit(option: string) {
    this.cSub = this.apiService.confirmCredit(option).subscribe((res) => {
      console.log(res);
    });
  }

  ngOnDestroy(): void {
    this.cSub?.unsubscribe();
  }
}
