import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-general-user-info-confirmation-credit',
  templateUrl: './general-user-info-confirmation-credit.component.html',
  styleUrls: ['./general-user-info-confirmation-credit.component.scss'],
})
export class GeneralUserInfoConfirmationCreditComponent {
  @Input() userInfo: any;
}
