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
import { Status, maxAmountData } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-payment-schedule',
  templateUrl: './payment-schedule.component.html',
  styleUrls: ['./payment-schedule.component.scss'],
})
export class PaymentScheduleComponent implements OnInit, OnDestroy {
  @ViewChild('pipelines', { static: true }) pipelinesRef!: ElementRef;
  @Input() userInfo: any = [];

  dSub!: Subscription;
  mSub!: Subscription;

  totaldebt: number = 0;

  maxAmountData: maxAmountData = {
    currentMaxAmount: '',
    date: '',
    diff: '',
    lastMaxAmount: '',
  };

  dic: Status[] = [];

  constructor(public dicService: DicService, private apiService: ApiService) {}

  ngOnInit(): void {
    this.dSub = this.dicService.getPayStatus().subscribe((dic: Status[]) => {
      this.dic = dic;
    });

    this.getMaxAmount();
  }

  getMaxAmount() {
    this.pipelinesRef.nativeElement.classList.add('loader');

    this.mSub = this.apiService
      .getMaxAmount({
        claimsId: this.userInfo.claimsId,
        contractId: this.userInfo.contractId,
      })
      .subscribe((res: maxAmountData) => {
        console.log(res);

        this.maxAmountData = res;
        this.pipelinesRef.nativeElement.classList.remove('loader');

        this.totaldebt =
          Number(this.userInfo.schedule.totaldebt) +
          (Number(this.maxAmountData.diff) || 0);

        this.totaldebt = this.totaldebt < 0 ? this.totaldebt : 0;
      });
  }

  ngOnDestroy(): void {
    this.dSub?.unsubscribe();
    this.mSub?.unsubscribe();
  }
}
