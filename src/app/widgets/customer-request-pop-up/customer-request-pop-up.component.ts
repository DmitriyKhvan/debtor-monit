import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, Subscription, switchMap, tap } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-customer-request-pop-up',
  templateUrl: './customer-request-pop-up.component.html',
  styleUrls: ['./customer-request-pop-up.component.scss'],
})
export class CustomerRequestPopUpComponent implements OnInit, OnDestroy {
  rSub!: Subscription;
  userInfo: any;
  claimsId: number = 0;

  constructor(
    private flagService: FlagService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.flagService.claimsId$
      .pipe(
        tap((claimsId) => (this.claimsId = claimsId)),
        filter((claimsId) => claimsId != 0),
        switchMap((claimsId) => {
          return this.apiService.getUserInfoAccompanimentCreditShort(claimsId);
        })
      )
      .subscribe((userInfo) => {
        this.userInfo = userInfo;
      });
  }

  getUserInfo(claimsId: number) {
    this.rSub = this.apiService
      .getUserInfoAccompanimentCreditShort(claimsId)
      .subscribe((userInfo) => {
        this.userInfo = userInfo;
      });
  }

  closeForm() {
    this.flagService.claimsId$.next(0);
  }

  ngOnDestroy(): void {
    this.rSub?.unsubscribe();
  }
}
