import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Activity } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class ApiService {
  search: string = '';

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

  clientAction(data: Activity) {
    return this.http
      .post(`${environment.dbUrl}/client-action/create`, data)
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }
}
