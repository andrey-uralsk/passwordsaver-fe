import {Component, Input} from "@angular/core";
import {Project} from "../../../../core/contracts/Models/Project/Project";

@Component({
    selector: 'project-card',
    templateUrl: './projectCard.component.html',
    styleUrls: ['./projectCard.component.styl']
})
export class ProjectCardComponent {
    @Input() project: Project;
}