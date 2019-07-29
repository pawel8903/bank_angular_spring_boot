import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';

const endpoint = 'http://localhost:8080/recipient/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RecipientService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getResipients(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData)
    )

  }

  getRecipient(id): Observable<any> {
    return this.http.get(endpoint + id).pipe(
      map(this.extractData)
    )
  }

  saveRecipient(recipient): Observable<any> {
    return this.http.post<any>(endpoint, JSON.stringify(recipient), httpOptions).pipe(
      retry(1),
      catchError(this.handlerError)
    )
  }


  private handlerError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error}`;
      window.alert(errorMessage);
    }
    return throwError(errorMessage);
  }
}
