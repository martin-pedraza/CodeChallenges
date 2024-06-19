import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  server: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  private getToken(): string | null {
    return localStorage.getItem('token');
  }

  private createHeaders(): HttpHeaders {
    const token = this.getToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  getData(path: string) :Observable<any>{
    const endpoint = `${this.server}/${path}`;
    const headers = this.createHeaders();
    return this.http.get<any[]>(endpoint, { headers });
  }

  postData(path: string, data: any) :Observable<any>{
    const endpoint = `${this.server}/${path}`;
    const headers = this.createHeaders();
    return this.http.post<any[]>(endpoint, data, { headers });
  }

  putData(path: string, data: any) :Observable<any>{
    const endpoint = `${this.server}/${path}`;
    const headers = this.createHeaders();
    return this.http.put<any[]>(endpoint, data, { headers });
  }

  deleteData(path: string) :Observable<any>{
    const endpoint = `${this.server}/${path}`;
    const headers = this.createHeaders();
    return this.http.delete<any[]>(endpoint, { headers });
  }
}
