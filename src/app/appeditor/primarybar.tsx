//src\app\appeditor\primarybar.tsx

import { useState } from "react";
import { Option } from "@/lib/common/model/base/option";
import { AppEditorCfg, AppEditorMessages } from "@/app_front/manapplications/appeditor";
import { Application } from "@/client";
import { AppConstants } from "@/app_front/appconstants";
import TwDaisyMenu from "@/twdaisy/twdaisymenu";
import { AppTheme } from "@/app_front/apptheme";

/**
 * JSX Component layout secondary column
 * Application Editor Tools
 */
export interface PagePrimaryBarProp {
    section: string;
    chargesection: (section:string) => void;
    app?: Application;
}
export default function PagePrimaryBar({chargesection, section, app }: PagePrimaryBarProp) {

    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);

    const loadsection = (name: string): void => {
        chargesection(name);
        if (name === AppEditorCfg.SECTION_MAIN.name) {

        }
        else if (name === AppEditorCfg.SECTION_DOCS.name) {

        }
        else if (name === AppEditorCfg.SECTION_TASKS.name) {

        }
    }

    return (
        <div className="w-full min-h-screen flex flex-col px-2 mb-2">
            <TwDaisyMenu onselection={loadsection}
                options={AppEditorCfg.SECTIONS}
                optactname={AppEditorCfg.ACTIVE_SECTION.name}
                optcolor={AppTheme.MENU_OPT_COLOR}
                optactcolor={AppTheme.MENU_OPT_ACT_COLOR} />
        </div>
    )

}//end comp