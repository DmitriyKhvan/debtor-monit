import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FileService {
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
}
