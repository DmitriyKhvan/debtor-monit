import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-remove-add-client-info-pop-up',
  templateUrl: './remove-add-client-info-pop-up.component.html',
  styleUrls: ['./remove-add-client-info-pop-up.component.scss'],
})
export class RemoveAddClientInfoPopUpComponent implements OnInit, OnDestroy {
  @Input() id: number = 0;

  submitted = false;
  aSub!: Subscription;

  constructor(
    public flagService: FlagService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {}

  closeForm() {
    this.flagService.removeAddClientInfo$.next({ flag: false });
  }

  submitHandler() {
    this.aSub = this.apiService
      .removeAddClientInfo(this.id)
      .subscribe((addClientInfo) => {
        this.flagService.isAddClientInfoForm$.next({
          flag: false,
          addClientInfo,
        });

        this.submitted = false;
        this.closeForm();
      });
  }

  ngOnDestroy(): void {
    this.aSub?.unsubscribe();
  }
}
