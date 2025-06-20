//src\app\appeditor\page.tsx

"use client";

import { useEffect, useMemo, useState } from "react";

import { useRouter } from "next/navigation";
import { AppStorage } from "@/app_front/appstorge";
import { ManCmmCollections } from "@/app_front/manapplications/manappcolls";
import { ApplicationsService } from "@/client_aidatabase/ApplicationsService";

import PageHeader from "./header";
import { ApplicationCard } from "../home/appformcard";

import { DataConstants } from "@/lib/common/app/dataconstants";
import { AppEditorConfig } from "@/app_front/manapplications/appeditor";
import TwDaisyMenu from "@/twdaisy/twdaisymenu";
import { Application } from "@/client/models/Application";
import ApplicationEditorTools from "@/app/appeditor/paneltools";
import { Option } from "@/lib/common/model/base/option";
/**
 * Page Index JSX Client
 * start command:
 *  npx openapi-typescript-codegen --input http://localhost:8000/openapi.json --output ./src/client --client axios
 *  ManApplicationUtil.getFormEntity
 */

export const PAGE_EDITOR_PATH: string = "./appeditor";

export default function ApplicationEditor() {
    //const router = useRouter();

    //collections
    const [progLangs, setProgLangs] = useState<string[]>([]);
    const [appTypes, setAppTypes] = useState<string[]>([]);

    //application
    const [appId, setAppId] = useState<number>(-1);
    const [app, setApp] = useState<Application | null>(null);
    const [section, setSection] = useState<Option>(AppEditorConfig.ACTIVE_SECTION);
    const onTest = () => { }

    useEffect(() => {
        const app_id: number = AppStorage.readApplicationId()
        setAppId(app_id);
        const init = async () => {
            const appColls: ManCmmCollections = new ManCmmCollections();
            const app_load: Application = await ApplicationsService.getById(app_id);
            setProgLangs(appColls.codelangsNames);
            setAppTypes(appColls.apptypesNames);
            setApp(app_load);
        };
        init();
    }, []);

    const loadsection = (name:string): void => {
        let act_section:Option|null = null;

        if (name === AppEditorConfig.SECTION_MAIN.name) {
            act_section = AppEditorConfig.SECTION_MAIN;
        }
        else if (name === AppEditorConfig.SECTION_DOCS.name) {
            act_section = AppEditorConfig.SECTION_DOCS;
        }
        else if (name === AppEditorConfig.SECTION_TASKS.name) {
            act_section = AppEditorConfig.SECTION_TASKS;
        }
        if(act_section){
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
        if(section === AppEditorConfig.SECTION_MAIN) {
            return (<ApplicationCard app={app} />);
        }
        if(section === AppEditorConfig.SECTION_DOCS) {
            return (<ApplicationCard app={app} />);
        }
        if(section === AppEditorConfig.SECTION_TASKS) {
            return (<ApplicationCard app={app} />);
        }         
    };

    return (
        <div id="cont_root" className="w-full h-auto bg-gray-900 " >

            {/* header */}
            <PageHeader ontest={onTest} />

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

        </div>
    );

}//end 