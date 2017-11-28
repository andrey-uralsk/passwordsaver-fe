import { Observable } from "rxjs/Observable";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { Subject } from "rxjs/Subject";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ActivatedRouteSnapshot} from "@angular/router";

@Injectable()
class AuthorizationTokenManager {

    private whenNewToken: Subject<string> = new ReplaySubject(1);
    private whenAuthorizate: Subject<boolean> = new ReplaySubject(1);
    public tokenStream: Observable<string> = this.whenNewToken;
    public isAuth: Observable<boolean> = this.whenAuthorizate.asObservable();

    constructor() {
        const token = localStorage.getItem('token');
        if (token !== null) {
            this.whenNewToken.next(token);
            this.whenAuthorizate.next(true);
        }
        else {
            this.whenAuthorizate.next(false);
        }
    }

    public publishNewToken(token: string): void {
        this.whenNewToken.next(token);
        this.whenAuthorizate.next(true);
        localStorage.setItem('token', token);
    }

    public removeToken() {
        this.whenAuthorizate.next(false);
        localStorage.removeItem('token');
    }
}

export {AuthorizationTokenManager};