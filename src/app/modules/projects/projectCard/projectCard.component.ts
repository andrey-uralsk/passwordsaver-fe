import {Component, Input, OnInit} from "@angular/core";
import {Project} from "../../../../core/contracts/Models/Project/Project";
import {ProjectsService} from "../projects.service";
import {ProjectModalService} from "../projectModal/projectModal.service";
import {ConfirmModalService} from "../../confirmModal/confirmModal.service";
import {Subject} from "rxjs/Subject";

@Component({
    selector: 'project-card',
    templateUrl: './projectCard.component.html',
    styleUrls: ['./projectCard.component.styl']
})
export class ProjectCardComponent implements OnInit{

    @Input() project: Project;
    private whenDeleteProject: Subject<undefined> = new Subject<undefined>();

    constructor(
        private projectModal: ProjectModalService,
        private confirmModal: ConfirmModalService,
        private projectsService: ProjectsService
    ) {}

    ngOnInit(): void {
        this.whenDeleteProject
            .mapTo('Do you want delete this project?')
            .multicast(this.confirmModal.confirmQuestion)
            .switchMap(() => this.confirmModal.isConfirm)
            .filter(next => next)
            .mapTo(this.project)
            .do(next => this.projectsService.deleteProject(next))
            .subscribe();
    }

    public editProject() {
        this.projectModal.whenOpenModalWithData.next(Object.assign({}, this.project));
    }

    public deleteProject() {
        this.whenDeleteProject.next();
    }
}