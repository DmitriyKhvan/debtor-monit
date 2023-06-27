import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-download-file',
  templateUrl: './download-file.component.html',
  styleUrls: ['./download-file.component.scss'],
})
export class DownloadFileComponent {
  @Input() type: string = '';
  @Input() base64: string = '';
  @Input() filename: string = '';

  download() {
    let url = `data:${this.type};base64,${this.base64}`;
    let link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${this.filename}`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }
}
