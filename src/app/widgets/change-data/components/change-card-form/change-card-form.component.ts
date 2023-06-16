import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-change-card-form',
  templateUrl: './change-card-form.component.html',
  styleUrls: ['./change-card-form.component.scss'],
})
export class ChangeCardFormComponent implements OnInit, OnDestroy {
  @Input() mask: string = '';
  @Input() mask2: string = '';
  @Input() value: string = '';
  @Input() value2: string = '';

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
      cardNumber: new FormControl(null, Validators.required),
      cardDate: new FormControl(null, Validators.required),
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
      cardNumber: this.form.value.cardNumber,
      cardDate: this.form.value.cardDate,
    };

    this.sSub = this.apiService.changeCard(data).subscribe((res) => {
      this.flagService.changeData$.next({ update: true });
    });
  }

  ngOnDestroy(): void {}
}
