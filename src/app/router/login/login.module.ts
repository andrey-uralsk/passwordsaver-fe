import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
@NgModule({
    imports: [
        FormsModule,
        RouterModule.forChild([{
            path: '',
            component: LoginComponent
        }])
    ],
    declarations: [LoginComponent]
})
export class LoginModule {
}