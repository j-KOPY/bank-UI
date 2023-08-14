import { Injectable } from '@angular/core';
import { Observable, throwError, catchError, retry } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) { }

  getMembers(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getAccount(): Observable<any> {
    return this.http.get("https://api.atlar.com/v1/accounts/", {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa('${{user}}:${{pass}}')
      })
    })
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  getTransactions(): Observable<any> {
    return this.http.get("https://api.atlar.com/v1/transactions/", {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa('${{user}}:${{pass}}')
      })
    })
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }
}
