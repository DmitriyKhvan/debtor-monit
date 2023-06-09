import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';

@Component({
  selector: 'app-accompaniment-credit',
  templateUrl: './accompaniment-credit.component.html',
  styleUrls: ['./accompaniment-credit.component.scss']
})
export class AccompanimentCreditComponent implements OnInit{
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
          return this.apiService.getUserInfoAccompanimentCredit(claimsId);
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
