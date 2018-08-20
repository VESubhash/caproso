import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from './api/api.service';


@Injectable()
export class GroupsService {

    constructor(private api: ApiService) { }

    get(dataTablesParameters) {

        return this.api.post(
            'Groups/GetGroupList',
            dataTablesParameters
        ).pipe(map((resp => resp)), catchError(this.handleError('GetGroupList', [])));
    }
    create(groupDetail){
        return this.api.post(
            'Groups/SaveGroup',
            groupDetail
        ).pipe(map((resp => resp)), catchError(this.handleError('SaveGroup', [])));
    }

    getGroupDetailByGroupId(groupId, useActiveData: boolean){
        return this.api.get(
            'Groups/GroupDetailByGroupId?addressId='+groupId+ '&useActiveData=' + useActiveData,
        ).pipe(map((resp => resp)), catchError(this.handleError('getGroupById', [])));
    }

    getUserGroupByContactId(contactId, useActiveData: boolean){
        return this.api.get(
            'Groups/GetUserGroupsByContactId?contactId='+contactId+ '&useActiveData=' + useActiveData,
        ).pipe(map((resp => resp)), catchError(this.handleError('getUserGroupByContactId', [])));
    }

    SaveUserGroup(groupForms){
        return this.api.post(
            'Groups/SaveUserGroup',
            groupForms
        ).pipe(map((resp => resp)), catchError(this.handleError('SaveUserGroup', [])));
    }
    SaveUserGroupSingle(groupForms){
        return this.api.post(
            'Groups/SaveUserGroupSingle',
            groupForms
        ).pipe(map((resp => resp)), catchError(this.handleError('SaveUserGroupSingle', [])));
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
         console.log(error);
           // this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }
}


