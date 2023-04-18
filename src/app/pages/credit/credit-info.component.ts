import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';

@Component({
  selector: 'app-credit-info',
  templateUrl: './credit-info.component.html',
  styleUrls: ['./credit-info.component.scss'],
})
export class CreditInfoComponent {
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
  }
}
