import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription, exhaustMap, filter, fromEvent, map } from 'rxjs';
import { FileService } from 'src/app/shared/api/file.service';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss'],
})
export class UploadFilesComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('inputFile', { static: false }) inputFileRef!: ElementRef;

  cSub!: Subscription;

  constructor(private fileService: FileService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log('this.inputFileRef', this.inputFileRef);

    this.cSub = fromEvent(this.inputFileRef.nativeElement, 'change')
      .pipe(
        map((event: any) => {
          return event.target.files[0];
        }),
        filter((file) => !!file),
        map((file) => this.createFormData(file)),
        exhaustMap((data) => this.fileService.upload(data))
      )
      .subscribe((files) => {
        this.fileService.filesExcel$.next(files);
      });
  }

  private createFormData(file: any): FormData {
    const form = new FormData();
    form.append('file', file);
    return form;
  }

  upload() {
    this.inputFileRef.nativeElement.click();
  }

  ngOnDestroy(): void {
    this.cSub?.unsubscribe();
  }
}
function tab(
  arg0: () => void
): import('rxjs').OperatorFunction<unknown, unknown> {
  throw new Error('Function not implemented.');
}
