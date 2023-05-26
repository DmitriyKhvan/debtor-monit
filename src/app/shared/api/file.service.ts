import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  filesExcel$ = new Subject<any>();

  constructor(private http: HttpClient) {}

  getBlobRecord(url: string): Observable<any> {
    return this.http
      .get(`${environment.dbUrl}/kerioOperator/callAudio?url=${url}`, {
        headers: {
          'Content-Type': 'application/pdf+base64',
          // Accept: 'audio/x-wav',
        },
        responseType: 'text',
      })
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  getBlob(token: string): Observable<any> {
    return this.http
      .get(`${environment.dbUrl}/tools/scheduleFile?token=${token}`, {
        headers: {
          'Content-Type': 'application/pdf',
        },
        responseType: 'blob',
      })
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  upload(data: FormData): Observable<any> {
    return this.http
      .post(
        `${environment.dbUrl}/tools/insuranceDebit`,
        data
        // {
        //   reportProgress: true,
        //   observe: 'events',
        // }
      )
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  getInsuranceDebitFiles(): Observable<any> {
    return this.http.get(`${environment.dbUrl}/tools/insuranceDebit`).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }
}
