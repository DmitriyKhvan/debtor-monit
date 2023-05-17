import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { FlagService } from 'src/app/shared/api/flag.sevice';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/shared/api/credit.service';

@Component({
  selector: 'app-credit-layout',
  templateUrl: './credit-layout.component.html',
  styleUrls: ['./credit-layout.component.scss'],
})
export class CreditLayoutComponent {
  flagSub!: Subscription;
  flagConfirmSub!: Subscription;
  loanId = '';
  title = '';
  option = '';
  flag = false;
  flagConfirm = false;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    public flagService: FlagService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.flagSub = this.flagService.isActivityForm$.subscribe((data) => {
      this.flag = data.isOpen;
      this.loanId = data.loanId;
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
  }
}
