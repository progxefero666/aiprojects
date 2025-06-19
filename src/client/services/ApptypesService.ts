/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppType } from '../models/AppType';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ApptypesService {
    /**
     * Getall
     * @returns AppType Successful Response
     * @throws ApiError
     */
    public static getallApiApptypesGet(): CancelablePromise<Array<AppType>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/apptypes/',
        });
    }
    /**
     * Create
     * @param requestBody
     * @returns AppType Successful Response
     * @throws ApiError
     */
    public static createApiApptypesPost(
        requestBody: AppType,
    ): CancelablePromise<AppType> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/apptypes/',
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
     * @returns AppType Successful Response
     * @throws ApiError
     */
    public static getApiApptypesIdGet(
        id: number,
    ): CancelablePromise<AppType> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/apptypes/{id}',
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
     * @returns AppType Successful Response
     * @throws ApiError
     */
    public static updateApiApptypesIdPut(
        id: number,
        requestBody: AppType,
    ): CancelablePromise<AppType> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/apptypes/{id}',
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
     * @returns AppType Successful Response
     * @throws ApiError
     */
    public static deleteApiApptypesIdDelete(
        id: number,
    ): CancelablePromise<AppType> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/apptypes/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
