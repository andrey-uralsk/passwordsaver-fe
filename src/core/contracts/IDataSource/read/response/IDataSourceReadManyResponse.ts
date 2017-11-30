import {Model} from "../../../Models/Model";

export interface IDataSourceReadManyResponse<T extends Model>{
    data: T[];
}