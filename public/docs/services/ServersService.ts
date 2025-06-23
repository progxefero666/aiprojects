/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Server } from '../../../src/client/models/Server';
import type { CancelablePromise } from '../../../src/client/core/CancelablePromise';
import { OpenAPI } from '../../../src/client/core/OpenAPI';
import { request as __request } from '../../../src/client/core/request';
export class ServersService {
    /**
     * Getall
     * @returns Server Successful Response
     * @throws ApiError
     */
    public static getallApiServersGet(): CancelablePromise<Array<Server>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/servers/',
        });
    }
    /**
     * Create
     * @param requestBody
     * @returns Server Successful Response
     * @throws ApiError
     */
    public static createApiServersPost(
        requestBody: Server,
    ): CancelablePromise<Server> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/servers/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get
     * @param id
     * @returns Server Successful Response
     * @throws ApiError
     */
    public static getApiServersIdGet(
        id: number,
    ): CancelablePromise<Server> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/servers/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update
     * @param id
     * @param requestBody
     * @returns Server Successful Response
     * @throws ApiError
     */
    public static updateApiServersIdPut(
        id: number,
        requestBody: Server,
    ): CancelablePromise<Server> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/servers/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete
     * @param id
     * @returns Server Successful Response
     * @throws ApiError
     */
    public static deleteApiServersIdDelete(
        id: number,
    ): CancelablePromise<Server> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/servers/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Getbyname
     * @param name
     * @returns Server Successful Response
     * @throws ApiError
     */
    public static getbynameApiServersNameNameGet(
        name: string,
    ): CancelablePromise<Array<Server>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/servers/name/{name}',
            path: {
                'name': name,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Getbysrvtype
     * @param srvtype
     * @returns Server Successful Response
     * @throws ApiError
     */
    public static getbysrvtypeApiServersSrvtypeSrvtypeGet(
        srvtype: string,
    ): CancelablePromise<Array<Server>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/servers/srvtype/{srvtype}',
            path: {
                'srvtype': srvtype,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
