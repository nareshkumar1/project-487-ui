import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpClientHelper {
    http: Http;
    urlPerfix: String;

    constructor(http: Http){
        this.http =http;
        this.urlPerfix = 'http://localhost:8090';
    }

    get(url,header){
       return this.http.get(this.urlPerfix+url,{headers:header});
    }

    post(url,body,header){
        return this.http.post(this.urlPerfix+url,body,{headers: header});
    }
    
}