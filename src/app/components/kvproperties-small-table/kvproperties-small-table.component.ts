import { Component, OnInit, Input } from '@angular/core';
import { Node } from '../../entities/node';
import { KvProperty } from "app/entities/kvProperty";
import { NeutrinoApiService } from "app/services/neutrino-api.service";

@Component({
    selector: 'app-kvproperties-small-table',
    templateUrl: './kvproperties-small-table.component.html',
    styleUrls: ['./kvproperties-small-table.component.css']
})
export class KvpropertiesSmallTableComponent implements OnInit {

    @Input()
    public node: Node;

    public kvProperties: KvProperty[];

    constructor(private neutrinoApiService: NeutrinoApiService) { }

    ngOnInit() {
        this.neutrinoApiService.getKvProperties(this.node.address).subscribe(
            result => {
                var json = result.json();
                this.kvProperties = json;
            },
            error => {
                this.kvProperties = null;
            }
        );
    }

}
