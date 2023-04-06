import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-activity-pop-up',
  templateUrl: './activity-pop-up.component.html',
  styleUrls: ['./activity-pop-up.component.scss'],
})
export class ActivityPopUpComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  submitted = false;

  activities = [
    { label: 'Activity', value: 1 },
    { label: 'Activity2', value: 2 },
  ];

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      activity: new FormControl(null, Validators.required),
      comment: new FormControl(null, Validators.required),
    });
  }

  submitHandler() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;
  }

  ngOnDestroy(): void {}
}
