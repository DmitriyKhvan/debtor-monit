import { Component, Input } from '@angular/core';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-get-history-calls',
  templateUrl: './get-history-calls.component.html',
  styleUrls: ['./get-history-calls.component.scss'],
})
export class GetHistoryCallsComponent {
  @Input() phone: string = '';

  constructor(private flagService: FlagService) {}

  getHistoryCalls() {
    this.flagService.historyCalls$.next({ flag: true, phone: this.phone });
  }
}
