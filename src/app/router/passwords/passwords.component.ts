import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {BackendDataSource} from "../../../core/modules/BackendDataSource/backendDataSource";
import {PasswordType} from "../../../core/contracts/Models/PasswordType/PasswordType";
import {Project} from "../../../core/contracts/Models/Project/Project";
import {Password} from "../../../core/contracts/Models/Password/Password";

@Component({
    templateUrl: './passwords.component.html',
    styleUrls: ['./passwords.component.styl']
})
export class PasswordsComponent implements OnInit{
    private passwords: Password[];

    constructor(
        private route: ActivatedRoute,
        private backend: BackendDataSource<PasswordType>,
    ) {}

    ngOnInit(): void {
        this.route.paramMap
            .switchMap(params => {
                const projectId = params.get('projectId');
                return this.backend.readMany({
                    model: Password,
                    params: {
                        projectId: projectId
                    }
                })})
            .map(next => next.data)
            .subscribe(next => {
                    console.log(next);
                    this.passwords = next;
                },
                error => console.log(error)
            );
    }
}