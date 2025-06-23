//src\app\appeditor\primarybar.tsx

import { useState } from "react";
import { AppConstants } from "@/app_front/appconstants";
import { renderAlert } from "@/twdaisy/twdaisycomp";
import { AppTheme } from "@/app_front/apptheme";
import { CodeGenCfg } from "./motor/codegencfg";


/**
 * JSX Component layout secondary column
 * Application Editor Tools
 */
export interface PageMainContentProp {
    section:string;
}
export default function PageMainContent({ section }: PageMainContentProp) {
    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);


    const renderMainContent = () => {
        if (section === CodeGenCfg.SECTION_MAIN.name) {          
            return (<div>default</div>);
        }
        if (section === CodeGenCfg.SECTION_B.name) {
            return (<div>docs</div>);
        }
    };
    return (
        <div className={AppTheme.BODY_MONITOR_STYLE}>
            {renderMainContent()}

             {(alertMessage !== AppConstants.NOT_DEF) ? renderAlert(alertMessage) : null}
        </div>
    )

}//end comp