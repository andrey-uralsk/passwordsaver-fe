import {Component} from "@angular/core";
import {Subject} from "rxjs/Subject";

@Component({
    templateUrl: './confirmModal.component.html',
    styleUrls: ['./confirmModal.component.styl']
})
export class ConfirmModalComponent {
    public isOpen: Subject<boolean>;

    constructor(confirmService: ConfirmModalComponent) {}
}