import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-statistics-form-pop-up',
  templateUrl: './statistics-form-pop-up.component.html',
  styleUrls: ['./statistics-form-pop-up.component.scss'],
})
export class StatisticsFormPopUpComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  sSub!: Subscription;

  submitted = false;

  constructor(
    private flagSerivce: FlagService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      fromDate: new FormControl(null, Validators.required),
      toDate: new FormControl(null, Validators.required),
    });
  }

  closeForm() {
    this.flagSerivce.statisticsForm$.next(false);
  }

  submitHandler() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const data = {
      fromDate: this.form.value.fromDate?.toLocaleString('ru-RU'),
      toDate: this.form.value.toDate?.toLocaleString('ru-RU'),
    };

    console.log(data);

    this.sSub = this.apiService.getStatisticsList(data).subscribe(
      (res) => {
        this.submitted = false;
        this.closeForm();
      },
      (error) => {
        console.log(error);
        this.submitted = false;
      }
    );
  }

  ngOnDestroy(): void {
    this.sSub?.unsubscribe();
  }
}
