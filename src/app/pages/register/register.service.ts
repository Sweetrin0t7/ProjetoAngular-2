import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, EmptyError, Observable,  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'https://reqres.in/api/register';

  constructor(private http: HttpClient) { }

  registerUser(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post<any>(this.apiUrl, body);
  }
}
