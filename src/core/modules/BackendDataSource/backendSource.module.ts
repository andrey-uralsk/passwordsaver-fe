import {enableProdMode, NgModule} from "@angular/core";
import {BackendDataSource} from "./backendDataSource";
import {BackendDataSourceMapping} from "./backendDataSourceMapping";

@NgModule({
    providers: [
        BackendDataSource,
        BackendDataSourceMapping
    ]
})
export class BackendSourceModule {
}