import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-info-confirm',
  templateUrl: './user-info-confirm.component.html',
  styleUrls: ['./user-info-confirm.component.scss'],
})
export class UserInfoConfirmComponent {
  @Input() userInfo: any;
}
