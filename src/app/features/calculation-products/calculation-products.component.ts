import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';

@Component({
  selector: 'app-calculation-products',
  templateUrl: './calculation-products.component.html',
  styleUrls: ['./calculation-products.component.scss'],
})
export class CalculationProductsComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  cSub!: Subscription;

  submitted = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      claimsId: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
      ]),
    });
  }

  submitHandler() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    this.cSub = this.apiService.getLoanSums(this.form.value.claimsId).subscribe(
      () => {
        this.submitted = false;
      },
      (error) => {
        this.submitted = false;
        console.log('error', error);
      }
    );
  }

  ngOnDestroy(): void {
    this.cSub?.unsubscribe();
  }
}
