import { Component, Input } from '@angular/core';
import { Status } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss', '../../credit-list.component.scss'],
})
export class CreditComponent {
  @Input() credit: any;
  @Input() status: Status | undefined;
  currentId: number | null = null;

  constructor() {}
}
