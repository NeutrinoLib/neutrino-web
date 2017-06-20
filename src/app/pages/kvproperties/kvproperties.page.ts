import { Component, OnInit } from '@angular/core';
import { SidebarService } from "app/services/sidebar.service";

@Component({
    selector: 'app-kvproperties',
    templateUrl: './kvproperties.page.html',
    styleUrls: ['./kvproperties.page.css']
})
export class KvpropertiesPage implements OnInit {

    constructor(sidebarService: SidebarService) 
    { 
        sidebarService.active = "kvproperties";
    }

    ngOnInit() {
    }

}
