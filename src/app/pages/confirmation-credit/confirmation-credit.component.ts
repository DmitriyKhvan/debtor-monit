import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, combineLatest, switchMap, map } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';

@Component({
  selector: 'app-confirmation-credit',
  templateUrl: './confirmation-credit.component.html',
  styleUrls: ['./confirmation-credit.component.scss'],
})
export class ConfirmationCreditComponent implements OnInit {
  userInfo: any;
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          this.loading = true;
          const claimsId = Number(params['claimsId']);
          this.apiService.claimsId = claimsId;
          return this.apiService.getUserInfoConfirmCredit(claimsId);
        }),
        map((userInfo) => {
          return {
            //merchant------------------
            merchantGroup: userInfo.data.merchant.vendor,
            // merchantName: userInfo.data.merchant.vendor,
            merchantAddress: userInfo.data.merchant.address,

            //client-------------------
            fio: userInfo.data.client.fullName,
            phoneFirst: userInfo.data.client.phone_1,
            phoneSecond: userInfo.data.client.phone_2,
            // docSerial: userInfo.data.client.docSerial,
            // docNumber: userInfo.data.client.docNumber,
            // clientAcc: userInfo.data.,

            products: userInfo.data.products.map((product: any) => {
              return {
                id: Date.now(),
                name: product.name,
                price: product.amount,
              };
            }),

            //contract----------------
            productsSum: userInfo.data.contract.productsAmount,
            contractId: userInfo.data.contract.contractId,
            contractDate: userInfo.data.contract.contractDate,

            //loanInfo----------------
            periodUse: userInfo.data.loanInfo.period,
            totalSumForPay: userInfo.data.loanInfo.loanAmount,
            monthly: userInfo.data.loanInfo.monthly,
            // lastPayDate: userInfo.data.,
          };
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
}
