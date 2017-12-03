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
import {ProjectsComponent} from "./projects/projects.component";
import {ProjectsModule} from "../modules/projects/projects.module";

@NgModule({
    imports: [
        CommonModule,
        AuthorizationModule,
        ProjectsModule,
        RouterModule.forChild([{
            path: '',
            redirectTo: 'app/projects',
            pathMatch: 'full'
        }, {
            path: 'app',
            component: AppContainerComponent,
            canActivate: [AuthGuard],
            children: [{
                path: '',
                redirectTo: 'projects',
                pathMatch: 'full'
            }, {
                path: 'projects',
                component: ProjectsComponent
            }, {
                path: 'passwords/:projectId',
            }]
        }, {
            path: 'login',
            loadChildren: './login/login.module#LoginModule'
        }]),
        NavigationModule
    ],
    exports: [RouterModule],
    declarations: [AppContainerComponent, ProjectsComponent]
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