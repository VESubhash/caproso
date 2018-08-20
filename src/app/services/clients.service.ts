import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from './api/api.service';

@Injectable()
export class ClientsService {
    constructor(private api: ApiService) { }

    get(dataTablesParameters) {

        return this.api.post(
            'Clients/GetClientList',
            dataTablesParameters
        ).pipe(map((resp => resp)), catchError(this.handleError('GetOrgnizationsList', [])));
    }

    create(clientDetail){
        return this.api.post(
            'Clients/SaveClient',
            clientDetail
        ).pipe(map((resp => resp)), catchError(this.handleError('SaveClient', [])));
    }

    getClientDetailByUserId(userId, useActiveData: boolean){
        return this.api.get(
            'Clients/ClientDetail?userId='+userId+ '&useActiveData=' + useActiveData,
        ).pipe(map((resp => resp)), catchError(this.handleError('detail', [])));
    }

    getUsersByOrganizationId(organizationId){
        return this.api.get(
            'Clients/GetUsers?organizationId='+organizationId,
        ).pipe(map((resp => resp)), catchError(this.handleError('getUsersByOrganizationId', [])));
    }

    // setAssignGroupToUser(userGroup){
    //     return this.api.post(
    //         'Clients/GetUsers?organizationId='+organizationId,
    //     ).pipe(map((resp => resp)), catchError(this.handleError('getUsersByOrganizationId', [])));
    // }


    isEmailRegisterd(userName){
        return this.api.get(
            'Clients/UsersByUserName?userName='+userName,
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


