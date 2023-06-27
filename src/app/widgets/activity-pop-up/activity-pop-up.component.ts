import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  @ViewChild('inputFile') inputeFileRef!: ElementRef;
  @Input() loanId: string = '';
  @Input() projectType: number = 1;

  form!: FormGroup;
  submitted = false;
  files: any = [];

  // activities = [
  //   { label: 'Activity', value: 1 },
  //   { label: 'Activity2', value: 2 },
  // ];

  dSub!: Subscription;
  aSub!: Subscription;

  activities: Status[] = [];
  claimsId: number | null = null;

  constructor(
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

    // this.dSub = this.dicService.getActionType().subscribe((dic: Status[]) => {
    //   this.activities = dic;
    // });
  }

  uploadFile() {
    this.inputeFileRef.nativeElement.click();
  }

  changeInputFile(event: any) {
    const filesArr = Array.from(event.target.files);
    filesArr.forEach((file: any) => {
      this.files.push(file);
    });

    // this.files = Array.from(event.target.files);
  }

  removeFile(lastModified: number) {
    this.files = this.files.filter(
      (file: any) => file.lastModified !== lastModified
    );
  }

  closeForm() {
    this.flagService.tooggleActivity(null, null, false);
  }

  private createFormData() {
    const form = new FormData();
    form.append('claimsId', String(this.apiService.claimsId));
    form.append('loanId', this.loanId);
    form.append('type', this.form.value.activity);
    form.append('reminder', this.form.value.date?.toLocaleString('ru-RU'));
    form.append('text', this.form.value.comment);
    form.append('projectType', String(this.projectType));

    this.files.forEach((file: any) => {
      form.append('files', file);
    });

    return form;
  }

  submitHandler() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const data = {
      claimsId: this.apiService.claimsId,
      loanId: this.loanId,
      type: this.form.value.activity,
      // reminder: this.form.value.date._d.toLocaleString('ru-RU', {
      //   timeZone: 'UTC',
      // }),
      reminder: this.form.value.date?.toLocaleString('ru-RU'),
      text: this.form.value.comment,
    };

    const formData = this.createFormData();

    // this.aSub = this.apiService.clientAction(data).subscribe((res) => {
    //   this.flagService.updateActions$.next(true);
    //   this.submitted = false;
    //   this.closeForm();
    // });

    this.aSub = this.apiService.clientAction(formData).subscribe(
      (res) => {
        this.flagService.updateActions$.next(true);
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
    // this.dSub?.unsubscribe();
    this.aSub?.unsubscribe();
  }
}
