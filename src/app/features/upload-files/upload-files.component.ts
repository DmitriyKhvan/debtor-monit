import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Subscription, exhaustMap, filter, fromEvent, map } from 'rxjs';
import { FileService } from 'src/app/shared/api/file.service';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  template: `<ng-template #template>
    <div class="ant-notification-notice-content">
      <div class="ant-notification-notice-with-icon">
        <span class="ant-notification-notice-icon">
          <span nz-icon nzType="smile" style="color: rgb(16, 142, 233);"></span>
        </span>
        <div class="ant-notification-notice-message">Notification Title</div>
        <div class="ant-notification-notice-description">
          This is the content of the notification. This is the content of the
          notification. This is the content of the notification.
        </div>
      </div>
    </div>
  </ng-template>`,
  styleUrls: ['./upload-files.component.scss'],
})
export class UploadFilesComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('inputFile', { static: false }) inputFileRef!: ElementRef;

  cSub!: Subscription;

  constructor(
    private fileService: FileService,
    private notification: NzNotificationService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // console.log('this.inputFileRef', this.inputFileRef);

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

        this.notification.success(
          'Добавление файла EXCEL',
          'Файл добавлен успешно',
          { nzPlacement: 'bottomLeft', nzDuration: 4500 }
        );
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
