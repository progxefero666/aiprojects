//src\app\appeditor\page.tsx

"use client";

import { useEffect, useMemo, useState } from "react";

import { useRouter } from "next/navigation";
import { useClientReady } from "@/lib/react/hook/useclientready";
import { AppStorage } from "@/app_front/appstorge";
import AiManagerProjectsHeader from "../home/pageheader";
import { ManCmmCollections } from "@/app_front/manager/manappcolls";
import { AppIntroCard } from "@/app_front/comp/appcard";
import { Application } from "@/client_old/models/Application"
import { ApplicationsService } from "@/client_aidatabase/ApplicationsService";
import { AppElementCard } from "@/app/home/appelementcard";
import AppEditorHeader from "./pageheader";
import { AppEditCard } from "../home/appeditcard";
import { useAppReady } from "@/app_front/hooks/useappready";

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

    if (!app) {
        return <div>Loading...</div>;
    }

    const renderMainContent = () => {
        return (
            <div className="w-full h-auto py-2 px-2">
                <AppEditCard app={app} />
            </div>

        );
    };

    return (
        <div id="cont_root" className="w-full h-auto bg-gray-900 " >

            {/* header */}
            <AppEditorHeader ontest={onTest} />

            {/* body */}
            <div className="w-full h-auto grid grid-cols-[17%_65%_17%]">

                {/* column left */}
                <div className="w-full min-h-screen flex flex-col px-2 mb-2">
                    <div className="w-full h-auto">
                        Btn New
                    </div>
                </div>

                {/* column center */}
                <div className="main_monitor w-full min-h-screen rounded-lg">
                    {renderMainContent()}
                </div>

                {/* column right */}
                <div className="w-full min-h-screen flex-col p-2">
                    Right Panel
                </div>

            </div>

        </div>
    );

}//end 