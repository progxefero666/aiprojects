//src\app\module\aiprojects\manproyect\page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AppStorage } from "@/app_front/appstorge";

import { ApplicationsService } from "@/client_aidatabase/ApplicationsService";

import { PAGE_EDITOR_PATH } from "@/app/appeditor/page";
import PageHeader from "@/app/home/header";
import { ManagerAplications } from "../app_front/manapplications/manapps";
import { ManCmmCollections } from "@/app_front/manapplications/manappcolls";
import DesktopMenu from "./home/pagemenu";
import { Application } from "@/client/models/Application";
import { AppItemCard } from "./home/cards/appitemcard";
import { showUiPopupConfirm } from "@/libcomp/puconfirm";


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
export default function Desktop() {
    
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

    const onSelectModule = () => {
    
    }

    const onSelectApplication = (app_id: number) => {
        AppStorage.saveApplicationId(app_id);
        router.push(PAGE_EDITOR_PATH);     
    }

    const onDelete = (): void => {
        showUiPopupConfirm("¿confirm delete application?").then(({ confirmed }) => {
            if (confirmed) {
                alert("delete app");     
            }
        });
    }
        
    const onAddApplication = () => {
    
    }

    const renderMainContent = useMemo(() => {
       
        return (
            <ul className="menu w-full rounded-box menu-md space-y-3">
                {listApps.map((item, index) => (
                    <li className="list-row" key={index}>
                        <AppItemCard 
                            app={item}
                            ondelete={onDelete}
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
            <PageHeader onaddapplication={onAddApplication} />

            {/* body */}
            <div className="w-full h-auto grid grid-cols-[17%_65%_17%]">

                {/* column left */}
                <div className="w-full min-h-screen flex flex-col px-2 mb-2">
                    <DesktopMenu />
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