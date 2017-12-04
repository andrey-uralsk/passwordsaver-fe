import {Model} from "../../../Models/Model";
import {Type} from "@angular/core";
import {HttpParams} from "@angular/common/http";

export interface IDataSourceReadRequest<T extends Model> {
    model: Type<T>;
    params?: {[param: string]: string};
}