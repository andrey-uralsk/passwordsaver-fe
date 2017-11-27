import { Observable } from "rxjs/Observable";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { Subject } from "rxjs/Subject";
import {Injectable} from "@angular/core";

@Injectable()
class AuthorizationTokenManager {
    public removeToken() {
        this.whenAuthorizate.next(false);
        localStorage.removeItem('token');
    }
    private whenNewToken: Subject<string> = new ReplaySubject(1);
    private whenAuthorizate: Subject<boolean> = new ReplaySubject(1);

    public isAuthorizate: Observable<boolean> = this.whenAuthorizate.asObservable();
    public tokenStream: Observable<string> = this.whenNewToken
        .combineLatest(this.isAuthorizate.filter(next => next))
        .map(next => next[0]);

    public publishNewToken(token: string): void {
        this.whenNewToken.next(token);
        this.whenAuthorizate.next(true);
        localStorage.setItem('token', token);
    }

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
}

export {AuthorizationTokenManager};