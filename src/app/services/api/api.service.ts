import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { environment } from '../../enviroments/environment';

@Injectable()
export class ApiService {
    apiUrl;
    spinner;
    constructor(private http: HttpClient) {
        this.apiUrl = environment.origin;
        this.http = http;
    }

    get(url, queryStringParams?: any, spinnerText?: any, hideSpinner?: any) {
        return this.http.get(this.getUri(url));
    }

    post(url, data, spinnerText?, hideSpinner?) {
        return this.http.post(this.getUri(url), data);
    }

    put(url, data?, spinnerText?, hideSpinner?) {
        return this.http.put(this.getUri(url), data);
    }

    patch(url, data, spinnerText?, hideSpinner?) {
        return this.http.patch(this.getUri(url), data);
    }

    delete(url, data?, spinnerText?, hideSpinner?) {
        return this.http.delete(this.getUri(url));
    }

    getUri(url) {
        return `${this.apiUrl}${url}`;
    }

    mapParams(obj?): HttpParams {
        let params: HttpParams = new HttpParams();
        if (obj) {
            Object.keys(obj).forEach((key) => {
                params = params.append(key, obj[key]);
            });
        }
        return params;
    }
}
