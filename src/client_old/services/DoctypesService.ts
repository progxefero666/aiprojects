/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocType } from '../models/DocType';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DoctypesService {
    /**
     * Getall
     * @returns DocType Successful Response
     * @throws ApiError
     */
    public static getallApiDoctypesGet(): CancelablePromise<Array<DocType>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/doctypes/',
        });
    }
    /**
     * Create
     * @param requestBody
     * @returns DocType Successful Response
     * @throws ApiError
     */
    public static createApiDoctypesPost(
        requestBody: DocType,
    ): CancelablePromise<DocType> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/doctypes/',
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
     * @returns DocType Successful Response
     * @throws ApiError
     */
    public static getApiDoctypesIdGet(
        id: number,
    ): CancelablePromise<DocType> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/doctypes/{id}',
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
     * @returns DocType Successful Response
     * @throws ApiError
     */
    public static updateApiDoctypesIdPut(
        id: number,
        requestBody: DocType,
    ): CancelablePromise<DocType> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/doctypes/{id}',
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
     * @returns DocType Successful Response
     * @throws ApiError
     */
    public static deleteApiDoctypesIdDelete(
        id: number,
    ): CancelablePromise<DocType> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/doctypes/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
