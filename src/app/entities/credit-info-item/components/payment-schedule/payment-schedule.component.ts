import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-schedule',
  templateUrl: './payment-schedule.component.html',
  styleUrls: ['./payment-schedule.component.scss'],
})
export class PaymentScheduleComponent {
  payments = [
    {
      id: 1,
      month: 1,
      date: '01.11.2022',
      debt: '2 999 000',
      paid: '2 999 000',
      remainder: '0',
      status: 'Погашено',
    },
    {
      id: 2,
      month: 2,
      date: '01.12.2022',
      debt: '2 999 000',
      paid: '2 999 000',
      remainder: '0',
      status: 'Частично погашен',
    },
    {
      id: 3,
      month: 3,
      date: '01.01.2023',
      debt: '2 999 000',
      paid: '2 999 000',
      remainder: '0',
      status: 'Не погашен',
    },
    {
      id: 4,
      month: 4,
      date: '01.02.2023',
      debt: '2 999 000',
      paid: '2 999 000',
      remainder: '0',
      status: 'В ожидании',
    },
  ];
}
