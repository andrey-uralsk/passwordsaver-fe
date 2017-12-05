import {NgModule} from "@angular/core";
import {ProjectCardComponent} from "./projectCard/projectCard.component";
import {RouterModule} from "@angular/router";
import {ProjectsContainerComponent} from "./projectsContainer/projectsContainer.component";
import {CommonModule} from "@angular/common";
import {ProjectsButtonsPaneComponent} from "./projectsButtonsPane/projectsButtonsPane.component";

@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        ProjectCardComponent,
        ProjectsContainerComponent,
        ProjectsButtonsPaneComponent
    ],
    exports: [ProjectsContainerComponent]
})
export class ProjectsModule {
}