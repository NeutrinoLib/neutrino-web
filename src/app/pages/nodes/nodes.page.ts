import { Component, OnInit } from '@angular/core';
import { SidebarService } from "app/services/sidebar.service";
import { NeutrinoApiService } from "app/services/neutrino-api.service";
import { Node } from '../../entities/node';

@Component({
    selector: 'app-nodes',
    templateUrl: './nodes.page.html',
    styleUrls: ['./nodes.page.css']
})
export class NodesPage implements OnInit {

    protected nodes: Node[];

    constructor(
        private sidebarService: SidebarService, 
        private neutrinoApiService: NeutrinoApiService) 
    { 
        sidebarService.active = "nodes";
    }

    ngOnInit() {
        this.neutrinoApiService.getNodes().subscribe(result => {
            var json = result.json();
            this.nodes = json;
        });
    }
}
