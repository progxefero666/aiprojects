/* generated using openapi-typescript-codegen -- do not edit */

import type { Agent } from '../models/Agent';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AgentsService {
    /**
     * Getall
     * @returns Agent Successful Response
     * @throws ApiError
     */
    public static getallApiAgentsGet(): CancelablePromise<Array<Agent>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/agents/',
        });
    }
    /**
     * Create
     * @param requestBody
     * @returns Agent Successful Response
     * @throws ApiError
     */
    public static createApiAgentsPost(
        requestBody: Agent,
    ): CancelablePromise<Agent> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/agents/',
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
     * @returns Agent Successful Response
     * @throws ApiError
     */
    public static getApiAgentsIdGet(
        id: number,
    ): CancelablePromise<Agent> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/agents/{id}',
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
     * @returns Agent Successful Response
     * @throws ApiError
     */
    public static updateApiAgentsIdPut(
        id: number,
        requestBody: Agent,
    ): CancelablePromise<Agent> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/agents/{id}',
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
     * @returns Agent Successful Response
     * @throws ApiError
     */
    public static deleteApiAgentsIdDelete(
        id: number,
    ): CancelablePromise<Agent> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/agents/{id}',
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
     * @returns Agent Successful Response
     * @throws ApiError
     */
    public static getbynameApiAgentsNameNameGet(
        name: string,
    ): CancelablePromise<Array<Agent>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/agents/name/{name}',
            path: {
                'name': name,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Getbyagtype
     * @param agtype
     * @returns Agent Successful Response
     * @throws ApiError
     */
    public static getbyagtypeApiAgentsAgtypeAgtypeGet(
        agtype: string,
    ): CancelablePromise<Array<Agent>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/agents/agtype/{agtype}',
            path: {
                'agtype': agtype,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
