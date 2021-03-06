import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {AuthorizationTokenManager} from "./authorizationToken.service";

@Injectable()
class AuthorizationHttpHeadersInterceptor implements HttpInterceptor {
    constructor( private authtorizationTokenManager: AuthorizationTokenManager ) {}

    public intercept(req: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
        switch ( req.url ){
            case '/api/login':
                return httpHandler.handle(req);
            default:
                return Observable.of(req)
                    .withLatestFrom( this.authtorizationTokenManager.tokenStream )
                    .map(([req, token]) => {
                        const res = req.clone({headers: req.headers.set('Authorization', `Bearer ${token}`)});
                        return res;
                    })
                    .switchMap(req => httpHandler.handle(req))
        }
    }
}

export { AuthorizationHttpHeadersInterceptor};