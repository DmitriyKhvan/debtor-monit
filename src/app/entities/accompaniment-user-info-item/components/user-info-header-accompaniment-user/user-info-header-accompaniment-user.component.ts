import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/shared/api/credit.service';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-user-info-header-accompaniment-user',
  templateUrl: './user-info-header-accompaniment-user.component.html',
  styleUrls: ['./user-info-header-accompaniment-user.component.scss'],
})
export class UserInfoHeaderAccompanimentUserComponent {
  @Input() userInfo: any;

  constructor(
    public apiService: ApiService,
    private flagService: FlagService
  ) {}

  showAvatar() {
    this.flagService.showAvatar$.next(true);
  }
}
