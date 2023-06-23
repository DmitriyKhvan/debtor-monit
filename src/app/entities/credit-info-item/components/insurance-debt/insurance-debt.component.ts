import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-insurance-debt',
  templateUrl: './insurance-debt.component.html',
  styleUrls: ['./insurance-debt.component.scss'],
})
export class InsuranceDebtComponent implements OnInit, OnDestroy {
  @Input() userInfo: any;
  cSub!: Subscription;

  constructor(private flagService: FlagService) {}

  ngOnInit(): void {
    this.cSub = this.flagService.cofirm$.subscribe((res) => {
      if (res.update) {
        this.userInfo = {
          ...this.userInfo,
          insuranceDebit: res.insuranceDebit,
        };
      }
    });
  }

  addClaimCheck() {
    this.flagService.claimCheck$.next({ flag: true });
  }

  ngOnDestroy(): void {
    this.cSub?.unsubscribe();
  }
}
