import {Model} from "../../../Models/Model";

export interface IDataSourceReadOneResponse<T extends Model>{
    data: T;
}