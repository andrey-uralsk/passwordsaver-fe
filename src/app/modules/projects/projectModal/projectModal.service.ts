import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";

@Injectable()
export class ProjectModalService {
    public isOpenModal: Subject<boolean> = new Subject<boolean>();
}