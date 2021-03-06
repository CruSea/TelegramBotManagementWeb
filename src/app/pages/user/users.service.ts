import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:0000/bot/users';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(apiUrl)
      .pipe(
        tap(users => console.log('Fetch user')),
        catchError(this.handleError('getUsers', []))
      );
  }

  getUser(id: number): Observable<User> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => console.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  addUser(user): Observable<User> {
    return this.http.post<User>(apiUrl, user, httpOptions).pipe(
      tap((usr: User) => console.log(`added user w/ id=${user.id}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  updateUser (id, user): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, user, httpOptions).pipe(
      tap(_ => console.log(`updated user id=${id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  deleteUser (id): Observable<User> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<User>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted user id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      return of(result as T);
    };
  }

  private exractData(res: Response) {
    const body = res;
    return body || {};
  }
}

export interface UserParams {
  start?: number;
  max?: number;
}
