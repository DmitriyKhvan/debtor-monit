import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, combineLatest, switchMap } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';

@Component({
  selector: 'app-credit-info',
  templateUrl: './credit-info.component.html',
  styleUrls: ['./credit-info.component.scss'],
})
export class CreditInfoComponent implements OnInit {
  userInfo: null | undefined;
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
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

    // const urlParametrs = combineLatest(
    //   this.route.params,
    //   this.route.queryParams,
    //   (params, queryParams) => ({ ...params, ...queryParams })
    // );

    // urlParametrs
    //   .pipe(
    //     switchMap((routeParams: Params) => {
    //       this.loading = true;
    //       console.log('routeParams', routeParams);
    //       if (routeParams.type === 'confirmation') {
    //         return this.apiService.getUserInfoConfirmCredit(
    //           routeParams.claimsId
    //         );
    //       }

    //       return this.apiService.getUserInfo(routeParams.claimsId);
    //     })
    //   )
    //   .subscribe(
    //     (userInfo) => {
    //       this.userInfo = userInfo;
    //       this.loading = false;
    //     },
    //     (error) => {
    //       this.loading = false;
    //     }
    //   );
  }
}
