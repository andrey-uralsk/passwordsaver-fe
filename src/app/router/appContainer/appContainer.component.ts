import {Component} from "@angular/core";
import {BackendDataSource} from "../../../core/modules/BackendDataSource/backendDataSource";
import {Project} from "../../../core/contracts/Models/Project/Project";
import {Observable} from "rxjs/Observable";

@Component({
    templateUrl: './appContainer.component.html'
})
export class AppContainerComponent {
    public projects: Project[] = [];
    constructor(backend: BackendDataSource<Project>) {
        backend.readMany({model: Project})
            .subscribe(next => {
                    this.projects = next.data;
                },
                error => console.log(error)
            );
    }
}