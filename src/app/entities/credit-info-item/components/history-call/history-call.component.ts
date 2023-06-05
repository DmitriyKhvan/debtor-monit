import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
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
  @Input() phone: string | undefined;

  loading: boolean = true;

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

    if (this.phone) {
      this.hSub = this.apiService
        .getHistoryCallByNumber(this.phone)
        .subscribe((calls) => {
          this.calls = calls;
          this.loading = false;
        });
    } else {
      this.hSub = this.apiService.getHistoryCall().subscribe((calls) => {
        this.calls = calls;
        this.loading = false;
      });
    }
  }

  getStyles() {
    return this.phone
      ? {
          'grid-template-areas':
            '"idx date operator duration status record_call"',
          'grid-template-columns':
            '40px 140px minmax(200px, 0.25fr) 120px 120px 1fr',
        }
      : null;
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
