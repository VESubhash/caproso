import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { CookieService } from 'angular2-cookie/core'
import {Router} from '@angular/router';


@Injectable()
export class MyInterceptor implements HttpInterceptor {
  constructor( public _cookieService: CookieService, private router: Router) { }
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const currentUser = JSON.parse(localStorage.getItem('isLoggedin'));
    var authReq;
    var jwt = this._cookieService.get('LM.JWT');
    if(!jwt)
    {
        this.router.navigate(['./login']);
    }
    if (currentUser) {
      authReq = req.clone({
        headers: req.headers.set('Authorization', 'Basic ' + this._cookieService.get('LM.JWT'))
      });
  } else {
    authReq = req.clone({
      headers: null
    });
  }
    return next.handle(authReq);
  }
}
