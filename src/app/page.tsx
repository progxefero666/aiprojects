//src\app\module\aiprojects\manproyect\page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { ManagerAplications } from "../app_front/manapplications/manapps";
import { useRouter } from "next/navigation";
import { useClientReady } from "@/lib/react/hook/useclientready";
import { AppStorage } from "@/app_front/appstorge";
import AiManagerProjectsHeader from "./home/pageheader";
import { ManCmmCollections } from "@/app_front/manapplications/manappcolls";
import { AppIntroCard } from "@/app_front/comp/appcard";
import { Application } from "@/client_old/models/Application"
import { ApplicationsService } from "@/client_aidatabase/ApplicationsService";
import { AppElementCard } from "@/app/home/appelementcard";
import { PAGE_EDITOR_PATH } from "./appeditor/page";

/*
npx openapi-typescript-codegen --input http://localhost:8000/openapi.json --output ./src/client --client axios
node fix-dates.js
*/
/*
ManApplicationUtil.getFormEntity()
const [progLangs, setProgLangs] = useState<string[]>([]);
const [appTypes, setAppTypes] = useState<string[]>([]);
const [listAppsNames, setListAppsNames] = useState<string[]>([]);
const appColls: ManCmmCollections = new ManCmmCollections();
const manApps: ManagerAplications = new ManagerAplications();     
setProgLangs(appColls.codelangsNames);
setAppTypes(appColls.apptypesNames);
setListApps(manApps.listapps);
setListAppsNames(manApps.listappsNames);
if(manApps.appSel){
    setAppSelected(manApps.appSel);
}    
*/

/**
 * Main Page JSX: Applications Manager
 * start command:
 *  npx openapi-typescript-codegen --input http://localhost:8000/openapi.json --output ./src/client --client axios
 */
export default function PageIndex() {
    
    const router = useRouter();
    const [listApps, setListApps] = useState<Application[]>([]);

    useEffect(() => {

        const init = async () => {
            try {
                const data_listapps = await ApplicationsService.getAll();
                setListApps(data_listapps);
            }
            catch (error) {
                console.error('List app loaded error:', error);
            }
        };
        init();
    }, []);

    const onSelectApplication = (app_id: number) => {
        AppStorage.saveApplicationId(app_id);
        router.push(PAGE_EDITOR_PATH);     
    }

    const onAddApplication = () => {
    
    }


    const renderMainContent = useMemo(() => {
       
        return (
            <ul className="menu w-full rounded-box menu-md space-y-3">
                {listApps.map((item, index) => (
                    <li className="list-row" key={index}>
                        <AppElementCard
                            app={item}
                            onselection={onSelectApplication}
                            iconname="file"
                            iconsize={undefined}
                            iconcolor={undefined} />
                    </li>
                ))}
            </ul>
        );
    }, [listApps]);

    return (
        <div id="cont_root" className="w-full h-auto bg-gray-900 " >

            {/* header */}
            <AiManagerProjectsHeader onaddapplication={onAddApplication} />

            {/* body */}
            <div className="w-full h-auto grid grid-cols-[17%_65%_17%]">

                {/* column left */}
                <div className="w-full min-h-screen flex flex-col px-2 mb-2">
                    <div className="w-full h-auto">
                        Btn New
                    </div>
                </div>

                {/* column center */}
                <div className="w-full h-auto">
                    <div className="main_monitor w-full min-h-screen rounded-lg">
                        {renderMainContent}
                    </div>
                </div>

                {/* column right */}
                <div className="w-full min-h-screen flex-col p-2">
                    Right Panel
                </div>

            </div>

        </div>
    );

}//end 