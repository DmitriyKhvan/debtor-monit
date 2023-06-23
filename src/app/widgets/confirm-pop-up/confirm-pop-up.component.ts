import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-confirm-pop-up',
  templateUrl: './confirm-pop-up.component.html',
  styleUrls: ['./confirm-pop-up.component.scss'],
})
export class ConfirmPopUpComponent implements OnInit, OnDestroy {
  submitted = false;
  flag = false;
  id: number | undefined = 0;

  aSub!: Subscription;
  cSub!: Subscription;

  constructor(
    public flagService: FlagService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.cSub = this.flagService.cofirm$.subscribe((data) => {
      this.flag = data.flag;
      this.id = data.id;
    });
  }

  closeForm() {
    this.flagService.cofirm$.next({ flag: false });
  }

  submitHandler() {
    // debugger;
    this.aSub = this.apiService
      .declineInvoice(this.id)
      .subscribe((insuranceDebit) => {
        this.flagService.cofirm$.next({
          flag: false,
          update: true,
          insuranceDebit,
        });

        this.submitted = false;
        this.closeForm();
      });
  }

  ngOnDestroy(): void {
    this.aSub?.unsubscribe();
    this.cSub?.unsubscribe();
  }
}
