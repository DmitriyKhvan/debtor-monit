import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-accompaniment-user-info-item',
  templateUrl: './accompaniment-user-info-item.component.html',
  styleUrls: ['./accompaniment-user-info-item.component.scss'],
})
export class AccompanimentUserInfoItemComponent implements OnInit, OnDestroy {
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
