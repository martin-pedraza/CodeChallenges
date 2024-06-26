import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private http: HttpClient) { }

  fetchData(endpoint: string) :Observable<any>{
    return this.http.get<any[]>(endpoint);
  }
}
