/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskType } from '../../../src/client/models/TaskType';
import type { CancelablePromise } from '../../../src/client/core/CancelablePromise';
import { OpenAPI } from '../../../src/client/core/OpenAPI';
import { request as __request } from '../../../src/client/core/request';
export class TasktypesService {
    /**
     * Getall
     * @returns TaskType Successful Response
     * @throws ApiError
     */
    public static getallApiTasktypesGet(): CancelablePromise<Array<TaskType>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/tasktypes/',
        });
    }
    /**
     * Create
     * @param requestBody
     * @returns TaskType Successful Response
     * @throws ApiError
     */
    public static createApiTasktypesPost(
        requestBody: TaskType,
    ): CancelablePromise<TaskType> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/tasktypes/',
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
     * @returns TaskType Successful Response
     * @throws ApiError
     */
    public static getApiTasktypesIdGet(
        id: number,
    ): CancelablePromise<TaskType> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/tasktypes/{id}',
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
     * @returns TaskType Successful Response
     * @throws ApiError
     */
    public static updateApiTasktypesIdPut(
        id: number,
        requestBody: TaskType,
    ): CancelablePromise<TaskType> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/tasktypes/{id}',
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
     * @returns TaskType Successful Response
     * @throws ApiError
     */
    public static deleteApiTasktypesIdDelete(
        id: number,
    ): CancelablePromise<TaskType> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/tasktypes/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
