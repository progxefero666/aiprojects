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


    const loadsection = (name: string): void => {
        let act_section: Option | null = null;

        if (name === AppEditorCfg.SECTION_MAIN.name) {
            act_section = AppEditorCfg.SECTION_MAIN;
        }
        else if (name === AppEditorCfg.SECTION_DOCS.name) {
            act_section = AppEditorCfg.SECTION_DOCS;
        }
        else if (name === AppEditorCfg.SECTION_TASKS.name) {
            act_section = AppEditorCfg.SECTION_TASKS;
        }
        if (act_section) {
            setSection(act_section);
        }
    }

    const onToolsMessage = (message: string): void => {
        console.log(message);
    }

    if (!app) {
        return <div>Loading...</div>;
    }

    const renderMainContent = () => {
        if (section === AppEditorCfg.SECTION_MAIN) {          
            return (
                <PageMain section={AppEditorCfg.SECTION_MAIN} app={app}   />       
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
        <div id="cont_root" className={AppTheme.LAYOUT_STYLE} >

            {/* header */}
            <PageHeader />

            {/* body */}
            <div className="w-full h-auto grid grid-cols-[17%_65%_17%]">

                <div className="w-full min-h-screen flex flex-col px-2 mb-2">
                    <TwDaisyMenu onselection={loadsection}
                        options={AppEditorCfg.SECTIONS}
                        optactname={AppEditorCfg.ACTIVE_SECTION.name}
                        optcolor={AppTheme.MENU_OPT_COLOR}
                        optactcolor={AppTheme.MENU_OPT_ACT_COLOR} />
                </div>

                <div className={AppTheme.BODY_MONITOR_STYLE}>
                    {renderMainContent()}
                </div>

                <ApplicationEditorTools  />

            </div>
            {/*
             {(alertMessage !== AppConstants.NOT_DEF) ? renderAlert(alertMessage) : null}
            */}
           

        </div>
    );

}//end 