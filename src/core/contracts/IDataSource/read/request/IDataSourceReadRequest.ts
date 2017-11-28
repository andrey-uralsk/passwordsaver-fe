import {IModel} from "../../../IModel/IModel";

export interface IDataSourceReadRequest {
    entityName: string;
    model: IModel;
}