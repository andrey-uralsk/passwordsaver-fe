import {NgModule} from "@angular/core";
import {ProjectCardComponent} from "./projectCard/projectCard.component";
import {RouterModule} from "@angular/router";
import {ProjectsContainerComponent} from "./projectsContainer/projectsContainer.component";
import {CommonModule} from "@angular/common";
import {ProjectsButtonsPaneComponent} from "./projectsButtonsPane/projectsButtonsPane.component";
import {ProjectModalComponent} from "./projectModal/projectModal.component";
import {ProjectModalService} from "./projectModal/projectModal.service";
import {FormsModule} from "@angular/forms";
import {ProjectsService} from "./projects.service";

@NgModule({
    imports: [
        FormsModule,
        RouterModule,
        CommonModule
    ],
    providers: [
        ProjectsService,
        ProjectModalService
    ],
    declarations: [
        ProjectCardComponent,
        ProjectsContainerComponent,
        ProjectsButtonsPaneComponent,
        ProjectModalComponent,
    ],
    exports: [ProjectsContainerComponent]
})
export class ProjectsModule {
}