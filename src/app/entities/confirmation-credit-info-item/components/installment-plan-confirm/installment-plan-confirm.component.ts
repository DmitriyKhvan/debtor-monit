import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-installment-plan-confirm',
  templateUrl: './installment-plan-confirm.component.html',
  styleUrls: ['./installment-plan-confirm.component.scss'],
})
export class InstallmentPlanConfirmComponent {
  @Input() userInfo: any;
}
