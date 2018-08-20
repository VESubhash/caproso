import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ApiService } from './api/api.service';
import {catchError, map} from 'rxjs/operators';


@Injectable()
export class TagsService {
    constructor(private api: ApiService) { }


    get(dataTablesParameters) {
        return this.api.post(
            'LTags/GetTagList',
            dataTablesParameters
        ).pipe(map((resp => resp)), catchError(this.handleError('GetTagList', [])));
    }

    updateActive(tagId:number, useActiveData: boolean){
        return this.api.get(
            'LTags/TagActive?tagId='+tagId+ '&useActiveData=' + useActiveData,
        ).pipe(map((resp => resp)), catchError(this.handleError('updateActive', [])));
    }
    create(tagDetail){
        return this.api.post(
            'LTags/SaveTag',
            tagDetail
        ).pipe(map((resp => resp)), catchError(this.handleError('SaveGroup', [])));
    }
   getTagsByType(tagTypeDescription: string, useActiveData: boolean){
        return this.api.get('LTags/GetTagsByType?tagTypeDescription=' + tagTypeDescription + '&useActiveData=' + useActiveData)
            .pipe(map((resp => resp)), catchError(this.handleError('GetTagsByType', [])));
    }

    getTagByTypeAndOrganizationId(tagTypeDescription: string, organizationId: number, useActiveData: boolean){
        return this.api.get('LTags/GetTagByTypeAndOrganizationId?tagTypeDescription=' + tagTypeDescription+ '&organizationId=' + organizationId + '&useActiveData=' + useActiveData)
            .pipe(map((resp => resp)), catchError(this.handleError('GetTagsByType', [])));
    }


    getTagsByTypeAndParentId(tagTypeDescription: string, parentTagId: number,  useActiveData: boolean){
        return this.api.get('LTags/GetTagsByTypeAndParentId?tagTypeDescription=' + tagTypeDescription + '&parentTagId=' + parentTagId+'&useActiveData=' + useActiveData)
            .pipe(map((resp => resp)), catchError(this.handleError('GetTagsByTypeAndParentId', [])));
    }

    getTagDetailByTagId(tagId: string, useActiveData: boolean){
        return this.api.get('LTags/GetTagDetail?tagId=' + tagId +'&useActiveData=' + useActiveData)
            .pipe(map((resp => resp)), catchError(this.handleError('GetTagsByTypeAndParentId', [])));
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(error);
            // this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }
}


