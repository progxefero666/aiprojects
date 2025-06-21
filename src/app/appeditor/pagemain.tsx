//src\app\appeditor\primarybar.tsx

import { useState } from "react";
import { Option } from "@/lib/common/model/base/option";
import { AppEditorCfg, AppEditorMessages } from "@/app_front/manapplications/appeditor";
import { Application } from "@/client/models/Application";
import { AppCard } from "./cards/appcard";
import { AppConstants } from "@/app_front/appconstants";
import { renderAlert } from "@/twdaisy/twdaisycomp";
import { AppTheme } from "@/app_front/apptheme";
import { OpResult } from "@/lib/arquitect/model/opresult";
import { executeSaveApplication } from "@/app_front/manapplications/services/appservices";


/**
 * JSX Component layout secondary column
 * Application Editor Tools
 */
export interface PageMainContentProp {
    section:string;
    app?:Application;
}
export default function PageMainContent({ section,app }: PageMainContentProp) {
    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);

    const saveApplication = async (application: Application) => {
        const result:OpResult = await executeSaveApplication(application);
        if(result.isSuccess()){
            setAlertMessage(AppEditorMessages.MSG_SAVE_APP_SUCCESS);
        }
        else {
            setAlertMessage(AppEditorMessages.MSG_SAVE_APP_ERROR);
        }
        setTimeout(() => setAlertMessage(AppConstants.NOT_DEF), 3000);  
    };

    const renderMainContent = () => {
        if (section === AppEditorCfg.SECTION_MAIN.name) {          
            return (<AppCard app={app!} save={saveApplication} />);
        }
        if (section === AppEditorCfg.SECTION_DOCS.name) {
            return (<div>docs</div>);
        }
        if (section === AppEditorCfg.SECTION_TASKS.name) {
            return (<div>tasks</div>);
        }
    };
    return (
        <div className={AppTheme.BODY_MONITOR_STYLE}>
            {renderMainContent()}

             {(alertMessage !== AppConstants.NOT_DEF) ? renderAlert(alertMessage) : null}
        </div>
    )

}//end comp