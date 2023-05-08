import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/shared/api/credit.service';
import { Status } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss', '../../credit-list.component.scss'],
})
export class CreditComponent {
  @Input() credit: any;
  // @Input() status: Status = { code: 0, name: '' };
  @Input() status: Status | undefined;

  statusDic = {
    0: 'warning',
    1: 'success',
    2: 'default',
  };

  constructor(public apiService: ApiService) {}
}
