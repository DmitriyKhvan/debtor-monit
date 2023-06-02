import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
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
  @ViewChild('audio') audioRef!: ElementRef;
  @Input() call: any;
  @Input() status: Status | undefined;
  @Input() phone: string | undefined;
  @Input() getStyles: any;

  fSub!: Subscription;

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

  playAudio(call: any, audioElement: any) {
    // this.playOnlyCurrentAudio(audioElement.target);
    this.fileService.audios.forEach((audio) => {
      if (
        audio.audioRef &&
        audio.audioRef.nativeElement !== audioElement.target
      ) {
        audio.audioRef.nativeElement.pause();
      }
    });
  }

  // playOnlyCurrentAudio(currentAudio: any) {
  //   const records: any = document.getElementsByTagName('audio');
  //   console.log(records);
  //   for (let record of records) {
  //     console.log(record);
  //     if (record !== currentAudio) {
  //       record.pause();
  //     }
  //   }
  // }

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
