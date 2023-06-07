import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FlagService {
  userInfo$ = new Subject<any>();
  isActivityForm$ = new Subject<any>();
  isConfimrCommentForm$ = new Subject<any>();
  isAddClientInfoForm$ = new Subject<{
    flag: boolean;
    addClientInfo?: any;
    type?: string;
  }>();
  removeAddClientInfo$ = new Subject<{ flag: boolean; id?: number }>();
  updateActions$ = new Subject<boolean>();
  cofirmComment$ = new Subject<boolean>();
  isNotifications$ = new Subject<boolean>();
  showAvatar$ = new Subject<any>();

  //история звонков
  historyCalls$ = new Subject<{ flag: boolean; phone?: string }>();

  statisticsForm$ = new Subject<boolean>();

  setUserInfo({ userInfo, isLoader }: any) {
    this.userInfo$.next({ userInfo, isLoader });
  }

  setConfirmComment(isComment: boolean) {
    this.cofirmComment$.next(isComment);
  }

  tooggleActivity(
    loanId: string | null | undefined,
    projectType: number | null | undefined,
    isOpen: boolean
  ) {
    this.isActivityForm$.next({ loanId, projectType, isOpen });
  }

  toggleConfirmComment(
    // claimsId: number | null | undefined,
    isOpen: boolean,
    title: string
  ) {
    this.isConfimrCommentForm$.next({ isOpen, title });
  }
}
