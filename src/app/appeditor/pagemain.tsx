//src\app\appeditor\primarybar.tsx

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Option } from "@/lib/common/model/base/option";
import { AppStorage } from "@/app_front/appstorge";
import TwDaisyMenu from "@/twdaisy/twdaisymenu";

import { AppEditorCfg, AppEditorMessages } from "@/app_front/manapplications/appeditor";
import { Application } from "@/client/models/Application";
import { ApplicationsService } from "@/client_aidatabase/ApplicationsService";

import { AppCard } from "./cards/appcard";
import { AppConstants } from "@/app_front/appconstants";
import { ApiError } from "@/client/core/ApiError"
import { AppAPI } from "@/app_front/appapi";
import { renderAlert } from "@/twdaisy/twdaisycomp";

//page layout jsx components

import ApplicationEditorTools from "@/app/appeditor/secondarybar";
import { AppTheme } from "@/app_front/apptheme";

/**
 * JSX Component layout secondary column
 * Application Editor Tools
 */
export interface PageMainProp {section:Option;app?:Application;}


const executeSaveApplication = async (application: Application): Promise<string> => {
    try {
        const result = await ApplicationsService.update(application.id!, application);
    }
    catch (error) {
        if (error instanceof ApiError) { AppAPI.outputApiError(error); }
        return String(error);
    }
    finally {
        return AppEditorMessages.MSG_SAVE_APP_SUCCESS;
    }
};

export default function PageMain({ section,app }: PageMainProp) {

    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);

    const saveApplication = async (application: Application) => {
        const result:string = await executeSaveApplication(application);
    };

    const renderMainContent = () => {
        if (section === AppEditorCfg.SECTION_MAIN) {          
            return (
                <AppCard app={app!} save={saveApplication} />
            );
        }
        if (section === AppEditorCfg.SECTION_DOCS) {
            return (<div>docs</div>);
        }
        if (section === AppEditorCfg.SECTION_TASKS) {
            return (<div>tasks</div>);
        }
    };
    return (
        <div className={AppTheme.BODY_MONITOR_STYLE}>
            {renderMainContent()}
        </div>
    )

}//end comp