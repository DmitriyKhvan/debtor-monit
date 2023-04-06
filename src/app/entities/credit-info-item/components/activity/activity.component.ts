import { Component } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent {
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
}
