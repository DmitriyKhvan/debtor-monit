import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  flagSub!: Subscription;
  flag = false;

  constructor(public flagService: FlagService) {}

  ngOnInit(): void {
    this.flagSub = this.flagService.isSidebar$.subscribe((flag) => {
      this.flag = flag;
      // debugger;
    });
  }

  ngOnDestroy(): void {
    this.flagSub?.unsubscribe();
  }
}
