import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from './api/api.service';

@Injectable()
export class EstimateService {
    constructor(private api: ApiService) { }

    get(dataTablesParameters) {

        return this.api.post(
            'Estimates/GetEstimateList',
            dataTablesParameters
        ).pipe(map((resp => resp)), catchError(this.handleError('GetEstimateList', [])));
    }

    create(estimateDetail){
        return this.api.post(
            'Estimates/SaveEstimate',
            estimateDetail
        ).pipe(map((resp => resp)), catchError(this.handleError('SaveEstimate', [])));
    }

    SaveEstimateCbd(estimateId){
        return this.api.post(
            'Estimates/SaveEstimateCbd',
            estimateId
        ).pipe(map((resp => resp)), catchError(this.handleError('SaveEstimateCbd', [])));
    }
    UpdateEstimateCbd(costBreakDownModal){
        return this.api.post(
            'Estimates/UpdateEstimateCbd',
            costBreakDownModal
        ).pipe(map((resp => resp)), catchError(this.handleError('UpdateEstimateCbd', [])));
    }

    getEstimateCbdList(estimateId) {
        return this.api.post(
            'Estimates/GetEstimateCbdList',
            estimateId
        ).pipe(map((resp => resp)), catchError(this.handleError('getEstimateCbdList', [])));
    }
    getEstimateDetail(estimateId, useActiveData: boolean){
        return this.api.get(
            'Estimates/EstimateDetail?estimateId='+estimateId+ '&useActiveData=' + useActiveData,
        ).pipe(map((resp => resp)), catchError(this.handleError('getEstimateDetail', [])));
    }

    updateActive(estimateId:number, useActiveData: boolean){
        return this.api.get(
            'Estimates/EstimateActive?estimateId='+estimateId+ '&useActiveData=' + useActiveData,
        ).pipe(map((resp => resp)), catchError(this.handleError('updateActive', [])));
    }

    updateEstimateItemActive(estimateItemId:number, useActiveData: boolean){
        return this.api.get(
            'Estimates/EstimateItemActive?estimateItemId='+estimateItemId+ '&useActiveData=' + useActiveData,
        ).pipe(map((resp => resp)), catchError(this.handleError('updateActive', [])));
    }

    updateEstimateMarkupActive(estimateMarkupId:number, useActiveData: boolean){
        return this.api.get(
            'Estimates/EstimateMarkupActive?estimateMarkupId='+estimateMarkupId+ '&useActiveData=' + useActiveData,
        ).pipe(map((resp => resp)), catchError(this.handleError('updateActive', [])));
    }

    createEstimateItem(estimateItemDetail){
        return this.api.post(
            'Estimates/SaveEstimateItem',
            estimateItemDetail
        ).pipe(map((resp => resp)), catchError(this.handleError('SaveEstimateItem', [])));
    }

    getEstimateItemList(dataTablesParameters) {

        return this.api.post(
            'Estimates/GetEstimateItemList',
            dataTablesParameters
        ).pipe(map((resp => resp)), catchError(this.handleError('GetEstimateItemList', [])));
    }

    getEstimateItemDetail(estimateItemId, useActiveData: boolean){
        return this.api.get(
            'Estimates/EstimateItemDetail?estimateItemId='+estimateItemId+ '&useActiveData=' + useActiveData,
        ).pipe(map((resp => resp)), catchError(this.handleError('getEstimateItemDetail', [])));
    }

    getEstimateMarkup(estimateId){
        return this.api.get(
            'Estimates/EstimateMarkup?estimateId='+estimateId,
        ).pipe(map((resp => resp)), catchError(this.handleError('getEstimateMarkup', [])));
    }

    getEstimateMarkupByEstimateIdAndMarkUpName(estimateId, markupName){
        return this.api.get(
            'Estimates/EstimateMarkupByEstimateIdAndMarkUpName?estimateId='+estimateId+'&markupName='+ markupName,
        ).pipe(map((resp => resp)), catchError(this.handleError('getEstimateMarkup', [])));
    }

    getEstimateMarkupsByEstimateIdAndParentMarkupId(estimateId, parentMarkupId){
        return this.api.get(
            'Estimates/EstimateMarkupsByEstimateIdAndParentMarkupId?estimateId='+estimateId+'&parentMarkupId='+ parentMarkupId,
        ).pipe(map((resp => resp)), catchError(this.handleError('getEstimateMarkup', [])));
    }

    saveEstimateMarkup(estimateMarkupsModel){
        return this.api.post(
            'Estimates/SaveEstimateMarkup',
            estimateMarkupsModel
        ).pipe(map((resp => resp)), catchError(this.handleError('SaveEstimateMarkup', [])));
    }

    saveEstimateMarkups(estimateMarkupsModel){
        return this.api.post(
            'Estimates/SaveEstimateMarkups',
            estimateMarkupsModel
        ).pipe(map((resp => resp)), catchError(this.handleError('SaveEstimateMarkups', [])));
    }

    getMarkupDetailById(markupId){
        return this.api.get(
            'Estimates/EstimateMarkupDetail?markupId='+markupId,
        ).pipe(map((resp => resp)), catchError(this.handleError('getMarkupDetailById', [])));
    }

    copyEstimate(estimateId){
        return this.api.get(
            'Estimates/CopyEstimate?estimateId='+estimateId,
        ).pipe(map((resp => resp)), catchError(this.handleError('copyEstimate', [])));
    }

    copyEstimatedItem(estimateItemId){
        return this.api.get(
            'Estimates/CopyEstimatedItem?estimateItemId='+estimateItemId,
        ).pipe(map((resp => resp)), catchError(this.handleError('copyEstimatedItem', [])));
    }



    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
         console.log(error);
           // this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }
}


