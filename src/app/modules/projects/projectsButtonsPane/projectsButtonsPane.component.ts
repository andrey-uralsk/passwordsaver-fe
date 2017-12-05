import {Component} from "@angular/core";
import {ProjectModalService} from "../projectModal/projectModal.service";

@Component({
    selector: 'projects-buttons-pane',
    templateUrl: './projectsButtonsPane.component.html',
    styleUrls: ['./projectsButtonsPane.component.styl']
})
export class ProjectsButtonsPaneComponent {

    constructor(private projectModal: ProjectModalService) {
        projectModal
            .isOpenModal
            .subscribe(
                next => console.log(next),
                err => console.error(err),
                () => console.log('complete')
            )
    }

    public addProjectClick() {
        this.projectModal.isOpenModal.next(true);
    }
}