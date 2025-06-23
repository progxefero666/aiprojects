//src\app\codegen\page.tsx

"use client";

import { useEffect, useMemo, useState } from "react";
import { AppTheme } from "@/app_front/apptheme";

//page layout jsx components
import PageHeader from "./header";
import PageMainContent from "./pagemain";
import PagePrimaryBar from "./primarybar";
import PageSecondaryBar from "./secondarybar";
import { CodeGenCfg } from "./motor/codegencfg";

/**
 * Page Index JSX Client
 * start command:
 *  npx openapi-typescript-codegen --input http://localhost:8000/openapi.json --output ./src/client --client axios
 *  ManApplicationUtil.getFormEntity
 *  
 *  ApplicationEditor
 *  src\app_front\manapplications\appeditorcfg.ts
 */
export const CODEGEN_PATH: string = "./codegen";

export default function CodeGenerator() {

    const [section, setSection] = useState<string>(CodeGenCfg.SECTION_MAIN.name);
    const chargeSection = (section: string): void => { setSection(section); }

    /*
    useEffect(() => {const init=():void=>{} init();}, []);
    */

    const onfileloaded = async (file: File) => {        
        const file_content = await file.arrayBuffer();
        console.log(file_content);
    }

    return (
        <div id="cont_root" className={AppTheme.LAYOUT_STYLE} >
            <PageHeader onfileloaded = {onfileloaded} />
            <div className={AppTheme.BODY_STYLE}>
                <PagePrimaryBar chargesection={chargeSection}
                    section={section} />
                <PageMainContent section={section} />
                <PageSecondaryBar section={section} />
            </div>
        </div>
    );

}//end 