import { Component, Input } from '@angular/core';
import { Action, Status } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.scss'],
})
export class ActivityItemComponent {
  @Input() action: Action = {
    id: 0,
    debtorId: 0,
    type: 0,
    reminder: '',
    text: '',
    createdBy: null,
    createdAt: '',
    updatedBy: null,
    updatedAt: '',
  };

  @Input() type: Status | undefined;
}
