import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from './api/api.service';

@Injectable()
export class DocumentService {
    constructor(private api: ApiService) { }

    get(dataTablesParameters) {

        return this.api.post(
            'Documents/GetDocumentList',
            dataTablesParameters
        ).pipe(map((resp => resp)), catchError(this.handleError('GetDocumentList', [])));
    }

    create(documentDetail){
        return this.api.post(
            'Documents/SaveDocument',
            documentDetail
        ).pipe(map((resp => resp)), catchError(this.handleError('SaveDocument', [])));
    }

    getDocumentDetail(documentId, useActiveData: boolean){
        return this.api.get(
            'Documents/DocumentDetail?documentId='+documentId+ '&useActiveData=' + useActiveData,
        ).pipe(map((resp => resp)), catchError(this.handleError('getDocumentDetail', [])));
    }

    updateActive(documentId:number, useActiveData: boolean){
        return this.api.get(
            'Documents/DocumentActive?documentId='+documentId+ '&useActiveData=' + useActiveData,
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


