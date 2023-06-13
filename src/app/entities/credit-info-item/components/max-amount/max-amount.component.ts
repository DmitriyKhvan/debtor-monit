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
import { maxAmountData } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-max-amount',
  templateUrl: './max-amount.component.html',
  styleUrls: ['./max-amount.component.scss'],
})
export class MaxAmountComponent implements OnInit, OnDestroy {
  @Input() claimsId: number = 0;
  @Input() contractId: string = '';
  @Input() totaldebt: number = 0;

  @ViewChild('pipelines', { static: true }) pipelinesRef!: ElementRef;

  mSub!: Subscription;

  maxAmountData: maxAmountData = {
    currentMaxAmount: '',
    date: '',
    diff: '',
    lastMaxAmount: '',
  };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getMaxAmount();
  }

  getMaxAmount() {
    this.pipelinesRef.nativeElement.classList.add('loader');

    this.mSub = this.apiService
      .getMaxAmount({
        claimsId: this.claimsId,
        contractId: this.contractId,
      })
      .subscribe((res: maxAmountData) => {
        console.log(res);

        this.maxAmountData = res;
        this.pipelinesRef.nativeElement.classList.remove('loader');

        const totaldebtRes =
          Number(this.totaldebt) + (Number(this.maxAmountData.diff) || 0);

        this.apiService.totaldebt = totaldebtRes < 0 ? totaldebtRes : 0;
      });
  }

  ngOnDestroy(): void {
    this.mSub?.unsubscribe();
  }
}
