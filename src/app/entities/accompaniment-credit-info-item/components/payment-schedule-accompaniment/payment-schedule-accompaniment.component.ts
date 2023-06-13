import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { DicService } from 'src/app/shared/api/dic.service';
import { Status } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-payment-schedule-accompaniment',
  templateUrl: './payment-schedule-accompaniment.component.html',
  styleUrls: [
    '../../../credit-info-item/components/payment-schedule/payment-schedule.component.scss',
    './payment-schedule-accompaniment.component.scss',
  ],
})
export class PaymentScheduleAccompanimentComponent
  implements OnInit, OnDestroy
{
  @ViewChild('pipelines', { static: true }) pipelinesRef!: ElementRef;
  @Input() userInfo: any = [];

  dSub!: Subscription;

  dic: Status[] = [];

  constructor(public dicService: DicService, public apiService: ApiService) {}

  ngOnInit(): void {
    this.dSub = this.dicService.getPayStatus().subscribe((dic: Status[]) => {
      this.dic = dic;
    });
  }

  ngOnDestroy(): void {
    this.dSub?.unsubscribe();
  }
}
