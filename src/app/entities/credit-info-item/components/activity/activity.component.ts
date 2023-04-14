import { Component, Input } from '@angular/core';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent {
  @Input() loanId: string | undefined;

  comments = [
    {
      id: 1,
      status: 'Заметка ',
      date: '11 мая 2022 г., 11:53',
      comment: 'Клиент не вышел на связь',
    },
    {
      id: 2,
      status: 'Оплатит завтра ',
      date: '11 мая 2022 г., 11:53',
      comment: 'Напомнинаие настроено на 12.03.2023  18:00',
    },
  ];

  constructor(public flagService: FlagService) {}

  createActivity(loanId: string | undefined) {
    this.flagService.tooggleActivity(loanId, true);
  }
}
