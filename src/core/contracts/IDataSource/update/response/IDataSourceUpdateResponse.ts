import {Model} from "../../../Models/Model";

export interface IDataSourceUpdateResponse<T extends Model>{
    data: T;
}