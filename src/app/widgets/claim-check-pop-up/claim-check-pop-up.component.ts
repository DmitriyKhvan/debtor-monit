import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidator } from 'src/app/shared/validators/my.validators';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-claim-check-pop-up',
  templateUrl: './claim-check-pop-up.component.html',
  styleUrls: ['./claim-check-pop-up.component.scss'],
})
export class ClaimCheckPopUpComponent implements OnInit, OnDestroy {
  @ViewChild('inputFile') inputeFileRef!: ElementRef;

  form!: FormGroup;
  files: any = [];
  submitted = false;
  cSub!: Subscription;
  fSub!: Subscription;
  flag: boolean = false;

  constructor(
    private apiService: ApiService,
    private flagService: FlagService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      numberClaimCheck: new FormControl(null, [
        Validators.required,
        MyValidator.spaceOnlyValidator,
      ]),
      amount: new FormControl(null, [
        Validators.required,
        MyValidator.spaceOnlyValidator,
      ]),
      date: new FormControl(null, Validators.required),
      file: new FormControl(null, Validators.required),
    });

    this.fSub = this.flagService.claimCheck$.subscribe((data) => {
      this.flag = data.flag;
    });
  }

  closeForm() {
    this.flagService.claimCheck$.next({ flag: false });
  }

  uploadFile() {
    this.inputeFileRef.nativeElement.click();
  }

  changeInputFile(event: any) {
    const filesArr = Array.from(event.target.files);
    filesArr.forEach((file: any) => {
      this.files.push(file);
    });
  }

  removeFile(lastModified: number) {
    this.files = this.files.filter(
      (file: any) => file.lastModified !== lastModified
    );
  }

  private createFormData() {
    const form = new FormData();
    form.append('claimsId', String(this.apiService.claimsId));
    form.append('invoiceNumber', this.form.value.numberClaimCheck);
    form.append('summa', this.form.value.amount);
    form.append(
      'transactionDate',
      moment(this.form.value.date).format('DD.MM.YYYY HH:mm:ss')
    );

    this.files.forEach((file: any) => {
      form.append('file', file);
    });

    return form;
  }

  submitHandler() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const formData = this.createFormData();

    // this.flagService.cofirm$.next({ flag: false, update: true });

    this.cSub = this.apiService.addInvoice(formData).subscribe(
      (insuranceDebit) => {
        this.submitted = false;
        this.closeForm();
        this.flagService.cofirm$.next({
          flag: false,
          update: true,
          insuranceDebit,
        });
      },
      () => {
        this.submitted = false;
      }
    );
  }

  ngOnDestroy(): void {
    this.cSub?.unsubscribe();
    this.fSub?.unsubscribe();
  }
}
