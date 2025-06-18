//src\api_client\ApplicationsService.ts

import type { CancelablePromise } from '@/client/core/CancelablePromise';
import { OpenAPI } from '@/client/core/OpenAPI';
import { request as __request } from '@/client/core/request';
import type { Application } from '@/client/models/Application';

/**
 * FastAPI Client Service
 */
export class ApplicationsService {

    /**
     * Getall
     * @returns Application Successful Response
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<Array<Application>> {
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
    public static insert(requestBody:Application):CancelablePromise<Application> {
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
    public static getById(id:number):CancelablePromise<Application> {
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
    public static update(id: number,requestBody:Application):CancelablePromise<Application> {
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
    public static delete(id:number):CancelablePromise<Application> {
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
    public static getByType(apptype: string): CancelablePromise<Array<Application>> {
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
    public static getByProglanguage(proglanguage:string):CancelablePromise<Array<Application>> {
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
    public static getByUseDocker(usedocker:boolean): CancelablePromise<Array<Application>> {
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
    public static getByName(name:string):CancelablePromise<Array<Application>> {
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

}//end service
