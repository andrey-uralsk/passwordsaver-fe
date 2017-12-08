import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Project} from "../../../../core/contracts/Models/Project/Project";
import {BackendDataSource} from "../../../../core/modules/BackendDataSource/backendDataSource";

@Injectable()
export class ProjectModalService {
    public isOpenModal: Subject<boolean> = new Subject<boolean>();
    public whenOpenModalWithData: Subject<Project> = new Subject<Project>();
    public saveModalData: Subject<Project> = new Subject<Project>();

    constructor(
        private backend: BackendDataSource<Project>
    ) {
        this.whenOpenModalWithData
            .subscribe(
                next => this.isOpenModal.next(true)
            );
        this.saveModalData
            .switchMap(next => {
                if(next.id) {
                    return this.backend.update({model: Project, data: next});
                } else {
                    return this.backend.create({model: Project, data: next});
                }
            })
            .subscribe(
                next => console.log(next)
            );
    }
}