import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from "rxjs";
import { ApiService } from './api/api.service';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs/index';
import { CookieService } from 'angular2-cookie/core';


@Injectable()
export class UploadService {

    constructor(private http: HttpClient, private api: ApiService,  public _cookieService: CookieService) { }

   uploadFile(action, file: File, documentDetail ): Observable<HttpEvent<any>> {
       let formData = new FormData();
       formData.append('upload', file);
       formData.append('estimateId', documentDetail.estimateId);
       formData.append('documentId', documentDetail.documentId);
       formData.append('fileName', documentDetail.fileName);
       formData.append('docCaption', documentDetail.docCaption);

        let params = new HttpParams();

        const options = {
            params: params,
            reportProgress: true,

        };

        let url = this.api.getUri(action);

        const req = new HttpRequest('POST', url, formData, options);
       req.headers.set('Authorization', 'Basic ' + this._cookieService.get('LM.JWT'))
        return this.http.request(req);

   }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(error);
            // this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }
}
