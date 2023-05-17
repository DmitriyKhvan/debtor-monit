import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-insurance-debt',
  templateUrl: './insurance-debt.component.html',
  styleUrls: ['./insurance-debt.component.scss'],
})
export class InsuranceDebtComponent {
  @Input() userInfo: any;
}
