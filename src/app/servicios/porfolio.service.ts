import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  constructor(private Http: HttpClient, private cookies: CookieService) { }

obtenerdatos(): Observable<any>{
  return this.Http.get('.src/assets/data/data.json');
}
login(user: any): Observable<any> {
  return this.Http.post("https://reqres.in/api/login", user);
}
register(user: any): Observable<any> {
  return this.Http.post("https://reqres.in/api/register", user);
}
setToken(token: string) {
  this.cookies.set("token", token);
}
getToken(){
  return this.cookies.get("token");
}
getUser(){
  return this.Http.get("https://reqres.in/api/users/2")
}
getUserLogged(){
  const token = this.getToken();
}
}