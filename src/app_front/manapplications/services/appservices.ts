//src\app_front\manapplications\services\appservices.ts

import { Application } from "@/client/models/Application";
import { ApplicationsService } from "@/client_aidatabase/ApplicationsService";
import { ApiError } from "@/client/core/ApiError"
import { AppAPI } from "@/app_front/appapi";
import { OpResult } from "@/lib/arquitect/model/opresult";
import { OpCfg } from "@/lib/arquitect/model/opconfig";

/**
 * class Front Application Service
 * use "@/client_aidatabase/ApplicationsService"
 */
export const executeSaveApplication = async (application: Application): Promise<OpResult> => {
    try {
        const result = await ApplicationsService.update(application.id!, application);
    }
    catch (error) {
        if (error instanceof ApiError) { AppAPI.outputApiError(error); }
        return new OpResult(OpCfg.RES_ERROR,String(error)) ;
    }
    finally {
        return OpResult.SUCCESS;
    }
};
