import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FileService } from 'src/app/shared/api/file.service';
import { Status } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-history-call-item',
  templateUrl: './history-call-item.component.html',
  styleUrls: [
    '../../history-call.component.scss',
    './history-call-item.component.scss',
  ],
})
export class HistoryCallItemComponent implements OnInit, OnDestroy {
  @Input() call: any;
  @Input() status: Status | undefined;
  fSub!: Subscription;
  audioSource = '';

  constructor(private fileService: FileService) {}

  dicClass: any = {
    1: 'warning',
    2: 'warning',
    3: 'danger',
    4: 'success',
    5: 'danger',
    6: 'warning',
  };

  ngOnInit(): void {
    console.log(this.call.call.audio);
    if (this.call.call.audio) {
      this.fSub = this.fileService
        .getBlobRecord(this.call.call.audio)
        .subscribe((data) => {
          let raw = window.atob(data);
          let rawLength = raw.length;
          let array = new Uint8Array(new ArrayBuffer(rawLength));

          for (let i = 0; i < rawLength; i++) {
            array[i] = raw.charCodeAt(i);
          }

          let blob = new Blob([array], { type: 'audio/wav' });
          let blobUrl = URL.createObjectURL(blob);
          this.call.call.audioUrl = blobUrl;
        });
    }
  }

  downloadRecord(url: string) {
    let link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', ``);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }

  ngOnDestroy(): void {
    this.fSub?.unsubscribe();
  }
}
