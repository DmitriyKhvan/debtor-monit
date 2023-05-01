import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-print-schedule',
  templateUrl: './print-schedule.component.html',
  styleUrls: ['./print-schedule.component.scss'],
})
export class PrintScheduleComponent implements OnInit {
  @Input() token: string = '';
  url: string = '';

  ngOnInit(): void {
    this.url = `${environment.fileUrl}/${this.token}`;
  }

  downloadFile(filename: string = '') {
    const url = `${environment.fileUrl}/${this.token}`;

    // window.open(url, '_blank');

    const downloadLink = document.createElement('a');

    downloadLink.href = url;
    // downloadLink.target = '_blank';

    if (filename) downloadLink.setAttribute('download', filename);

    document.body.appendChild(downloadLink);
    downloadLink.click();

    window.URL.revokeObjectURL(url);
    downloadLink.remove();
  }
}
