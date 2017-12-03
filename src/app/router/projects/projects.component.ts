import {Component} from "@angular/core";
import {BackendDataSource} from "../../../core/modules/BackendDataSource/backendDataSource";
import {Project} from "../../../core/contracts/Models/Project/Project";

@Component({
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.styl']
})
export class ProjectsComponent {
    public projects: Project[] = [];
    constructor(backend: BackendDataSource<Project>) {
        backend.readMany({model: Project})
            .map(next => next.data)
            .subscribe(next => {
                    this.projects = next;
                },
                error => console.log(error)
            );
    }
}