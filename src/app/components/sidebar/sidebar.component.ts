import { Component, OnInit } from '@angular/core';
import { SidebarService } from "app/services/sidebar.service";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    constructor(protected sidebarService: SidebarService) { 
    }

    ngOnInit() {
    }

    protected getClass(node: string) : string {
        return node === this.sidebarService.active ? "active" : "";
    }

}
