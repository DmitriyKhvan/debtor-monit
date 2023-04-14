import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-credit-layout',
  templateUrl: './credit-layout.component.html',
  styleUrls: ['./credit-layout.component.scss'],
})
export class CreditLayoutComponent {
  flagSub!: Subscription;
  loanId = '';
  flag = false;

  constructor(public flagService: FlagService) {}

  ngOnInit(): void {
    this.flagSub = this.flagService.isActivityForm$.subscribe((data) => {
      this.flag = data.isOpen;
      this.loanId = data.loanId;
      // debugger;
    });
  }

  ngOnDestroy(): void {
    this.flagSub?.unsubscribe();
  }
}
