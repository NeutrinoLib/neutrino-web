import { Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Node } from '../entities/node';

@Injectable()
export class NeutrinoApiService {

    constructor(private httpClient: Http) { 
    }

    public getServices(nodeAddress: String) : Observable<Response> {
        return this.httpClient.get(nodeAddress + '/api/services');
    }

    public getKvProperties(nodeAddress: String) : Observable<Response> {
        return this.httpClient.get(nodeAddress + '/api/key-values');
    }

    public getNodes() : Observable<Response> {
        return this.httpClient.get('http://localhost:5000/api/nodes');
    }

    public getCurrentNodeState(nodeAddress: String) : Observable<Response> {
        return this.httpClient.get(nodeAddress + '/api/nodes/current/state');
    }

    public getNode(id: string) : Observable<Node> {

        return new Observable(observer => {

            this.httpClient.get('http://localhost:5000/api/nodes').subscribe(
                result => {
                    var nodes:Node[] = result.json();
                    var currentNode = null;
                    for(let node of nodes) {
                        if(node.id === id) {
                            currentNode = node;
                            break;
                        }
                    }

                    if(!currentNode) {
                        observer.next(null);
                        observer.complete();
                    }

                    this.httpClient.get(currentNode.address + "/api/nodes/current").subscribe(
                        nodeResult => {
                            var nodeData:Node = nodeResult.json();
                            observer.next(nodeData);
                            observer.complete();
                        },
                        error => {
                            observer.next(null);
                            observer.complete();
                        }
                    );

                },
                error => {
                    observer.next(null);
                    observer.complete();
                }
            );

        });
    } 
}
