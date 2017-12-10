import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {ProjectModalService} from "./projectModal.service";
import {Subject} from "rxjs/Subject";
import {Project} from "../../../../core/contracts/Models/Project/Project";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
    selector: 'project-modal',
    templateUrl: './projectModal.component.html',
    styleUrls: ['./projectModal.component.styl']
})
export class ProjectModalComponent implements OnInit{
    public isOpen: Subject<boolean>;
    public nameValue = new Subject<string>();
    public descriptionValue = new Subject<string>();
    public value = new Subject<Project>();
    public whenSaveButtonClick = new Subject<undefined>();

    constructor(private projectModalService: ProjectModalService) {}

    ngOnInit(): void {
        this.isOpen = this.projectModalService.isOpenModal;
        this.projectModalService.whenOpenModalWithData
            .subscribe(
                next => {
                    this.value.next(next);
                    this.nameValue.next(next.name);
                    this.descriptionValue.next(next.description);
                }
            );
        this.nameValue
            .withLatestFrom(this.value)
            .map(([name, projectValue]) => {
                const project = projectValue;
                project.name = name;
                return project;
            })
            .multicast(this.value)
            .connect();
        this.descriptionValue
            .withLatestFrom(this.value)
            .map(([description, projectValue]) => {
                const project = projectValue;
                project.description = description;
                return project;
            })
            .multicast(this.value)
            .connect();
        this.whenSaveButtonClick
            .withLatestFrom(this.value)
            .map(next => next[1])
            .multicast(this.projectModalService.saveModalData)
            .connect();
    }

    public closeModal(): void {
        this.isOpen.next(false);
    }

    public saveProject(): void {
        this.whenSaveButtonClick.next();
    }

    public changeName($event: string) {
        this.nameValue.next($event);
    }

    public changeDescription($event: string) {
        this.descriptionValue.next($event);
    }
}