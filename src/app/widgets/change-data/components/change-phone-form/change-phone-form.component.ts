import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-change-phone-form',
  templateUrl: './change-phone-form.component.html',
  styleUrls: ['./change-phone-form.component.scss'],
})
export class ChangePhoneFormComponent implements OnInit, OnDestroy {
  @Input() mask: string = '';
  @Input() value: string = '';
  @Input() type: number = 0;

  form!: FormGroup;
  submitted = false;
  sSub!: Subscription;

  constructor(
    private apiService: ApiService,
    private flagService: FlagService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      phone: new FormControl(null, Validators.required),
    });
  }

  closeForm() {
    this.flagService.changeData$.next({ value: '' });
  }

  submitHandler() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const data = {
      type: this.type,
      phone: `+${this.form.value.phone}`,
    };

    this.sSub = this.apiService
      .changePhone(data)
      // .pipe(
      //   switchMap((res) => {
      //     return this.apiService.getUserInfoAccompanimentCredit(
      //       this.apiService.claimsId
      //     );
      //   })
      // )
      .subscribe((res) => {
        this.flagService.changeData$.next({ update: true });
      });
  }

  ngOnDestroy(): void {}
}
