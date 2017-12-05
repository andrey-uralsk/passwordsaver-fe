import {Component} from "@angular/core";
import {BackendDataSource} from "../../../../core/modules/BackendDataSource/backendDataSource";
import {Project} from "../../../../core/contracts/Models/Project/Project";

@Component({
    selector: 'projects-container',
    templateUrl: './projectsContainer.component.html',
    styleUrls: ['./projectsContainer.component.styl']
})
export class ProjectsContainerComponent {
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