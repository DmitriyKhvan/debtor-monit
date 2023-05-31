import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { log } from 'console';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { FileService } from 'src/app/shared/api/file.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-print-schedule',
  templateUrl: './print-schedule.component.html',
  styleUrls: ['./print-schedule.component.scss'],
})
export class PrintScheduleComponent implements OnInit, OnDestroy {
  @Input() token: string = '';
  @Input() claimsId: string = '';
  // url: string = '';
  dSub!: Subscription;

  constructor(private fileService: FileService) {}

  ngOnInit(): void {
    // this.url = `${environment.fileUrl}/${this.token}`;
  }

  // downloadFile(filename: string = '') {
  //   const url = `${environment.dbUrl}/tools/scheduleFile?token=${this.token}`;

  //   // window.open(url, '_blank');

  //   const downloadLink = document.createElement('a');

  //   downloadLink.href = url;
  //   // downloadLink.target = '_blank';

  //   if (filename) downloadLink.setAttribute('download', filename);

  //   document.body.appendChild(downloadLink);
  //   downloadLink.click();

  //   window.URL.revokeObjectURL(url);
  //   downloadLink.remove();
  // }

  downloadFile() {
    this.dSub = this.fileService
      .getBlob(this.token)
      .subscribe((pdf: string) => {
        // let url = URL.createObjectURL(new Blob([blob]));

        let url = `data:application/pdf;base64,${pdf}`;
        let link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${this.claimsId}.pdf`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);
      });
  }

  ngOnDestroy(): void {
    this.dSub?.unsubscribe();
  }
}
