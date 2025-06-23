/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocProjAnalisis } from '../../../src/client/models/DocProjAnalisis';
import type { CancelablePromise } from '../../../src/client/core/CancelablePromise';
import { OpenAPI } from '../../../src/client/core/OpenAPI';
import { request as __request } from '../../../src/client/core/request';
export class DocsprojanalisisService {
    /**
     * Getall
     * @returns DocProjAnalisis Successful Response
     * @throws ApiError
     */
    public static getallApiDocsprojanalisisGet(): CancelablePromise<Array<DocProjAnalisis>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/docsprojanalisis/',
        });
    }
    /**
     * Create
     * @param requestBody
     * @returns DocProjAnalisis Successful Response
     * @throws ApiError
     */
    public static createApiDocsprojanalisisPost(
        requestBody: DocProjAnalisis,
    ): CancelablePromise<DocProjAnalisis> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/docsprojanalisis/',
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
     * @returns DocProjAnalisis Successful Response
     * @throws ApiError
     */
    public static getApiDocsprojanalisisIdGet(
        id: number,
    ): CancelablePromise<DocProjAnalisis> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/docsprojanalisis/{id}',
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
     * @returns DocProjAnalisis Successful Response
     * @throws ApiError
     */
    public static updateApiDocsprojanalisisIdPut(
        id: number,
        requestBody: DocProjAnalisis,
    ): CancelablePromise<DocProjAnalisis> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/docsprojanalisis/{id}',
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
     * @returns DocProjAnalisis Successful Response
     * @throws ApiError
     */
    public static deleteApiDocsprojanalisisIdDelete(
        id: number,
    ): CancelablePromise<DocProjAnalisis> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/docsprojanalisis/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Getbyproject
     * @param project
     * @returns DocProjAnalisis Successful Response
     * @throws ApiError
     */
    public static getbyprojectApiDocsprojanalisisProjectProjectGet(
        project: string,
    ): CancelablePromise<Array<DocProjAnalisis>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/docsprojanalisis/project/{project}',
            path: {
                'project': project,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Getbyname
     * @param name
     * @returns DocProjAnalisis Successful Response
     * @throws ApiError
     */
    public static getbynameApiDocsprojanalisisNameNameGet(
        name: string,
    ): CancelablePromise<Array<DocProjAnalisis>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/docsprojanalisis/name/{name}',
            path: {
                'name': name,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
