import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription, switchMap } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-user-info-header-accompaniment',
  templateUrl: './user-info-header-accompaniment.component.html',
  styleUrls: ['./user-info-header-accompaniment.component.scss'],
})
export class UserInfoHeaderAccompanimentComponent implements OnInit, OnDestroy {
  @Input() userInfo: any;
  cSub!: Subscription;
  uSub!: Subscription;
  showAvatarSub!: Subscription;

  loader: boolean = false;
  isAvatar: boolean = false;
  comment: string = '';
  option: string = '';

  confirmInfo: any = null;

  tab = 'info-installment-plan';

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

  currentDate = new Date()

  constructor(
    public apiService: ApiService,
    private flagService: FlagService
  ) {}

  ngOnInit(): void {
    // if (this.userInfo.data.state !== '1') {
    //   this.getConfirmComment();
    // }

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
        this.comment = comment.data[0]?.comment;
      });
  }

  toggleTab(tabName: string) {
    this.tab = tabName;
  }

  confirmCredit(option: string, title: string) {
    this.option = option;
    this.flagService.toggleConfirmComment(true, title);
  }

  showAvatar() {
    this.flagService.showAvatar$.next(true);
  }

  ngOnDestroy(): void {
    this.cSub?.unsubscribe();
    this.uSub?.unsubscribe();
    this.showAvatarSub?.unsubscribe();
  }
}
