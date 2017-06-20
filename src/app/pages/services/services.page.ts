import { Component, OnInit } from '@angular/core';
import { SidebarService } from "app/services/sidebar.service";

@Component({
    selector: 'app-services',
    templateUrl: './services.page.html',
    styleUrls: ['./services.page.css']
})
export class ServicesPage implements OnInit {

    constructor(sidebarService: SidebarService) 
    { 
        sidebarService.active = "services";
    }

    ngOnInit() {
    }

}
