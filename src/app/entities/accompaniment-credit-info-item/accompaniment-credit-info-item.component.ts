import { Component, Input } from '@angular/core';
import { Subscription, switchMap } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-accompaniment-credit-info-item',
  templateUrl: './accompaniment-credit-info-item.component.html',
  styleUrls: ['./accompaniment-credit-info-item.component.scss'],
})
export class AccompanimentCreditInfoItemComponent {
  @Input() userInfo: any;

  tab = 'info';
  cSub!: Subscription;
  uSub!: Subscription;
  showAvatarSub!: Subscription;

  loader: boolean = false;
  isAvatar: boolean = false;
  comment: string = '';
  option: string = '';

  confirmInfo: any = null;

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
    private flagService: FlagService
  ) {}

  ngOnInit(): void {
    this.showAvatarSub = this.flagService.showAvatar$.subscribe((flag) => {
      this.isAvatar = flag;
    });
  }

  toggleTab(tabName: string) {
    this.tab = tabName;
  }

  ngOnDestroy(): void {
    this.cSub?.unsubscribe();
    this.uSub?.unsubscribe();
    this.showAvatarSub?.unsubscribe();
  }
}
