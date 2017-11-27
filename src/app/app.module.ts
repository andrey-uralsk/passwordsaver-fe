import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserModule }  from '@angular/platform-browser';
import {RootComponent} from "./components/root/root.component";
import {RouterModule} from "@angular/router";
import {AuthorizationModule} from "./modules/authorization/authorization.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [
        BrowserModule,
        AuthorizationModule,
        HttpClientModule,
        RouterModule.forRoot([{
            path: '',
            loadChildren: './router/appRouting.module#AppRoutingModule'
            }]
        ),
        NgbModule.forRoot()
    ],
    declarations: [
        RootComponent
    ],
    bootstrap: [ RootComponent ]
})
export class AppModule { }
