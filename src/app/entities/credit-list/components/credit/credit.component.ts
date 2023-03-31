import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss', '../../credit-list.component.scss'],
})
export class CreditComponent implements OnInit, OnDestroy {
  @Input() credit: any;
  @Input() idx: number | undefined;
  flagSub!: Subscription;
  currentId: number | null = null;

  constructor(public flagService: FlagService) {}

  ngOnInit(): void {
    this.flagSub = this.flagService.userInfo$.subscribe(
      (id) => (this.currentId = id)
    );
  }

  getUserInfo(id: number, isOpen: boolean) {
    this.flagService.tooggleSidebar(isOpen);
    this.flagService.getUserInfo(id);
  }

  ngOnDestroy(): void {
    this.flagSub?.unsubscribe();
  }
}
