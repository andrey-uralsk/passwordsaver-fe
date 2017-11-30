import {IDataSource} from "../../contracts/IDataSource/IDataSource";
import {IDataSourceReadRequest} from "../../contracts/IDataSource/read/request/IDataSourceReadRequest";
import {Observable} from "rxjs/Observable";
import {IDataSourceReadOneResponse} from "../../contracts/IDataSource/read/response/IDataSourceReadResponse";
import {IDataSourceCreateResponse} from "../../contracts/IDataSource/create/response/IDataSourceCreateResponse";
import {IDataSourceCreateRequest} from "../../contracts/IDataSource/create/request/IDataSourceCreateRequest";
import {IDataSourceUpdateRequest} from "../../contracts/IDataSource/update/request/IDataSourceUpdateRequest";
import {IDataSourceUpdateResponse} from "../../contracts/IDataSource/update/response/IDataSourceUpdateResponse";
import {IDataSourceDeleteResponse} from "../../contracts/IDataSource/delete/response/IDataSourceDeleteResponse";
import {IDataSourceDeleteRequest} from "../../contracts/IDataSource/delete/request/IDataSourceDeleteRequest";
import {Model} from "../../contracts/Models/Model";
import {enableProdMode, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BackendDataSourceMapping} from "./backendDataSourceMapping";
import {IDataSourceReadManyResponse} from "../../contracts/IDataSource/read/response/IDataSourceReadManyResponse";

@Injectable()
export class BackendDataSource<T extends Model> implements IDataSource<Model> {

    private readonly backendPrefix: string = '/api';
    constructor(
        private http: HttpClient,
        private backendDataSourceMapping: BackendDataSourceMapping
    ) {}

    public readOne(readRequest: IDataSourceReadRequest<T>): Observable<IDataSourceReadOneResponse<T>> {
        const readResource: string = this.backendDataSourceMapping.dataSourceMap.get(readRequest.model);
        return this.http
            .get(`${this.backendPrefix}${readResource}`,
                {params: new HttpParams(readRequest.params)}
            )
            .catch((err, what) => {
                return what
            })
            .map(next => {
                const data: T  = Object.assign({}, next) as T;
                const response: IDataSourceReadOneResponse<T> = {
                    data: data
                };
                return response;
            })
    }

    public readMany(readRequest: IDataSourceReadRequest<T>): Observable<IDataSourceReadManyResponse<T>> {
        const readResource: string = this.backendDataSourceMapping.dataSourceMap.get(readRequest.model);
        return this.http
            .get(`${this.backendPrefix}${readResource}`,
                {params: new HttpParams(readRequest.params)}
            )
            .map(next => {
                let data: T[]  = next['data'];
                return {
                    data: data
                };
            })
    }

    public create(createRequest: IDataSourceCreateRequest<T>): Observable<IDataSourceCreateResponse<T>> {
        const createResource: string = this.backendDataSourceMapping.dataSourceMap.get(createRequest.model);
        return this.http.post(createResource, createRequest.data)
            .map(next => {
                let data: T = next['data'];
                return {
                    data: data
                }
            });
    }

    public update(updateRequest: IDataSourceUpdateRequest<T>): Observable<IDataSourceUpdateResponse<T>> {
        const updateResource: string = this.backendDataSourceMapping.dataSourceMap.get(updateRequest.model);
        return this.http.post(updateResource, updateRequest.data)
            .map(next => {
                let data: T = next['data'];
                return {
                    data: data
                }
            });
    }

    public delete(deleteRequest: IDataSourceDeleteRequest<T>): Observable<IDataSourceDeleteResponse<T>> {
        const updateResource: string = this.backendDataSourceMapping.dataSourceMap.get(deleteRequest.model);
        return this.http.post(updateResource, deleteRequest.data)
            .map(next => {
                let data: T = next['data'];
                return {
                    data: data
                }
            });
    }

}