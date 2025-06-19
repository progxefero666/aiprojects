//src\api_client\DefaultService.ts

import type { CancelablePromise } from '@/client_old/core/CancelablePromise';
import { OpenAPI } from '@/client_old/core/OpenAPI';
import { request as __request } from '@/client_old/core/request';

/**
 * FastAPI Client Service
 */
export class DefaultService {

    /**
     * Read Root
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readRootGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/',
        });
    }
    
}//end service
