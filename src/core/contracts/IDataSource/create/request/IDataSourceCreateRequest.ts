import {Model} from "../../../Models/Model";
import {Type} from "@angular/core";

export interface IDataSourceCreateRequest<T extends Model> {
    model: Type<T>;
    data: T;
}