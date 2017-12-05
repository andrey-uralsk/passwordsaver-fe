import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {ProjectModalService} from "./projectModal.service";
import {Subject} from "rxjs/Subject";

@Component({
    selector: 'project-modal',
    templateUrl: './projectModal.component.html',
    styleUrls: ['./projectModal.component.styl']
})
export class ProjectModalComponent implements OnInit{
    public isOpen: Subject<boolean>;

    constructor(private projectModalService: ProjectModalService) {}

    ngOnInit(): void {
        this.isOpen = this.projectModalService.isOpenModal;
    }

    public closeModal(): void {
        this.isOpen.next(false);
    }
}