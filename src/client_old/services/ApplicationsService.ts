/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Application } from '../models/Application';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ApplicationsService {
    /**
     * Getall
     * @returns Application Successful Response
     * @throws ApiError
     */
    public static getallApiApplicationsGet(): CancelablePromise<Array<Application>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/applications/',
        });
    }
    /**
     * Create
     * @param requestBody
     * @returns Application Successful Response
     * @throws ApiError
     */
    public static createApiApplicationsPost(
        requestBody: Application,
    ): CancelablePromise<Application> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/applications/',
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
     * @returns Application Successful Response
     * @throws ApiError
     */
    public static getApiApplicationsIdGet(
        id: number,
    ): CancelablePromise<Application> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/applications/{id}',
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
     * @returns Application Successful Response
     * @throws ApiError
     */
    public static updateApiApplicationsIdPut(
        id: number,
        requestBody: Application,
    ): CancelablePromise<Application> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/applications/{id}',
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
     * @returns Application Successful Response
     * @throws ApiError
     */
    public static deleteApiApplicationsIdDelete(
        id: number,
    ): CancelablePromise<Application> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/applications/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Getbyapptype
     * @param apptype
     * @returns Application Successful Response
     * @throws ApiError
     */
    public static getbyapptypeApiApplicationsApptypeApptypeGet(
        apptype: string,
    ): CancelablePromise<Array<Application>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/applications/apptype/{apptype}',
            path: {
                'apptype': apptype,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Getbyproglanguage
     * @param proglanguage
     * @returns Application Successful Response
     * @throws ApiError
     */
    public static getbyproglanguageApiApplicationsProglanguageProglanguageGet(
        proglanguage: string,
    ): CancelablePromise<Array<Application>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/applications/proglanguage/{proglanguage}',
            path: {
                'proglanguage': proglanguage,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Getbyusedocker
     * @param usedocker
     * @returns Application Successful Response
     * @throws ApiError
     */
    public static getbyusedockerApiApplicationsUsedockerUsedockerGet(
        usedocker: boolean,
    ): CancelablePromise<Array<Application>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/applications/usedocker/{usedocker}',
            path: {
                'usedocker': usedocker,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Getbyname
     * @param name
     * @returns Application Successful Response
     * @throws ApiError
     */
    public static getbynameApiApplicationsNameNameGet(
        name: string,
    ): CancelablePromise<Array<Application>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/applications/name/{name}',
            path: {
                'name': name,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
