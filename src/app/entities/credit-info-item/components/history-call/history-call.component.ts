import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { DicService } from 'src/app/shared/api/dic.service';
import { Status } from 'src/app/shared/interfaces';
import { HistoryCallItemComponent } from './components/history-call-item/history-call-item.component';
import { FileService } from 'src/app/shared/api/file.service';

@Component({
  selector: 'app-history-call',
  templateUrl: './history-call.component.html',
  styleUrls: ['./history-call.component.scss'],
})
export class HistoryCallComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren('audios') audiosRef!: QueryList<HistoryCallItemComponent>;

  hSub!: Subscription;
  dSub!: Subscription;

  calls: any = [];
  dic: Status[] = [];

  constructor(
    public dicService: DicService,
    private apiService: ApiService,
    private fileService: FileService
  ) {}

  ngOnInit(): void {
    this.dSub = this.dicService
      .getKerioOperatorStatus()
      .subscribe((dic: Status[]) => {
        this.dic = dic;
      });

    this.hSub = this.apiService.getHistoryCall().subscribe((calls) => {
      this.calls = calls;
    });
  }

  ngAfterViewInit(): void {
    console.log(this.audiosRef);
    this.fileService.audios = this.audiosRef;
  }

  ngOnDestroy(): void {
    this.hSub?.unsubscribe();
    this.dSub?.unsubscribe();
  }
}
