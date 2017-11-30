import {Injectable, Type} from "@angular/core";
import {Model} from "../../contracts/Models/Model";
import {Project} from "../../contracts/Models/Project/Project";

@Injectable()
export class BackendDataSourceMapping {
    public readonly dataSourceMap: Map<Type<Model>, string>;

    constructor() {
        this.dataSourceMap = new Map<Type<Model>, string>([
            [Model, '/api/'],
            [Project, '/projects']
        ]);
    }
}