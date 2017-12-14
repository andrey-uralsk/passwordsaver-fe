import {NgModule} from "@angular/core";
import {ConfirmModalService} from "./confirmModal.service";
import {ConfirmModalComponent} from "./confirmModal.component";

@NgModule({
    providers: [
        ConfirmModalService
    ],
    declarations: [
        ConfirmModalComponent
    ],
    exports: [
        ConfirmModalComponent
    ]
})
export class ConfirmModalModule {
}