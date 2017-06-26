import { Component, OnInit,Input } from '@angular/core';
import { Node } from '../../entities/node';
import { Service } from '../../entities/service';
import { NeutrinoApiService } from "app/services/neutrino-api.service";

@Component({
    selector: 'app-service-small-table',
    templateUrl: './service-small-table.component.html',
    styleUrls: ['./service-small-table.component.css']
})
export class ServiceSmallTableComponent implements OnInit {

    @Input()
    public node: Node;

    public services: Service[];

    constructor(private neutrinoApiService: NeutrinoApiService) { }

    ngOnInit() {
        this.neutrinoApiService.getServices(this.node.address).subscribe(
            result => {
                var json = result.json();
                this.services = json;
            },
            error => {
                this.services = null;
            }
        );
    }

}
