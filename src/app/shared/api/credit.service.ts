import { HttpClient } from '@angular/common/http';
import {
  catchError,
  Observable,
  OperatorFunction,
  Subject,
  throwError,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  ActionCreate,
  ActionsCredit,
  ICalculationProducts,
  StatisticsData,
} from '../interfaces';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
  search$ = new Subject<string>();
  currentPage$ = new Subject<number>();
  updateList$ = new Subject<boolean>();
  claimsId: number | string | null = null;
  profile: any;

  calculationProducts: ICalculationProducts = {
    code: null,
    limit: 0,
    table: [
      // {
      //   loanSum: 0,
      //   period: 0,
      //   productSum: 0,
      // },
    ],
  };

  loader: boolean = false;

  statisticsList: any = [];

  totaldebt: number = 0;

  constructor(private http: HttpClient) {}

  getCredits({
    currentPage,
    count,
    sortValue = '',
    sortType = '',
    search = '',
    currentMonth = false,
  }: any): Observable<any> {
    return this.http
      .get(
        `${environment.dbUrl}/debtor-monit?page=${currentPage}&count=${count}&keyword=${sortValue}&order=${sortType}&search=${search}&currentMonth=${currentMonth}`
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

  // clientAction(data: ActionCreate): Observable<any> {
  //   return this.http
  //     .post(`${environment.dbUrl}/client-action/create`, data)
  //     .pipe(
  //       catchError((error) => {
  //         return throwError(() => error);
  //       })
  //     );
  // }

  clientAction(data: any): Observable<any> {
    return this.http
      .post(`${environment.dbUrl}/client-action/createNew`, data)
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  getActions({
    claimsId,
    loanId,
    projectType,
    keyword,
  }: ActionsCredit): Observable<any> {
    return this.http
      .get(
        `${environment.dbUrl}/client-action/getActions?claimsId=${claimsId}&loanId=${loanId}&projectType=${projectType}&keyword=${keyword}`
      )
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  removeAction(id: number): Observable<any> {
    return this.http
      .delete(`${environment.dbUrl}/client-action/remove?id=${id}`)
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  getLoanSums(claimsId: number): Observable<any> {
    this.loader = true;
    this.calculationProducts.code = null;
    return this.http
      .get(`${environment.dbUrl}/tools/getLoanSums?claimsId=${claimsId}`)
      .pipe(
        tap((calculationProducts: ICalculationProducts | any) => {
          this.calculationProducts = calculationProducts;
          this.loader = false;
        }),
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  getMaxAmount({
    claimsId,
    contractId,
  }: {
    claimsId: number;
    contractId: string;
  }): Observable<any> {
    return this.http
      .get(
        `${environment.dbUrl}/updater/updateMaxAmount?claimsId=${claimsId}&contractId=${contractId}`
      )
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  getHistoryCall(): Observable<any> {
    return this.http
      .get(
        `${environment.dbUrl}/kerioOperator/callHistory?claimsId=${this.claimsId}`
      )
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  getHistoryCallByNumber(phone: string): Observable<any> {
    return this.http
      .get(
        `${environment.dbUrl}/kerioOperator/callHistoryByNumber?phone=${phone}`
      )
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  addClientInfo({ id, type, value, description }: any): Observable<any> {
    return this.http
      .post(`${environment.dbUrl}/client-info/addClientInfo/set`, {
        id,
        type,
        value,
        description,
        claimsId: this.claimsId,
      })
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  getAddClientInfo(): Observable<any> {
    return this.http
      .get(
        `${environment.dbUrl}/client-info/addClientInfo/get?claimsId=${this.claimsId}`
      )
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  removeAddClientInfo(id: number): Observable<any> {
    return this.http
      .delete(`${environment.dbUrl}/client-info/addClientInfo/delete?id=${id}`)
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  getStatisticsList(data: StatisticsData): Observable<any> {
    return this.http
      .post(`${environment.dbUrl}/tools/getSumDataByDate`, data)
      .pipe(
        tap((list) => {
          return (this.statisticsList = list || []);
        }),
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  addInvoice(data: any): Observable<any> {
    return this.http.post(`${environment.dbUrl}/tools/addInvoice`, data).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  declineInvoice(id: number | undefined): Observable<any> {
    return this.http
      .get(`${environment.dbUrl}/tools/declineInvoice?id=${id}`)
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  getConfirmationCredits({
    currentPage,
    count,
    sortValue = '',
    sortType = '',
    search = '',
    state = null,
  }: any): Observable<any> {
    return this.http
      .get(
        `${environment.dbUrl2}/support/confirm/list/${currentPage}/${count}/filtered?search=${search}&state=${state}&${sortType}=${sortValue}`
      )
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  getUserInfoConfirmCredit(id: number | null): Observable<any> {
    return this.http
      .get(`${environment.dbUrl2}/support/confirm/case/${id}`)
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  confirmCredit(option: string): Observable<any> {
    return this.http
      .patch(
        `${environment.dbUrl2}/support/confirm/case/${this.claimsId}/${option}`,
        {}
      )
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  confirmComment(data: any): Observable<any> {
    return this.http
      .post(
        `${environment.dbUrl2}/support/confirm/comment/${this.claimsId}`,
        data
      )
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  getConfirmComment(): Observable<any> {
    return this.http
      .get(`${environment.dbUrl2}/support/confirm/comment/${this.claimsId}`)
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  changePhone({ type, phone }: any): Observable<any> {
    const data = {
      type,
      phone,
      claimsId: this.claimsId,
    };

    return this.http.post(`${environment.dbUrl2}/tools/changePhone`, data).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  changeCard({ cardNumber, cardDate }: any): Observable<any> {
    const data = {
      cardNumber,
      cardDate,
      claimsId: this.claimsId,
    };

    return this.http.post(`${environment.dbUrl2}/tools/changeCard`, data).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  //Сопровождение

  getAccopanimentCredits({
    currentPage,
    count,
    sortValue = '',
    sortType = '',
    search = '',
  }: any): Observable<any> {
    return this.http
      .get(
        `${environment.dbUrl2}/maintenance/loader/claim/list?page=${currentPage}&count=${count}&keyword=${sortValue}&order=${sortType}&search=${search}`
      )
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  getUserInfoAccompanimentCredit(id: number | string | null): Observable<any> {
    return this.http
      .get(`${environment.dbUrl2}/maintenance/loader/claim?claimsId=${id}`)
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  getUserInfoAccompanimentCreditShort(id: number | null): Observable<any> {
    return this.http
      .get(
        `${environment.dbUrl2}/maintenance/loader/claim/short?claimsId=${id}`
      )
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  getAccopanimentUsers({
    currentPage,
    count,
    sortValue = '',
    sortType = '',
    search = '',
  }: any): Observable<any> {
    return this.http
      .get(
        `${environment.dbUrl2}/maintenance/loader/user/list?page=${currentPage}&count=${count}&keyword=${sortValue}&order=${sortType}&search=${search}`
      )
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  getAccopanimentTime({
    currentPage,
    count,
    sortValue = '',
    sortType = '',
    search = '',
    period = '',
    periodBegin = '',
    periodEnd = '',
  }: any): Observable<any> {
    return this.http
      .get(
        `${environment.dbUrl2}/maintenance/loader/user/listByClaims?page=${currentPage}&count=${count}&keyword=${sortValue}&order=${sortType}&search=${search}&period=${period}&periodBegin=${periodBegin}&periodEnd=${periodEnd}`
      )
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  getUserInfoAccompanimentUser(username: string): Observable<any> {
    return this.http
      .get(`${environment.dbUrl2}/maintenance/loader/user?username=${username}`)
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }
}
