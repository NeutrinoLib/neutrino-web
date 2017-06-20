import { Component, OnInit } from '@angular/core';
import { SidebarService } from "app/services/sidebar.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {

    constructor(sidebarService: SidebarService) 
    { 
        sidebarService.active = "home";
    }

    ngOnInit() {
    }

}
