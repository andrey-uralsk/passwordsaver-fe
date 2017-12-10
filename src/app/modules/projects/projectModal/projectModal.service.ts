import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Project} from "../../../../core/contracts/Models/Project/Project";
import {ProjectsService} from "../projects.service";

@Injectable()
export class ProjectModalService {
    public isOpenModal: Subject<boolean> = new Subject<boolean>();
    public whenOpenModalWithData: Subject<Project> = new Subject<Project>();
    public saveModalData: Subject<Project> = new Subject<Project>();

    constructor(private projectService: ProjectsService) {
        this.whenOpenModalWithData
            .subscribe(
                next => this.isOpenModal.next(true)
            );
        this.saveModalData
            .do(next => {
                if(next.id) {
                    this.projectService.updateProject(next);
                } else {
                    this.projectService.addProject(next)
                }
            })
            .mapTo(false)
            .multicast(this.isOpenModal)
            .connect();
    }
}