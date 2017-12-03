import {Component} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthorizationTokenManager} from "../../modules/authorization/authorizationToken.service";

interface User {
    email: string;
    password: string;
}
@Component({
    templateUrl: './login.component.html',
    styleUrls:['./login.component.styl']
})
export class LoginComponent {
    public user: User = {email: '', password: ''};
    public whenAuthButtonClick: Subject<undefined> = new Subject();

    constructor(
        private router: Router,
        private http: HttpClient,
        private authtorizationToken: AuthorizationTokenManager
    ) {
        this.authtorizationToken.isAuth
            .filter(next => next)
            .first()
            .do(next => {
                router.navigate(['app/projects'])
                    .then(sucess => sucess)
                    .catch(err => console.warn(err));
            })
            .subscribe();


        this.whenAuthButtonClick
            .do(next => console.log(next))
            .switchMap(next => this.http.post('/api/login', {
                email: this.user.email,
                password: this.user.password
            }))
            .catch(((err, what)  => {
                switch (err.status){
                    case 400:
                        console.warn(`authenticate error: ${err.json()['responseStatus']['message']}`);
                        break;
                    default:
                        console.warn(`unknow authenticate error status ${err.status}`);
                }
                return what;
            }))
            .map(next => next['token'])
            .do(next => authtorizationToken.publishNewToken(next))
            .subscribe(
                next => console.log(next),
                error => console.warn(error),
                () => console.log('isComplete')
            );
    }
}