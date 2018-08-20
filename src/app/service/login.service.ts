import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { CookieService } from 'angular2-cookie/core';
// import {Observable, of} from 'rxjs/index';
import { ApiService } from '../services/api/api.service';
import {catchError, map} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from '../enviroments/environment';

@Injectable()
export class LogInService {
    constructor(private http: HttpClient, public _cookieService: CookieService, private api: ApiService) {
    }

    private baseUrl = environment.origin;
    public user: any = {};
    login(User): Observable<any> {
        return this.http.post(this.baseUrl + 'Login/Validate', User);
    }

    logout(): Observable<any> {

        return this.http.post(this.baseUrl + 'Login/Logout', this.user);
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(error);
            // this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }
}
