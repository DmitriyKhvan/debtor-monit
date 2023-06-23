import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/shared/api/credit.service';

@Component({
  selector: 'app-accompaniment-user-time-item',
  templateUrl: './accompaniment-user-time-item.component.html',
  styleUrls: [
    '../../accompaniment-user-time-list.component.scss',
    './accompaniment-user-time-item.component.scss',
  ],
})
export class AccompanimentUserTimeItemComponent {
  @Input() credit: any;

  constructor(public apiService: ApiService) {}
}
