import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-add-client-info-pop-up',
  templateUrl: './add-client-info-pop-up.component.html',
  styleUrls: ['./add-client-info-pop-up.component.scss'],
})
export class AddClientInfoPopUpComponent implements OnInit, OnDestroy {
  @Input() formData: any = {
    id: 0,
    description: '',
    value: '',
  };

  form!: FormGroup;
  submitted = false;
  aSub!: Subscription;

  constructor(
    public flagService: FlagService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      phone: new FormControl(this.formData?.value, Validators.required),
      description: new FormControl(
        this.formData?.description,
        Validators.required
      ),
    });
  }

  closeForm() {
    this.flagService.isAddClientInfoForm$.next({ flag: false });
  }

  submitHandler() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const data = {
      id: this.formData?.id,
      type: 'ADD_PHONE',
      value: this.form.value.phone,
      description: this.form.value.description,
    };

    this.aSub = this.apiService
      .addClientInfo(data)
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
    // this.dSub?.unsubscribe();
    this.aSub?.unsubscribe();
  }
}