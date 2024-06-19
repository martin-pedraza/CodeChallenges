import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService, private jwtHelper: JwtHelperService) { }

  login(data: any) :Observable<any>{
    return this.httpService.postData('users/login', data).pipe(tap(response => {
      if (response && response.token) {
        localStorage.setItem('token', response.token);
      }
    }));
  }

  logout() :void{
    localStorage.clear();
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    return !!token && !this.jwtHelper.isTokenExpired(token);
  }
}
