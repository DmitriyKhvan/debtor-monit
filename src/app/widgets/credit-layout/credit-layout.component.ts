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
  flagConfirmSub!: Subscription;
  showHistoryCallsSub!: Subscription;

  loanId = '';
  projectType = 1;
  title = '';
  option = '';
  flag = false;
  flagHistoryCalls = false;
  phone: string | undefined = '';
  flagConfirm = false;

  constructor(public flagService: FlagService) {}

  ngOnInit(): void {
    this.flagSub = this.flagService.isActivityForm$.subscribe((data) => {
      this.flag = data.isOpen;
      this.loanId = data.loanId;
      this.projectType = data.projectType;
      // debugger;
    });

    this.flagConfirmSub = this.flagService.isConfimrCommentForm$.subscribe(
      (data) => {
        this.flagConfirm = data.isOpen;
        this.title = data.title;
        // debugger;
      }
    );

    // this.apiService.arrayObj

    // console.log(this.location.path());

    this.showHistoryCallsSub = this.flagService.historyCalls$.subscribe(
      (data) => {
        this.phone = data.phone;
        this.flagHistoryCalls = data.flag;
      }
    );
  }

  // addPath(){
  //   for(let [key,value] of this.apiService.objUser){
  //     if(this.location.path().includes(key.toLowerCase())){

  //     }
  //   }
  // }

  closeTooltip(event: any) {
    if (!event.target.classList.contains('remove')) {
      // console.log(event.target.classList.contains('remove'));
      // console.log(document.querySelector('.tooltip'));

      document.querySelectorAll('.tooltip').forEach((el) => {
        el.classList.remove('open');
      });
    }
  }

  ngOnDestroy(): void {
    this.flagSub?.unsubscribe();
    this.flagConfirmSub?.unsubscribe();
    this.showHistoryCallsSub?.unsubscribe();
  }
}
