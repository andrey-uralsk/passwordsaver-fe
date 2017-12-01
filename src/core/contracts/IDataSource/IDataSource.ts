import {Observable} from "rxjs/Observable";
import {Model} from "../Models/Model";
import {IDataSourceReadOneResponse} from "./read/response/IDataSourceReadOneResponse";
import {IDataSourceReadRequest} from "./read/request/IDataSourceReadRequest";
import {IDataSourceCreateRequest} from "./create/request/IDataSourceCreateRequest";
import {IDataSourceCreateResponse} from "./create/response/IDataSourceCreateResponse";
import {IDataSourceUpdateResponse} from "./update/response/IDataSourceUpdateResponse";
import {IDataSourceUpdateRequest} from "./update/request/IDataSourceUpdateRequest";
import {IDataSourceDeleteRequest} from "./delete/request/IDataSourceDeleteRequest";
import {IDataSourceDeleteResponse} from "./delete/response/IDataSourceDeleteResponse";
import {IDataSourceReadManyResponse} from "./read/response/IDataSourceReadManyResponse";

abstract class IDataSource<T extends Model> {

    public abstract readOne(readRequest: IDataSourceReadRequest<T>): Observable<IDataSourceReadOneResponse<T>>;

    public abstract readMany(readRequest: IDataSourceReadRequest<T>): Observable<IDataSourceReadManyResponse<T>>;

    public abstract create(readRequest: IDataSourceCreateRequest<T>): Observable<IDataSourceCreateResponse<T>>;

    public abstract update(readRequest: IDataSourceUpdateRequest<T>): Observable<IDataSourceUpdateResponse<T>>;

    public abstract delete(readRequest: IDataSourceDeleteRequest<T>): Observable<IDataSourceDeleteResponse<T>>;
}

export {IDataSource}