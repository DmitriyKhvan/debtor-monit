import { Component, Input } from '@angular/core';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-history-calls-pop-up',
  templateUrl: './history-calls-pop-up.component.html',
  styleUrls: ['./history-calls-pop-up.component.scss'],
})
export class HistoryCallsPopUpComponent {
  @Input() phone: string | undefined;

  constructor(private flagService: FlagService) {}

  closeForm() {
    this.flagService.historyCalls$.next({ flag: false });
  }
}
