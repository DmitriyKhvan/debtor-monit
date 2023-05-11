import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, filter, switchMap } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-confirmation-credit-info-item',
  templateUrl: './confirmation-credit-info-item.component.html',
  styleUrls: ['./confirmation-credit-info-item.component.scss'],
})
export class ConfirmationCreditInfoItemComponent implements OnInit, OnDestroy {
  @Input() userInfo: any;
  cSub!: Subscription;
  uSub!: Subscription;
  loader: boolean = false;
  comment: string = '';
  option: string = '';

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

  constructor(
    public apiService: ApiService,
    private route: ActivatedRoute,
    private flagService: FlagService
  ) {}

  ngOnInit(): void {
    // this.uSub = this.flagService.userInfo$.subscribe((userInfo) => {
    //   console.log(userInfo);

    //   if (userInfo.userInfo) {
    //     this.userInfo = userInfo.userInfo;

    //     this.getCofirmComment();
    //   }
    //   this.loader = userInfo.isLoader;
    // });

    if (this.userInfo.data.state !== '1') {
      this.getConfirmComment();
    }

    this.uSub = this.flagService.cofirmComment$
      .pipe(
        switchMap((comment) => {
          this.loader = true;
          return this.apiService.getConfirmComment();
        }),
        switchMap((comment) => {
          this.comment = comment.data[0].comment;
          return this.apiService.confirmCredit(this.option);
        })
      )
      .subscribe((userInfo) => {
        this.userInfo = userInfo;

        this.loader = false;

        let data = JSON.parse(localStorage.getItem('creditsConfirm') || '{}');
        const idx = data.credits.findIndex(
          (credit: any) => credit.id === userInfo.data.claimsInfo.id
        );
        data.credits[idx].status = userInfo.data.state;

        localStorage.setItem('creditsConfirm', JSON.stringify(data));
      });
  }

  getConfirmComment() {
    this.cSub = this.apiService
      .getConfirmComment()
      .subscribe((comment: any) => {
        this.comment = comment.data[0].comment;
      });
  }

  toggleTab(tabName: string) {
    this.tab = tabName;
  }

  confirmCredit(option: string, title: string) {
    this.option = option;
    this.flagService.toggleConfirmComment(true, title);
  }

  ngOnDestroy(): void {
    this.cSub?.unsubscribe();
    this.uSub?.unsubscribe();
  }
}
