import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FlagService {
  userInfo$ = new Subject<number | null>();
  isActivityForm$ = new Subject<any>();
  updateActions$ = new Subject<boolean>();

  getUserInfo(id: number | null) {
    this.userInfo$.next(id);
  }

  tooggleActivity(loanId: string | null | undefined, isOpen: boolean) {
    this.isActivityForm$.next({ loanId, isOpen });
  }
}
