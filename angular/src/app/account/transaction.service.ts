import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8080/transaction/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getTransactions(accountId): Observable<any> {
    return this.http.get(endpoint + 'transactions/' + accountId).pipe(
      map(this.extractData)
    )
  }

  getTransaction(id): Observable<any> {
    return this.http.get(endpoint + id).pipe(
      map(this.extractData)
    )
  }

  addTransaction(transaction) {
    return this.http.post(endpoint, JSON.stringify(transaction), httpOptions).pipe(
      map(this.extractData),
      catchError(this.handlerError<any>('addTransaction'))
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
