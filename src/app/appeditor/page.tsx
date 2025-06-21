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

import { AppTheme } from "@/app_front/apptheme";
import PageMainContent from "./pagemain";
import PagePrimaryBar from "./primarybar";
import PageSecondaryBar from "./secondarybar";

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

    const [app, setApp]         = useState<Application | null>(null);
    const [section, setSection] = useState<string>(AppEditorCfg.SECTION_MAIN.name);

    useEffect(() => {
        const init = async () => {
            const app_id: number = AppStorage.readApplicationId()
            const app_load: Application = await ApplicationsService.getById(app_id);
            setApp(app_load);
        };
        init();
    }, []);

    const chargeSection = (section:string): void => {
        setSection(section);
    }

    if (!app) {return <div>Loading...</div>;}

    return (
        <div id="cont_root" className={AppTheme.LAYOUT_STYLE} >
            <PageHeader />
            <div className="w-full h-auto grid grid-cols-[17%_65%_17%]">
                <PagePrimaryBar    chargesection={chargeSection} 
                                   section={section}  app={app} />
                <PageMainContent   section={section}  app={app} /> 
                <PageSecondaryBar  section={section}  app={app}/>
            </div>
        </div>
    );

}//end 