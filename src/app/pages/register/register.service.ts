import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, EmptyError, Observable,  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'https://reqres.in/api/register';
  private apiUrlId = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  registerUser(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post<any>(this.apiUrl, body);
  }

  getUsersById(id: number): Observable<any> {
    const url = `${this.apiUrlId}/${id}`;
    return this.http.get<any>(url);
  }
}
