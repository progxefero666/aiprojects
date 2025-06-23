/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProgLanguage } from '../models/ProgLanguage';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProglanguagesService {
    /**
     * Getall
     * @returns ProgLanguage Successful Response
     * @throws ApiError
     */
    public static getallApiProglanguagesGet(): CancelablePromise<Array<ProgLanguage>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/proglanguages/',
        });
    }
    /**
     * Create
     * @param requestBody
     * @returns ProgLanguage Successful Response
     * @throws ApiError
     */
    public static createApiProglanguagesPost(
        requestBody: ProgLanguage,
    ): CancelablePromise<ProgLanguage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/proglanguages/',
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
     * @returns ProgLanguage Successful Response
     * @throws ApiError
     */
    public static getApiProglanguagesIdGet(
        id: number,
    ): CancelablePromise<ProgLanguage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/proglanguages/{id}',
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
     * @returns ProgLanguage Successful Response
     * @throws ApiError
     */
    public static updateApiProglanguagesIdPut(
        id: number,
        requestBody: ProgLanguage,
    ): CancelablePromise<ProgLanguage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/proglanguages/{id}',
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
     * @returns ProgLanguage Successful Response
     * @throws ApiError
     */
    public static deleteApiProglanguagesIdDelete(
        id: number,
    ): CancelablePromise<ProgLanguage> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/proglanguages/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
