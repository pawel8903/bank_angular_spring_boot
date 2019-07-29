import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8080/town';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TownService {
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  public getTowns(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  }


  private handlerError<T>(operation = 'operations', result?: T) {

    return (error: any): Observable<T> => {
      console.error(error);
      console.log('${operation} failed: ${error.operation}');
      return of(result as T);
    }
  }
}
