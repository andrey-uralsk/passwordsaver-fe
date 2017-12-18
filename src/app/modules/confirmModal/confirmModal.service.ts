import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";

@Injectable()
export class ConfirmModalService {
    public isOpenModal: Subject<boolean> = new Subject<boolean>();
    public confirmQuestion: Subject<string> = new Subject<string>();
    public isConfirm: Subject<boolean> = new Subject<boolean>();

    constructor() {
        this.confirmQuestion
            .do(next => console.log(next))
            .mapTo(true)
            .multicast(this.isOpenModal)
            .connect();
        this.isConfirm
            .mapTo(false)
            .multicast(this.isOpenModal)
            .connect();
    }
}