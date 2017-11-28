import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Router, RouterModule} from "@angular/router";
import {AppContainerComponent} from "./appContainer/appContainer.component";
import {LoginComponent} from "./login/login.component";
import {LoginModule} from "./login/login.module";
import {NavigationModule} from "../modules/navigation/navigation.module";
import {AuthGuard} from "../modules/authorization/auth.guard";
import {AuthorizationTokenManager} from "../modules/authorization/authorizationToken.service";
import {AuthorizationModule} from "../modules/authorization/authorization.module";

@NgModule({
    imports: [
        CommonModule,
        AuthorizationModule,
        RouterModule.forChild([{
            path: '',
            redirectTo: 'app',
            pathMatch: 'full'
        }, {
            path: 'app',
            component: AppContainerComponent,
            canActivate: [AuthGuard],
        }, {
            path: 'login',
            loadChildren: './login/login.module#LoginModule'
        }]),
        NavigationModule
    ],
    declarations: [AppContainerComponent]
})
export class AppRoutingModule {

    constructor(authToken: AuthorizationTokenManager, router: Router) {
        authToken.isAuth
            .filter(next => !next)
            .do(next => {
                router.navigate(['login'])
                    .then(success => success)
                    .catch(err => console.warn(err));
            })
            .subscribe();
    }
}