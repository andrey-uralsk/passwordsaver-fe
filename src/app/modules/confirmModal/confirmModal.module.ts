import {NgModule} from "@angular/core";
import {ConfirmModalService} from "./confirmModal.service";
import {ConfirmModalComponent} from "./confirmModal.component";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
    ],
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