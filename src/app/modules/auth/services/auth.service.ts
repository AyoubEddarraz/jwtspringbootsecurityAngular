import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from 'src/app/common/interfaces/login-request';
import { LoginResponse } from 'src/app/common/interfaces/login-response';
import { RegisterRequest } from 'src/app/common/interfaces/register-request';
import { RegisterResponse } from 'src/app/common/interfaces/register-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginInfo: LoginRequest) {
    return this.http.post<LoginResponse>(`${environment.baseUrl}/api/public/auth/login` , loginInfo);
  }

  register(registerInfo: RegisterRequest) {
    return this.http.post<RegisterResponse>(`${environment.baseUrl}/api/public/auth/register` , registerInfo);
  }


}
