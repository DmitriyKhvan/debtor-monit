import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription, combineLatest, switchMap } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-credit-info',
  templateUrl: './credit-info.component.html',
  styleUrls: ['./credit-info.component.scss'],
})
export class CreditInfoComponent implements OnInit, OnDestroy {
  userInfo: null | undefined;
  loading: boolean = true;

  cSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private flagService: FlagService
  ) {}

  ngOnInit(): void {
    // this.cSub = this.flagService.cofirm$.subscribe((res) => {
    //   debugger;
    //   if (res.update) {
    //     this.getUserInfo();
    //   }
    // });

    this.getUserInfo();
  }

  getUserInfo() {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          this.loading = true;
          const claimsId = Number(params['claimsId']);
          this.apiService.claimsId = claimsId;
          return this.apiService.getUserInfo(claimsId);
        })
      )
      .subscribe(
        (userInfo) => {
          this.userInfo = userInfo;
          this.loading = false;
        },
        (error) => {
          this.loading = false;
        }
      );
  }

  ngOnDestroy(): void {
    this.cSub?.unsubscribe();
  }
}
