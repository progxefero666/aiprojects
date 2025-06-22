//src\app_front\manager\manappsutil.ts

import { AppConstants } from "../appconstants";
import { AppDef } from "./applicationdef";

/**
 * class ManApplicationUtil.getFormEntity()
 */
export class ManApplicationUtil {

    public static getFormEntity():object {
        
        const name: string = AppConstants.NOT_DEF;
        const reference: string = AppConstants.NOT_DEF;
        const author: string = AppConstants.NOT_DEF;
        const apptype: string = AppConstants.NOT_DEF;
        const proglanguage: string = AppConstants.NOT_DEF;
        const osystem: string = AppConstants.NOT_DEF;
        const appurl: string = AppConstants.NOT_DEF;
        const apppath: string = AppConstants.NOT_DEF;
        const localdev: boolean = AppDef.fdef_localdev;
        const usedocker: boolean = AppDef.fdef_usedocker;
        const creationdate: Date = new Date();
        const updatedate: Date = new Date();
        const description: string = AppConstants.NOT_DEF;
        const controlusers: boolean = AppDef.fdef_controlusers;
        const useui: boolean = AppDef.fdef_useui;
        const useagents: boolean = AppDef.fdef_useagents;
        const consumedb: boolean = AppDef.fdef_consumedb;
        const consumeapi: boolean = AppDef.fdef_consumeapi;
        const consumeai: boolean = AppDef.fdef_consumeapi;
        const exposedb: boolean = AppDef.fdef_exposedb;
        const exposeapi: boolean = AppDef.fdef_exposeapi;       

        const app = {name,reference,
            author,apptype,proglanguage,osystem,appurl,apppath,localdev,usedocker,
            creationdate,updatedate,description,controlusers,useui,useagents,consumedb,
            consumeapi,consumeai,exposedb,exposeapi};
        
        return app;
    }

}//end class