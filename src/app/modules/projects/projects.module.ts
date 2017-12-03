import {NgModule} from "@angular/core";
import {ProjectCardComponent} from "./projectCard/projectCard.component";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [RouterModule],
    declarations: [ProjectCardComponent],
    exports: [ProjectCardComponent]
})
export class ProjectsModule {
}