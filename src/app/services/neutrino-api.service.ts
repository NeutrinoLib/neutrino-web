import { Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";


@Injectable()
export class NeutrinoApiService {

    constructor(private httpClient: Http) { 
    }

    public getNodes() : Observable<Response> {
        return this.httpClient.get('http://localhost:5000/api/nodes');
    }

}
