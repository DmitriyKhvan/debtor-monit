import { Component, Input } from '@angular/core';
import { Status } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-history-call-item',
  templateUrl: './history-call-item.component.html',
  styleUrls: [
    '../../history-call.component.scss',
    './history-call-item.component.scss',
  ],
})
export class HistoryCallItemComponent {
  @Input() call: any;
  @Input() status: Status | undefined;

  dicClass: any = {
    1: 'warning',
    2: 'warning',
    3: 'danger',
    4: 'success',
    5: 'danger',
    6: 'warning',
  };
}
