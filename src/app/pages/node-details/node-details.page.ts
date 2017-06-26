import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Rx';
import { NeutrinoApiService } from "app/services/neutrino-api.service";
import { SidebarService } from "app/services/sidebar.service";
import { Node } from '../../entities/node';

@Component({
    selector: 'app-node-details',
    templateUrl: './node-details.page.html',
    styleUrls: ['./node-details.page.css']
})
export class NodeDetailsPage implements OnInit {

    protected node: Node;

    constructor(
        private route: ActivatedRoute,
        private sidebarService: SidebarService,
        private neutrinoApiService: NeutrinoApiService) 
    {
        sidebarService.active = "nodes";
    }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => {
                return this.neutrinoApiService.getNode(params["id"]);
            })
            .subscribe(data => {
                this.node = data;
            },
                err => console.error(err)
            );
    }

}
