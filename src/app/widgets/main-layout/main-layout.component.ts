import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  nSub!: Subscription;
  flag: boolean = false;

  constructor(public flagService: FlagService) {}

  ngOnInit(): void {
    this.nSub = this.flagService.isNotifications$.subscribe(
      (flag) => (this.flag = flag)
    );
  }

  ngOnDestroy(): void {
    this.nSub?.unsubscribe();
  }
}
