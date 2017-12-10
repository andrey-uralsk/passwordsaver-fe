import {Component} from "@angular/core";
import {Project} from "../../../../core/contracts/Models/Project/Project";
import {ProjectsService} from "../projects.service";

@Component({
    selector: 'projects-container',
    templateUrl: './projectsContainer.component.html',
    styleUrls: ['./projectsContainer.component.styl']
})
export class ProjectsContainerComponent {
    public projects: Project[] = [];

    constructor(private projectsService: ProjectsService) {
        this.projectsService.projectsStream
            .subscribe(
                next => this.projects = next,
            )
        this.projectsService.getProjects();
    }
}