import { Component, Input } from '@angular/core';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-header-info-request',
  templateUrl: './header-info-request.component.html',
  styleUrls: ['./header-info-request.component.scss'],
})
export class HeaderInfoRequestComponent {
  @Input() userInfo: any;

  currentDate = new Date();

  constructor(private flagService: FlagService) {}

  showAvatar() {
    this.flagService.showAvatar$.next(true);
  }
}
