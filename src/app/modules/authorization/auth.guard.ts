import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {AuthorizationTokenManager} from "./authorizationToken.service";

@Injectable()
class AuthGuard implements CanActivate{
    constructor( private authorizationToken: AuthorizationTokenManager ) {}

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.authorizationToken.isAuthorizate.first();
    }
}

export {AuthGuard}