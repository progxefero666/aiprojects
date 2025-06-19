/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocCategory } from '../models/DocCategory';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DoccategoriesService {
    /**
     * Getall
     * @returns DocCategory Successful Response
     * @throws ApiError
     */
    public static getallApiDoccategoriesGet(): CancelablePromise<Array<DocCategory>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/doccategories/',
        });
    }
    /**
     * Create
     * @param requestBody
     * @returns DocCategory Successful Response
     * @throws ApiError
     */
    public static createApiDoccategoriesPost(
        requestBody: DocCategory,
    ): CancelablePromise<DocCategory> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/doccategories/',
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
     * @returns DocCategory Successful Response
     * @throws ApiError
     */
    public static getApiDoccategoriesIdGet(
        id: number,
    ): CancelablePromise<DocCategory> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/doccategories/{id}',
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
     * @returns DocCategory Successful Response
     * @throws ApiError
     */
    public static updateApiDoccategoriesIdPut(
        id: number,
        requestBody: DocCategory,
    ): CancelablePromise<DocCategory> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/doccategories/{id}',
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
     * @returns DocCategory Successful Response
     * @throws ApiError
     */
    public static deleteApiDoccategoriesIdDelete(
        id: number,
    ): CancelablePromise<DocCategory> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/doccategories/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
