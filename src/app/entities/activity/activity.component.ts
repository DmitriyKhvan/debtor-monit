import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { DicService } from 'src/app/shared/api/dic.service';
import { FlagService } from 'src/app/shared/api/flag.sevice';
import { Action, Status } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit, OnDestroy {
  @ViewChildren('action', { read: ElementRef })
  actionsRef!: QueryList<ElementRef>;
  @Input() loanId: string | undefined;
  @Input() projectType: number = 1;
  @Input() height: string | undefined;

  cSub!: Subscription;
  dSub!: Subscription;
  aSub!: Subscription;

  actions: Action[] = [
    // {
    //   id: 0,
    //   debtorId: 0,
    //   type: 0,
    //   reminder: '',
    //   text: '',
    //   createdBy: null,
    //   createdAt: '',
    //   updatedBy: null,
    //   updatedAt: '',
    // },
  ];

  constructor(
    public flagService: FlagService,
    private apiServer: ApiService,
    public dicService: DicService
  ) {}

  ngOnInit(): void {
    this.aSub = this.flagService.updateActions$.subscribe((res) => {
      this.getActions();
    });

    this.getActions();

    this.dSub = this.dicService.getActionType().subscribe((dic: Status[]) => {
      this.dicService.actionTypeDic = dic;
    });
  }

  getActions(keyword: string = 'all') {
    const data = {
      claimsId: this.apiServer.claimsId,
      loanId: this.loanId,
      projectType: this.projectType,
      keyword,
    };
    this.cSub = this.apiServer.getActions(data).subscribe((actions: any) => {
      this.actions = actions;
    });
  }

  toogleActive(event: any, keyword: string) {
    if (!event.target.classList.contains('active')) {
      this.actionsRef.forEach((el) => {
        el.nativeElement.children[0].classList.remove('active');
      });
      event.target.classList.add('active');

      this.getActions(keyword);
    }
  }

  createActivity() {
    this.flagService.tooggleActivity(this.loanId, this.projectType, true);
  }

  ngOnDestroy(): void {
    this.cSub?.unsubscribe();
    this.dSub?.unsubscribe();
    this.aSub?.unsubscribe();
  }
}
