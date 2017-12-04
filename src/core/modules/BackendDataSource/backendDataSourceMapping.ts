import {Injectable, Type} from "@angular/core";
import {Model} from "../../contracts/Models/Model";
import {Project} from "../../contracts/Models/Project/Project";
import {Password} from "../../contracts/Models/Password/Password";
import {PasswordType} from "../../contracts/Models/PasswordType/PasswordType";

@Injectable()
export class BackendDataSourceMapping {
    public readonly dataSourceMap: Map<Type<Model>, string>;

    constructor() {
        this.dataSourceMap = new Map<Type<Model>, string>([
            [Project, '/projects'],
            [Password, '/passwords'],
            [PasswordType, '/passwordTypes']
        ]);
    }
}