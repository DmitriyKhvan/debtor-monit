import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActionCreate, ActionsCredit } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class ApiService {
  search$ = new Subject<string>();
  updateList$ = new Subject<boolean>();
  claimsId: number | null = null;
  profile: any;

  constructor(private http: HttpClient) {}

  getCredits({
    currentPage,
    count,
    sortValue = '',
    sortType = '',
    search = '',
  }: any): Observable<any> {
    return this.http
      .get(
        `${environment.dbUrl}/debtor-monit?page=${currentPage}&count=${count}&keyword=${sortValue}&order=${sortType}&search=${search}`
      )
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  getUserInfo(id: number | null): Observable<any> {
    return this.http
      .get(`${environment.dbUrl}/debtor-monit/byId?claimsId=${id}`)
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  clientAction(data: ActionCreate) {
    return this.http
      .post(`${environment.dbUrl}/client-action/create`, data)
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  getActions({ claimsId, loanId, keyword }: ActionsCredit) {
    return this.http
      .get(
        `${environment.dbUrl}/client-action/getActions?claimsId=${claimsId}&loanId=${loanId}&keyword=${keyword}`
      )
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  removeAction(id: number) {
    return this.http
      .delete(`${environment.dbUrl}/client-action/remove?id=${id}`)
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }
}
