import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  getCredits({
    currentPage,
    count,
    sortValue = '',
    sortType = '',
  }: any): Observable<any> {
    return this.http
      .get(
        `${environment.dbUrl}/debtor-monit?page=${currentPage}&count=${count}&keyword=${sortValue}&order=${sortType}`
      )
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  getUserInfo(id: number | null): Observable<any> {
    return this.http
      .get(`${environment.dbUrl}/debtor-monit/byId?id=${id}`)
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }
}
