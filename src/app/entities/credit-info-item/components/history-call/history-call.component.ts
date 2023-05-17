import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { DicService } from 'src/app/shared/api/dic.service';
import { Status } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-history-call',
  templateUrl: './history-call.component.html',
  styleUrls: ['./history-call.component.scss'],
})
export class HistoryCallComponent implements OnInit, OnDestroy {
  hSub!: Subscription;
  dSub!: Subscription;

  calls: any = [];
  dic: Status[] = [];

  constructor(public dicService: DicService, private apiService: ApiService) {}

  ngOnInit(): void {
    this.dSub = this.dicService
      .getKerioOperatorStatus()
      .subscribe((dic: Status[]) => {
        this.dic = dic;
        console.log(dic);
      });

    this.hSub = this.apiService.getHistoryCall().subscribe((calls) => {
      this.calls = calls;
    });
  }

  ngOnDestroy(): void {
    this.hSub?.unsubscribe();
    this.dSub?.unsubscribe();
  }
}
