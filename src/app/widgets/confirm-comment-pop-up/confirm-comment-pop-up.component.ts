import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription, mergeMap } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { FlagService } from 'src/app/shared/api/flag.sevice';
import { Status } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-confirm-comment-pop-up',
  templateUrl: './confirm-comment-pop-up.component.html',
  styleUrls: ['./confirm-comment-pop-up.component.scss'],
})
export class ConfirmCommentPopUpComponent {
  @Input() title: string = '';
  @Input() option: string = '';

  form!: FormGroup;
  submitted = false;

  dSub!: Subscription;
  aSub!: Subscription;

  activities: Status[] = [];
  comment: string = '';

  constructor(
    public flagService: FlagService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      comment: new FormControl(null, Validators.required),
    });
  }

  closeForm() {
    this.flagService.toggleConfirmComment(false, '');
  }

  submitHandler() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const data = {
      type: 'Заметка',
      comment: this.form.value.comment,
    };

    this.aSub = this.apiService.confirmComment(data).subscribe((comment) => {
      this.submitted = false;
      this.flagService.setConfirmComment(true);
      this.closeForm();
    });

    // .subscribe((userInfo) => {
    //   this.submitted = false;

    //   //   this.userInfo = userInfo;
    //   this.flagService.setUserInfo({
    //     userInfo,
    //     isLoader: false,
    //   });

    //   // this.loader = false;

    //   let data = JSON.parse(localStorage.getItem('creditsConfirm') || '{}');
    //   const idx = data.credits.findIndex(
    //     (credit: any) => credit.id === userInfo.data.claimsInfo.id
    //   );
    //   data.credits[idx].status = userInfo.data.state;

    //   localStorage.setItem('creditsConfirm', JSON.stringify(data));

    //   this.closeForm();
    // });
  }

  ngOnDestroy(): void {
    // this.dSub?.unsubscribe();
    this.aSub?.unsubscribe();
  }
}
