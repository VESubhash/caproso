import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from './api/api.service';


@Injectable()
export class AddressesService {

    constructor(private api: ApiService) { }

    get(dataTablesParameters) {
        return this.api.post(
            'Addresses/GetAddressList',
            dataTablesParameters
        ).pipe(map((resp => resp)), catchError(this.handleError('GetAddressList', [])));
    }
    create(addressDetail){
        return this.api.post(
            'Addresses/SaveAddress',
            addressDetail
        ).pipe(map((resp => resp)), catchError(this.handleError('addupdateaddress', [])));
    }

    getAddressByAddressId(contactId, useActiveData: boolean){
        return this.api.get(
            'Addresses/AddressDetail?addressId='+contactId+ '&useActiveData=' + useActiveData,
        ).pipe(map((resp => resp)), catchError(this.handleError('detail', [])));
    }


    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
         console.log(error);
           // this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }
}


