import {NgModule} from "@angular/core";
import {TopNavBarComponent} from "./topNavBar/topNavBar.component";

@NgModule({
    declarations: [
        TopNavBarComponent
    ],
    entryComponents: [
        TopNavBarComponent
    ],
    exports: [TopNavBarComponent]
})
export class NavigationModule {
}