import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from './api/api.service';

@Injectable()
export class ItemsService {
    constructor(private api: ApiService) { }

    get(dataTablesParameters) {

        return this.api.post(
            'Items/GetItemList',
            dataTablesParameters
        ).pipe(map((resp => resp)), catchError(this.handleError('GetItemList', [])));
    }

    searchItem(dataTablesParameters) {

        return this.api.post(
            'Items/SearchItems',
            dataTablesParameters
        ).pipe(map((resp => resp)), catchError(this.handleError('SearchItems', [])));
    }

    create(clientDetail){
        return this.api.post(
            'Items/SaveItem',
            clientDetail
        ).pipe(map((resp => resp)), catchError(this.handleError('SaveItem', [])));
    }

    getItemDetail(itemId, useActiveData: boolean){
        return this.api.get(
            'Items/ItemDetail?itemId='+itemId+ '&useActiveData=' + useActiveData,
        ).pipe(map((resp => resp)), catchError(this.handleError('ItemDetail', [])));
    }

    updateActive(itemId:number, useActiveData: boolean){
        return this.api.get(
            'Items/ItemActive?itemId='+itemId+ '&useActiveData=' + useActiveData,
        ).pipe(map((resp => resp)), catchError(this.handleError('updateActive', [])));
    }


    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
         console.log(error);
           // this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }
}


