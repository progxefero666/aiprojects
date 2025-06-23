//src\app\module\aiprojects\manproyect\page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AppStorage } from "@/app_front/appstorge";
import { ApplicationsService } from "@/client/service/ApplicationsService";
import { Application } from "@/client/models/Application";
import { AppItemCard } from "./home/cards/appitemcard";
import { showUiPopupConfirm } from "@/libcomp/puconfirm";
import { AppTheme } from "@/app_front/apptheme";
import { PAGE_EDITOR_PATH } from "@/app/appeditor/page";
import PageHeader from "@/app/home/header";
import DesktopMenu from "./home/pagemenu";
//import { ManagerAplications } from "../app_front/manapplications/manapps";
//import { ManCmmCollections } from "@/app_front/manapplications/manappcolls";


/**
 *  start: npx openapi-typescript-codegen --input http://localhost:8000/openapi.json --output ./src/client --client axios
 *        npx openapi-typescript-codegen --input http://164.90.225.196:8000/openapi.json --output ./src/client --client axios
 *       node fix-dates.js
 * 
 *  Main Page JSX: Applications Manager
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

    const renderMainContent = () => {
        return (
            <div className="w-full space-y-2">
                {listApps.map((item, index) => (
                    <div key={index}>
                        <AppItemCard
                            app={item}
                            ondelete={onDelete}
                            onselection={onSelectApplication}
                            iconname="file"
                            iconsize={undefined}
                            iconcolor={undefined} />
                    </div>
                ))}
            </div>

        );
    }


    return (
        <div id="cont_root" className={AppTheme.LAYOUT_STYLE} >

            {/* header */}
            <PageHeader onaddapplication={onAddApplication} />

            {/* body */}
            <div className="w-full h-auto grid grid-cols-[17%_65%_17%]">

                {/* column left */}
                <div className="w-full min-h-screen flex flex-col px-2 mb-2">
                    <DesktopMenu />
                </div>

                {/* column center */}
                <div className={AppTheme.BODY_MONITOR_STYLE}>
                    {renderMainContent()}
                </div>

                {/* column right */}
                <div className="w-full min-h-screen flex flex-col p-2">
                    Right Panel
                </div>

            </div>

        </div>
    );

}//end

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

