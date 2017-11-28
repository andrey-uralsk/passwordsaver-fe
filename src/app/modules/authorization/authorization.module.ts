import {NgModule} from "@angular/core";
import {AuthorizationTokenManager} from "./authorizationToken.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthorizationHttpHeadersInterceptor} from "./authorizationHttpHeader.interceptor";
import {AuthGuard} from "./auth.guard";

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        AuthorizationTokenManager,
        AuthGuard,
        {provide: HTTP_INTERCEPTORS, useClass: AuthorizationHttpHeadersInterceptor, multi: true}
    ]
})
export class AuthorizationModule {}