import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-add-phone-pop-up',
  templateUrl: './add-phone-pop-up.component.html',
  styleUrls: ['./add-phone-pop-up.component.scss'],
})
export class AddPhonePopUpComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  submitted = false;
  aSub!: Subscription;

  constructor(
    public flagService: FlagService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      phone: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    });
  }

  closeForm() {
    this.flagService.isAddPhoneForm$.next({ flag: false });
  }

  submitHandler() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const data = {
      type: 'ADD_PHONE',
      value: this.form.value.phone,
      description: this.form.value.description,
    };

    this.aSub = this.apiService.addPhone(data).subscribe((phoneData) => {
      this.flagService.isAddPhoneForm$.next({ flag: false, phoneData });

      this.submitted = false;
      this.closeForm();
    });
  }

  ngOnDestroy(): void {
    // this.dSub?.unsubscribe();
    this.aSub?.unsubscribe();
  }
}
