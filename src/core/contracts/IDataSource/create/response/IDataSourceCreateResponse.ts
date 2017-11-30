import {Model} from "../../../Models/Model";

export interface IDataSourceCreateResponse<T extends Model>{
    data: T;
}