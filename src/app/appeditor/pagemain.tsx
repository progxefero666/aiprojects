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
export interface PageMainProp {
    app: Application;
}
export default function PageMain({ app }: PageMainProp) {

    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);
    const [section, setSection] = useState<Option>(AppEditorCfg.ACTIVE_SECTION);

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
        if (act_section) {setSection(act_section);}
    }

    const saveApplication = async (application: Application) => {
        try {
            const result = await ApplicationsService.update(application.id!, application);
        }
        catch (error) {
            if (error instanceof ApiError) {AppAPI.outputApiError(error);}
            setAlertMessage(AppEditorMessages.MSG_SAVE_APP_ERROR);
        }
        finally {
            setAlertMessage(AppEditorMessages.MSG_SAVE_APP_SUCCESS);
            setTimeout(() => setAlertMessage(AppConstants.NOT_DEF), 3000);
        }
    };

    const renderMainContent = () => {
        if (section === AppEditorCfg.SECTION_MAIN) {
            return (<AppCard app={app} save={saveApplication} />);
        }
        if (section === AppEditorCfg.SECTION_DOCS) {
            return (<div>docs</div>);
        }
        if (section === AppEditorCfg.SECTION_TASKS) {
            return (<div>tasks</div>);
        }
    };
    return (
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
            <ApplicationEditorTools />
        </div>
    )

}//end comp