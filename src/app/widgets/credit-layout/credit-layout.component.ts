import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

  constructor(private route: ActivatedRoute, public flagService: FlagService) {}

  ngOnInit(): void {
    this.flagSub = this.flagService.isActivityForm$.subscribe((data) => {
      this.flag = data.isOpen;
      this.loanId = data.loanId;
      // debugger;
    });
  }

  closeTooltip(event: any) {
    if (!event.target.classList.contains('remove')) {
      console.log(event.target.classList.contains('remove'));
      console.log(document.querySelector('.tooltip'));

      document.querySelectorAll('.tooltip').forEach((el) => {
        el.classList.remove('open');
      });
    }
  }

  ngOnDestroy(): void {
    this.flagSub?.unsubscribe();
  }
}
