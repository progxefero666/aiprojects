//src\app\home\pagemain.tsx


import { useState } from "react";
import { AppConstants } from "@/app_front/appconstants";


/**
 * Page Desktop Main Content
 */
export interface PageMainContentProp {
    module:string;
}
export default function PageMainContent({module}: PageMainContentProp) {
    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);

    return(
        <div>asd</div>
    )

}//end comp