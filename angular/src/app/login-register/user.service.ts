import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';


const endpoint = environment.endpoint + 'user/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  valid = false;

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  loginUser(user): Observable<any> {
    return this.http.post<any>(endpoint+'login', JSON.stringify(user), httpOptions).pipe(
      map(this.extractData)
    )
  }

  getUserByLogin(login): Observable<any> {
    
    return this.http.get<any>(endpoint +login).pipe(
      map(this.extractData)
    );
  }

  updateUser(user): Observable<any> {
    return this.http.put<any>(endpoint, JSON.stringify(user), httpOptions).pipe(
      tap(_ => console.log('update user id=${user.id}')),
      catchError(this.handlerError)
    )
  }

  registerUser(user): Observable<any> {
    return this.http.post<any>(endpoint, JSON.stringify(user), httpOptions).pipe(
      retry(1),
      catchError(this.handlerError)
    );

  }

  private handlerError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error}`;
      window.alert(errorMessage);
    } 
    return throwError(errorMessage);
  }

  changeValidation() {
    this.valid = true;
  }
  isValid() {
    return this.valid;
  }
}
