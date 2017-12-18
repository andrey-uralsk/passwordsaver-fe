import {Component} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {ConfirmModalService} from "./confirmModal.service";

@Component({
    selector: 'confirm-modal',
    templateUrl: './confirmModal.component.html',
    styleUrls: ['./confirmModal.component.styl']
})
export class ConfirmModalComponent {
    public isOpen: Subject<boolean> = new Subject<boolean>();
    public confirmQuestion: Subject<string> = new Subject<string>();

    constructor(private confirmService: ConfirmModalService) {
        this.isOpen = this.confirmService.isOpenModal;
        this.confirmQuestion = this.confirmService.confirmQuestion;
    }

    public closeModal() {
        this.confirmService.isConfirm.next(false)
    }

    public yesAnswer() {
        this.confirmService.isConfirm.next(true);
    }
}
