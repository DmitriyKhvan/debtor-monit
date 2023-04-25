import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class AuthIntercepter implements HttpInterceptor {
  constructor(protected keycloakAngular: KeycloakService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('[Intercepter Error]: ', error);
        if (error.status === 401) {
          // this.auth.logout('authFailed');
          this.keycloakAngular.logout();
        }

        return throwError(error);
      })
    );
  }
}
