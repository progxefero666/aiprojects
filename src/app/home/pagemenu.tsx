//src\app\home\pagemenu.tsx

//src\app\module\aiprojects\manprojects\pageheader.tsx


import { Search } from "@/libcomp/search";
import { AppThemifyIcons } from "@/style/appthicons";
import { XButton } from "@/libcomp/button";
import { AppModule } from "@/lib/common/arquitect/model/appmodule";
import { Desktop } from "@/app_front/desktop/desktop";
import { useEffect, useMemo, useState } from "react";
import { DataConstants } from "@/lib/common/app/dataconstants";


/**
 * Desktop Menu JSX
 */
export interface DesktopMenuIfc {
    onselectmodule?: () => void;
}
export default function DesktopMenu({ onselectmodule }: DesktopMenuIfc) {

    const [modules, setModules] = useState<AppModule[]>(Desktop.MODULES);
    const [actmodule, setActiveModule] = useState<AppModule>(Desktop.ACTIVE_MOD);

    useEffect(() => {

    }, []);

    const onModuleSelected = (name: string) => {
        alert(name);
        let modPath: string = DataConstants.UNDEFINED;

        if (name === Desktop.MOD_AIAPPS.name) {
            modPath = "./appeditor";
        }
        if (name === Desktop.MOD_CHATBOT.name) {
            modPath = "./aichatbot";
        }
        if (name === Desktop.MOD_SERVICES.name) {
            modPath = "./manservices";
        }
        else if (name === Desktop.MOD_SERVERS.name || name === Desktop.MOD_AGENTS.name ) {
            modPath = "./manaielements";
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
