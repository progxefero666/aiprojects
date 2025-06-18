//src\app_front\manager\manappsutil.ts

import { Application } from "@/client/models/Application";
import { AppConstants } from "../appconstants";

//import {Application} from "@/db_model/application"

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
        const localdev: boolean = false;
        const usedocker: boolean = false;
        const creationdate: Date = new Date();
        const updatedate: Date = new Date();
        const description: string = AppConstants.NOT_DEF;
        const controlusers: boolean = false;
        const useui: boolean = false;
        const useagents: boolean = false;
        const consumedb: boolean = false;
        const consumeapi: boolean = false;
        const consumeai: boolean = false;
        const exposedb: boolean = false;
        const exposeapi: boolean = false;       

        const app = {name,reference,
            author,apptype,proglanguage,osystem,appurl,apppath,localdev,usedocker,
            creationdate,updatedate,description,controlusers,useui,useagents,consumedb,
            consumeapi,consumeai,exposedb,exposeapi};
        
        return app;
    }

}//end class