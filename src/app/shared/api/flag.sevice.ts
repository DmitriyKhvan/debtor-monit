import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FlagService {
  userInfo$ = new Subject<any>();
  isActivityForm$ = new Subject<any>();
  isConfimrCommentForm$ = new Subject<any>();
  isAddClientInfoForm$ = new Subject<{ flag: boolean; addClientInfo?: any }>();
  removeAddClientInfo$ = new Subject<{ flag: boolean; id?: number }>();
  updateActions$ = new Subject<boolean>();
  cofirmComment$ = new Subject<boolean>();
  isNotifications$ = new Subject<boolean>();

  setUserInfo({ userInfo, isLoader }: any) {
    this.userInfo$.next({ userInfo, isLoader });
  }

  setConfirmComment(isComment: boolean) {
    this.cofirmComment$.next(isComment);
  }

  tooggleActivity(loanId: string | null | undefined, isOpen: boolean) {
    this.isActivityForm$.next({ loanId, isOpen });
  }

  toggleConfirmComment(
    // claimsId: number | null | undefined,
    isOpen: boolean,
    title: string
  ) {
    this.isConfimrCommentForm$.next({ isOpen, title });
  }
}
