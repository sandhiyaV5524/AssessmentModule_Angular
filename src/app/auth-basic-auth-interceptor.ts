import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './shared/user.service';

@Injectable()
export class AuthBasicAuthInterceptor {
  private service : UserService;
  emailid : string;
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      this.emailid = localStorage.getItem('useremail');
      console.log("interceptor"+this.emailid);
   const modifiedReq = req.clone({
    headers: new HttpHeaders({
      'authemail': this.emailid
    })
  });
  return next.handle(modifiedReq);
}
  }
