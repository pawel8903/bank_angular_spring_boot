import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const endpoint = environment.endpoint+'account/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccounts(userId): Observable<any> {
    return this.http.get(endpoint +'list/'+ userId).pipe(
      map(this.extractData)
    )
  }

  getAccount(id): Observable<any> {
    return this.http.get(endpoint + id).pipe(
      map(this.extractData)
    )
  }

  addAccount(account): Observable<any> {
    return this.http.post(endpoint, JSON.stringify(account), httpOptions).pipe(
      map(this.extractData),
      catchError(this.handlerError('addAccount'))
    )
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handlerError<T>(operation = 'operations', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log('${operation} failed: ${error.operation}');
      return of(result as T);
    }
  }
}
