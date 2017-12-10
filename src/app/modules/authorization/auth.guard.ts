import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {AuthorizationTokenManager} from "./authorizationToken.service";
import {HttpClient} from "@angular/common/http";

@Injectable()
class AuthGuard implements CanActivate, CanActivateChild{

    constructor(
        private http: HttpClient,
        private authorizationToken: AuthorizationTokenManager
    ) {}

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return Observable.of(route)
            .switchMap(() => this.http.get('/api/auth/isAuth'))
            .catch(((err, what)  => {
                switch (err.status){
                    case 401:
                        console.warn(`authenticate error: 401`);
                        break;
                    default:
                        console.warn(`unknow authenticate error`);
                }
                return Observable.of({isAuth: false});
            }))
            .map(next => next['isAuth'] as boolean)
            .map(next => {
                if(!next) {
                    this.authorizationToken.removeToken();
                }
                return next;
            });
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(childRoute, state);
    }
}

export {AuthGuard}