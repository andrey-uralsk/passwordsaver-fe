import {Model} from "../../../Models/Model";
import {Type} from "@angular/core";

export interface IDataSourceDeleteRequest<T extends Model> {
    model: Type<T>;
    params?: {[param: string]: string| number| boolean};
}