import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/shared/api/credit.service';

@Component({
  selector: 'app-accompaniment-user-item',
  templateUrl: './accompaniment-user-item.component.html',
  styleUrls: [
    '../../accompaniment-user-list.component.scss',
    './accompaniment-user-item.component.scss',
  ],
})
export class AccompanimentUserItemComponent {
  @Input() credit: any;

  constructor(public apiService: ApiService) {}
}
