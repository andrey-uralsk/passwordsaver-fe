import {Component} from "@angular/core";
import {Project} from "../../../../core/contracts/Models/Project/Project";
import {ProjectsService} from "../projects.service";
import {Subject} from "rxjs/Subject";

@Component({
    selector: 'projects-container',
    templateUrl: './projectsContainer.component.html',
    styleUrls: ['./projectsContainer.component.styl']
})
export class ProjectsContainerComponent {
    public projects: Subject<Project[]>;

    constructor(private projectsService: ProjectsService) {
        this.projects = projectsService.projectsStream;
        this.projectsService.getProjects();
    }
}