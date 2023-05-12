import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-pop-up',
  templateUrl: './notification-pop-up.component.html',
  styleUrls: ['./notification-pop-up.component.scss'],
})
export class NotificationPopUpComponent {
  tab = 'new';

  close() {}

  toggleTab(tabName: string) {
    this.tab = tabName;
  }
}
