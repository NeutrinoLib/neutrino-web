import { Component, OnInit, Input } from '@angular/core';
import { NeutrinoApiService } from "app/services/neutrino-api.service";
import { Node } from '../../entities/node';
import { NodeState } from '../../entities/nodeState';

@Component({
    selector: 'app-node-state',
    templateUrl: './node-state.component.html',
    styleUrls: ['./node-state.component.css']
})
export class NodeStateComponent implements OnInit {

    @Input()
    public node: Node;

    protected nodeState: NodeState;

    constructor(private neutrinoApiService: NeutrinoApiService) { }

    ngOnInit() {
        this.neutrinoApiService.getCurrentNodeState(this.node.address).subscribe(
            result => {
                var json = result.json();
                this.nodeState = json;
            },
            error => {
                this.nodeState = new NodeState();
                this.nodeState.state = "Stopped";
            }
        );
    }
}
