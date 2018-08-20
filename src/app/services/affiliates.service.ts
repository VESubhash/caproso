import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from './api/api.service';

@Injectable()
export class AffiliatesService {
    constructor(private api: ApiService) { }

    get(dataTablesParameters) {
        return this.api.post(
            'Affiliates/GetAffiliateList',
            dataTablesParameters
        ).pipe(map((resp => resp)), catchError(this.handleError('GetAffiliateList', [])));
    }

    create(Detail){
        return this.api.post(
            'Affiliates/SaveAffiliate',
            Detail
        ).pipe(map((resp => resp)), catchError(this.handleError('SaveOrganization', [])));
    }

    getAffiliateDetailByUserId(userId, useActiveData: boolean){
        return this.api.get(
            'Affiliates/AffiliateDetail?userId='+userId+ '&useActiveData=' + useActiveData,
        ).pipe(map((resp => resp)), catchError(this.handleError('detail', [])));
    }

    getAllAffiliates(useActiveData: boolean){
        return this.api.get(
            'Affiliates/GetAllAffiliateList?useActiveData=' + useActiveData,
        ).pipe(map((resp => resp)), catchError(this.handleError('getAllAffiliates', [])));
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


