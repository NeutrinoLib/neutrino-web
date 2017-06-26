import { Component, OnInit, Input } from '@angular/core';
import { Node } from '../../entities/node';

@Component({
    selector: 'app-kvproperties-small-table',
    templateUrl: './kvproperties-small-table.component.html',
    styleUrls: ['./kvproperties-small-table.component.css']
})
export class KvpropertiesSmallTableComponent implements OnInit {

    @Input()
    public node: Node;

    constructor() { }

    ngOnInit() {
        // this.neutrinoApiService.getCurrentNodeState(this.node.address).subscribe(
        //     result => {
        //         var json = result.json();
        //         this.nodeState = json;
        //     },
        //     error => {
        //         this.nodeState = new NodeState();
        //         this.nodeState.state = "Stopped";
        //     }
        // );
    }

}
