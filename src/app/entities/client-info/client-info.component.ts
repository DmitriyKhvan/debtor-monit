import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  EMPTY,
  find,
  map,
  Observable,
  pairwise,
  startWith,
  Subscription,
  switchMap,
} from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss'],
})
export class ClientInfoComponent implements OnInit, OnDestroy {
  userSub!: Subscription;
  userInfo: any = null;
  loading = true;

  constructor(public flagService: FlagService, private apiServer: ApiService) {}

  ngOnInit(): void {
    this.userSub = this.flagService.userInfo$
      .pipe(
        startWith(null),
        pairwise(),
        // map(([prev, curr]) => {
        //   return curr;
        // }),
        switchMap(([prevId, currId]) => {
          if (prevId !== currId) {
            this.loading = true;
            return this.apiServer.getUserInfo(currId);
          }
          return EMPTY;
        })
      )
      .subscribe((userData) => {
        this.userInfo = userData;

        this.loading = false;
      });
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
  }
}
