import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { DicService } from 'src/app/shared/api/dic.service';
import { FlagService } from 'src/app/shared/api/flag.sevice';
import { Status } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-activity-pop-up',
  templateUrl: './activity-pop-up.component.html',
  styleUrls: ['./activity-pop-up.component.scss'],
})
export class ActivityPopUpComponent implements OnInit, OnDestroy {
  @ViewChild('picker1') picker: any;
  @Input() loanId: string = '';

  form!: FormGroup;
  submitted = false;

  // activities = [
  //   { label: 'Activity', value: 1 },
  //   { label: 'Activity2', value: 2 },
  // ];

  dSub!: Subscription;
  aSub!: Subscription;

  activities: Status[] = [];
  claimsId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    public flagService: FlagService,
    public dicService: DicService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      activity: new FormControl(null, Validators.required),
      date: new FormControl(null),
      comment: new FormControl(null, Validators.required),
    });

    this.dSub = this.dicService.getActionType().subscribe((dic: Status[]) => {
      this.activities = dic;
    });

    this.route.params.subscribe((params: Params) => {
      this.claimsId = params['claimsId'];
      console.log("param['claimsId']", params);
    });
  }

  closeForm() {
    this.flagService.tooggleActivity(null, false);
  }

  submitHandler() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const data = {
      claimsId: this.claimsId,
      loanId: this.loanId,
      type: this.form.value.activity,
      reminder: this.form.value.date,
      text: this.form.value.comment,
    };

    console.log(data);

    // this.aSub = this.apiService.clientAction(data).subscribe((res) => {
    //   this.submitted = false;
    // });
  }

  ngOnDestroy(): void {
    this.dSub?.unsubscribe();
    this.aSub?.unsubscribe();
  }
}
