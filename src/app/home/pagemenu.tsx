//src\app\home\pagemenu.tsx

import { Search } from "@/libcomp/search";
import { Desktop } from "@/app_front/desktop/desktop";
import { useEffect, useMemo, useState } from "react";

import { useRouter } from "next/navigation";
import { AppStorage } from "@/app_front/appstorge";
import { PAGE_EDITOR_PATH } from "../appeditor/page";
import { AppModule } from "@/lib/arquitect/model/appmodule";


/**
 * Desktop Menu JSX
 */
export interface DesktopMenuIfc {
    defmodulename?: () => void;
}
export default function DesktopMenu({ defmodulename }: DesktopMenuIfc) {
    const router = useRouter();

    const [modules, setModules] = useState<AppModule[]>(Desktop.MODULES);
    const [actmodule, setActiveModule] = useState<AppModule>(Desktop.ACTIVE_MOD);

    useEffect(() => {

    }, []);

    const onModuleSelected = (name: string) => {
        if (name === Desktop.MOD_AIAPPS.name) {
            router.push(PAGE_EDITOR_PATH);
        }
        if (name === Desktop.MOD_CHATBOT.name) {
            router.push("./aichatbot"); 
        }
        if (name === Desktop.MOD_SERVICES.name) {
            router.push("./manservices"); 
        }
        else if (name === Desktop.MOD_SERVERS.name || name === Desktop.MOD_AGENTS.name ) {
            //AppStorage.saveApplicationId(app_id);
            router.push("./manaielems"); 
        }
    };


    const renderButton = (key: string, module: AppModule) => {

        let buttonColor: string = "btn-primary";
        if (actmodule.name === module.name) { buttonColor = "btn-warning"; }
        else { buttonColor = "btn-info"; }
        const buttonStyle: string = "btn btn-md text-md ".concat(buttonColor);

        return (
            <button key={key}
                className={buttonStyle}
                onClick={() => onModuleSelected(module.name)}>
                {module.title}
            </button>
        )
    }


    return (
        <div className="w-full h-auto  flex flex-col px-2 py-[10px] space-y-3 ">
            {modules.map((module, index) => (
                renderButton(index.toString(), module)
            ))}
        </div>
    )

}//end
