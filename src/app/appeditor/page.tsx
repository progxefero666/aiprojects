//src\app\appeditor\page.tsx

"use client";

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
import PageHeader from "./header";
import ApplicationEditorTools from "@/app/appeditor/secondarybar";
import { AppTheme } from "@/app_front/apptheme";
import PageMain from "./pagemain";
/**
 * Page Index JSX Client
 * start command:
 *  npx openapi-typescript-codegen --input http://localhost:8000/openapi.json --output ./src/client --client axios
 *  ManApplicationUtil.getFormEntity
 *  
 *  ApplicationEditor
 *  src\app_front\manapplications\appeditorcfg.ts
 */
export const PAGE_EDITOR_PATH: string = "./appeditor";

export default function ApplicationEditor() {
    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);
    const [app, setApp]         = useState<Application | null>(null);
    const [section, setSection] = useState<Option>(AppEditorCfg.ACTIVE_SECTION);


    useEffect(() => {
        const init = async () => {
            const app_id: number = AppStorage.readApplicationId()
            const app_load: Application = await ApplicationsService.getById(app_id);
            setApp(app_load);
        };
        init();
    }, []);


    const onToolsMessage = (message: string): void => {
        console.log(message);
    }

    if (!app) {return <div>Loading...</div>;}

    return (
        <div id="cont_root" className={AppTheme.LAYOUT_STYLE} >
            <PageHeader />
            <PageMain app={app}/>
            {(alertMessage !== AppConstants.NOT_DEF) ? renderAlert(alertMessage) : null}

        </div>
    );

}//end 