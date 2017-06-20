import { Component, OnInit } from '@angular/core';
import { SidebarService } from "app/services/sidebar.service";

@Component({
    selector: 'app-nodes',
    templateUrl: './nodes.page.html',
    styleUrls: ['./nodes.page.css']
})
export class NodesPage implements OnInit {

    constructor(sidebarService: SidebarService) 
    { 
        sidebarService.active = "nodes";
    }

    ngOnInit() {
    }

}
