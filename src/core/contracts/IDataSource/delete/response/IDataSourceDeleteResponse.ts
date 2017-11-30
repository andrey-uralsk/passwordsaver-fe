import {Model} from "../../../Models/Model";

export interface IDataSourceDeleteResponse<T extends Model>{
    data: T;
}