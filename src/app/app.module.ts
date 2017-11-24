import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import {RootComponent} from "./components/root/root.component";
import {TopNavBarComponent} from "./components/topNavBar/topNavBar.component";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        RootComponent,
        TopNavBarComponent
    ],
    bootstrap: [ RootComponent ]
})
export class AppModule { }
