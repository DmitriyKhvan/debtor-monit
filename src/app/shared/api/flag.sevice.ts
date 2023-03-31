import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FlagService {
  userInfo$ = new Subject<number | null>();
  isSidebar$ = new Subject<boolean>();

  getUserInfo(id: number | null) {
    this.userInfo$.next(id);
  }

  tooggleSidebar(isOpen: boolean) {
    this.isSidebar$.next(isOpen);
  }
}
