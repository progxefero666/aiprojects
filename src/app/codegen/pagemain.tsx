//src\app\appeditor\primarybar.tsx

import { useState } from "react";
import { AppConstants } from "@/app_front/appconstants";
import { renderAlert } from "@/twdaisy/twdaisycomp";
import { AppTheme } from "@/app_front/apptheme";
import { CodeGenCfg } from "./motor/codegencfg";
import CodeGenCard from "./cards/codegencard";



/**
 * JSX Component layout secondary column
 * Application Editor Tools
 */
export interface PageMainContentProp {
    section:string;
}
export default function PageMainContent({ section }: PageMainContentProp) {
    
    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);
    const [code, setCode] = useState<string>(AppConstants.NOT_DEF);

    const onexport = () => {
        alert("export");
    }

    const renderMainContent = () => {
        if (section === CodeGenCfg.SECTION_MAIN.name) {          
            return ( 
                <CodeGenCard execexport={onexport} code={code} />
            );
        }
        if (section === CodeGenCfg.SECTION_B.name) {
            return ( 
                <CodeGenCard execexport={onexport} code={code} />
            );
        }
    };
    return (
        <div className={AppTheme.BODY_MONITOR_STYLE}>
            {renderMainContent()}

             {(alertMessage !== AppConstants.NOT_DEF) ? renderAlert(alertMessage) : null}
        </div>
    )

}//end comp