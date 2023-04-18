import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Status } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class DicService {
  actionTypeDic: Status[] = [];

  constructor(private http: HttpClient) {}

  getPayStatus(): Observable<any> {
    return this.http.get(`${environment.dbUrl}/spr/payStatus`).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  getDebtorStatus(): Observable<any> {
    return this.http.get(`${environment.dbUrl}/spr/debtorStatus`).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  getActionType(): Observable<any> {
    return this.http.get(`${environment.dbUrl}/spr/actionType`).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  getStatus(dic: Status[], code: number) {
    return dic.find((el) => el.code === code);
  }
}
