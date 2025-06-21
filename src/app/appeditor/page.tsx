//src\app\appeditor\page.tsx

"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Option } from "@/lib/common/model/base/option";
import { AppStorage } from "@/app_front/appstorge";
import TwDaisyMenu from "@/twdaisy/twdaisymenu";

import { AppEditorConfig } from "@/app_front/manapplications/appeditor";
import ApplicationEditorTools from "@/app/appeditor/paneltools";

//db model and services
import { Application } from "@/client/models/Application";
import { ApplicationsService } from "@/client_aidatabase/ApplicationsService";
import PageHeader from "./header";
import { AppCard } from "./cards/appcard";
import { AppConstants } from "@/app_front/appconstants";
import { ApiError } from "@/client/core/ApiError"
import { AppAPI } from "@/app_front/appapi";
import { showUiPopupMessage } from "@/libcomp/pumessage";
import { renderAlert } from "@/twdaisy/twdaisycomp";

/**
 * Page Index JSX Client
 * start command:
 *  npx openapi-typescript-codegen --input http://localhost:8000/openapi.json --output ./src/client --client axios
 *  ManApplicationUtil.getFormEntity
 *  
 *  ApplicationEditor
 */
export const PAGE_EDITOR_PATH: string = "./appeditor";

export default function ApplicationEditor() {
    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);
    const [app, setApp]         = useState<Application | null>(null);
    const [section, setSection] = useState<Option>(AppEditorConfig.ACTIVE_SECTION);


    useEffect(() => {
        const init = async () => {
            const app_id: number = AppStorage.readApplicationId()
            const app_load: Application = await ApplicationsService.getById(app_id);
            setApp(app_load);
        };
        init();
    }, []);

     const saveApplication = async (application: Application) => {
        try {
            const result = await ApplicationsService.update(application.id!, application);
        }
        catch (error) {
            if (error instanceof ApiError) {
                AppAPI.outputApiError(error);
            }
            showUiPopupMessage("Error saving app");
        }
        finally {
            setAlertMessage("!! Operation Success !!");
            setTimeout(() => setAlertMessage(AppConstants.NOT_DEF), 3000);       
        }
        
    };

    const loadsection = (name: string): void => {
        let act_section: Option | null = null;

        if (name === AppEditorConfig.SECTION_MAIN.name) {
            act_section = AppEditorConfig.SECTION_MAIN;
        }
        else if (name === AppEditorConfig.SECTION_DOCS.name) {
            act_section = AppEditorConfig.SECTION_DOCS;
        }
        else if (name === AppEditorConfig.SECTION_TASKS.name) {
            act_section = AppEditorConfig.SECTION_TASKS;
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
        if (section === AppEditorConfig.SECTION_MAIN) {          
            return (
                <AppCard app={app} save={saveApplication} />
            );
        }
        if (section === AppEditorConfig.SECTION_DOCS) {
            return (<div>docs</div>);
        }
        if (section === AppEditorConfig.SECTION_TASKS) {
            return (<div>tasks</div>);
        }
    };

    return (
        <div id="cont_root" className="w-full h-auto bg-gray-900" >

            {/* header */}
            <PageHeader />

            {/* body */}
            <div className="w-full h-auto grid grid-cols-[17%_65%_17%]">

                <div className="w-full min-h-screen flex flex-col px-2 mb-2">
                    <TwDaisyMenu onselection={loadsection}
                        options={AppEditorConfig.SECTIONS}
                        optactname={AppEditorConfig.ACTIVE_SECTION.name}
                        optcolor={AppEditorConfig.MENU_OPT_COLOR}
                        optactcolor={AppEditorConfig.MENU_OPT_ACT_COLOR} />
                </div>

                <div className="main_monitor min-h-screen rounded-lg">
                    {renderMainContent()}
                </div>

                <ApplicationEditorTools ontoolsmessage={onToolsMessage} />

            </div>

            {(alertMessage !== AppConstants.NOT_DEF) ? renderAlert(alertMessage) : null}

        </div>
    );

}//end 