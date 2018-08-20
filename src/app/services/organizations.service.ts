import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from './api/api.service';

@Injectable()
export class OrganizationsService {
    constructor(private api: ApiService) { }

    get(dataTablesParameters) {

        return this.api.post(
            'Organizations/GetOrganizationList',
            dataTablesParameters
        ).pipe(map((resp => resp)), catchError(this.handleError('GetOrgnizationsList', [])));
    }

    create(OrganizationDetail){
        return this.api.post(
            'Organizations/SaveOrganization',
            OrganizationDetail
        ).pipe(map((resp => resp)), catchError(this.handleError('SaveOrganization', [])));
    }

    getOrganizationDetailByUserId(userId, useActiveData: boolean){
        return this.api.get(
            'Organizations/OrganizationDetail?userId='+userId+ '&useActiveData=' + useActiveData,
        ).pipe(map((resp => resp)), catchError(this.handleError('detail', [])));
    }

    isEmailRegisterd(userName){
        return this.api.get(
            'Organizations/UsersByUserName?userName='+userName,
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


