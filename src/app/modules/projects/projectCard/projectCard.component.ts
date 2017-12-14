import {Component, Input} from "@angular/core";
import {Project} from "../../../../core/contracts/Models/Project/Project";
import {ProjectsService} from "../projects.service";
import {ProjectModalService} from "../projectModal/projectModal.service";
import {ConfirmModalService} from "../../confirmModal/confirmModal.service";

@Component({
    selector: 'project-card',
    templateUrl: './projectCard.component.html',
    styleUrls: ['./projectCard.component.styl']
})
export class ProjectCardComponent {
    @Input() project: Project;

    constructor(
        private projectModal: ProjectModalService,
        private confirmModal: ConfirmModalService
    ) {}

    public editProject() {
        this.projectModal.whenOpenModalWithData.next(Object.assign({}, this.project));
    }

    public deleteProject() {

    }
}