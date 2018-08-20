import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from './api/api.service';

@Injectable()
export class UserService {
    public userDetail: any = {};
    constructor(private api: ApiService) { }

    get(dataTablesParameters) {
        return this.api.post(
            'Users/GetMainUserList',
            dataTablesParameters
        ).pipe(map((resp => resp)), catchError(this.handleError('getUsers', [])));
    }

    create(UserDetail){
        return this.api.post(
            'Users/UserSignUp',
            UserDetail
        ).pipe(map((resp => resp)), catchError(this.handleError('UserSignUp', [])));
    }

    updateActive(userId:number, useActiveData: boolean){
        return this.api.get(
            'Users/UserActive?userId='+userId+ '&useActiveData=' + useActiveData,
        ).pipe(map((resp => resp)), catchError(this.handleError('updateActive', [])));
    }

    getUserDetailByUserId(userId, useActiveData: boolean){
        return this.api.get(
            'Users/UserDetail?userId='+userId+ '&useActiveData=' + useActiveData,
        ).pipe(map((resp => resp)), catchError(this.handleError('detail', [])));
    }

    isEmailRegisterd(userName){
        return this.api.get(
            'Users/UsersByUserName?userName='+userName,
        ).pipe(map((resp => resp)), catchError(this.handleError('isEmailRegisterd', [])));
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
         console.log(error);
           // this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }
}


