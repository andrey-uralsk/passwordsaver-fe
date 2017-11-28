import {Component} from "@angular/core";
import {AuthorizationTokenManager} from "../../authorization/authorizationToken.service";

@Component({
    selector: 'top-nav-bar',
    templateUrl: './topNavBar.component.html',
    styleUrls: ['./topNavBar.component.styl']
})
export class TopNavBarComponent {

    constructor(private auth: AuthorizationTokenManager){}

    public logout(): void{
        this.auth.removeToken();
    }
}