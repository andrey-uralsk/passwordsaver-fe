import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserModule }  from '@angular/platform-browser';
import {RootComponent} from "./components/root/root.component";
import {RouterModule, Routes} from "@angular/router";
import {AuthorizationModule} from "./modules/authorization/authorization.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BackendSourceModule} from "../core/modules/BackendDataSource/backendSource.module";

@NgModule({
    imports: [
        BackendSourceModule,
        BrowserModule,
        AuthorizationModule,
        RouterModule.forRoot([{
            path: '',
            loadChildren: './router/appRouting.module#AppRoutingModule'
            }]
        ),
        NgbModule.forRoot()
    ],
    exports: [RouterModule],
    declarations: [
        RootComponent
    ],
    bootstrap: [ RootComponent ]
})
export class AppModule { }
