import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-accompaniment-user',
  templateUrl: './accompaniment-user.component.html',
  styleUrls: ['./accompaniment-user.component.scss'],
})
export class AccompanimentUserComponent implements OnInit, OnDestroy {
  userInfo: any;
  loading: boolean = true;

  fSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private flagService: FlagService
  ) {}

  ngOnInit(): void {
    this.getUserInfo();

    // this.fSub = this.flagService.changeData$.subscribe((data: any) => {
    //   if (data.update) {
    //     this.getUserInfo();
    //   }
    // });
  }

  getUserInfo() {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          this.loading = true;
          const username = params['username'];
          return this.apiService.getUserInfoAccompanimentUser(username);
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
    this.fSub?.unsubscribe();
  }
}
