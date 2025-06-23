//src\app\appeditor\cards\appcard.tsx

import React, { useEffect, useRef, useState } from "react";
import { AppThemifyIcons } from "@/style/appthicons";

import { FieldWrapper } from "@/libcomp/fieldwrapper";
import { BarButtons } from "@/libcomp/barbutton";
import { Application } from "@/client/models/Application";
import { ButtonOld } from "@/libcomp/button_old";

import { ProgLangCodeService } from "@/client/service/ProglanguagesService";
import { ApptypesService } from "@/client/service/ApptypesService";


import { InputCheck } from "@/libcomp/inputcheck";
import { AppDef } from "@/app_front/manapplications/applicationdef";
import { InputText } from "@/libcomp/inputtext";
import { InputSelect } from "@/libcomp/inputselect";


import { MdPreview } from 'md-editor-rt';
import 'md-editor-rt/lib/preview.css';
import 'md-editor-rt/lib/style.css';
import 'md-editor-rt/lib/preview.css';
import { BarButtonsCfg } from "@/libcomp/model/barbuttonscfg";
import { AppConstants } from "@/app_front/appconstants";
import { BARCFG_EXPORT, BARCFG_EDITION } from "@/app_front/uimodel/uimodelbars";
import { AppTheme } from "@/app_front/apptheme";
import { OutputText } from "@/libcomp/ouputtext";
import { Button } from "@/libcomp/button";

const style_component: string = "w-full flex flex-col bg-base-100 p-[10px] rounded-lg border border-zinc-500";
const style_header: string = "w-full h-auto flex flex-row items-center justify-between rounded-lg border border-sky-500";
const style_header_title: string = "flex flex-row items-center pl-[6px] text-white text-xs flex-1";

const style_title: string = "flex items-center flex-row ml-[12px] text-white text-lg flex-1";
const style_barbuttons: string = "h-auto mr-[6px] my-[6px] flex justify-end";

/**
 * src\app_front\manapplications\appeditorcfg.ts
 */
export interface CodeGenCardProp {  
    code: string;
    onexport?: (code:string) => void;
}
export default function PageHeader({code,onexport}: CodeGenCardProp) {
    //useEffect(() => {const init=()=>{};init();},[]);
    const [barConfig, setBarConfig] = useState<BarButtonsCfg>(BARCFG_EXPORT);
    const [collapse, setCollapse]   = useState<boolean>(false);    
    const onCollapse = () => {setCollapse(!collapse)};
    
    const onClick = (opId?:string) => {};

    const renderMainContent = () => {
        return (
            <div className={AppTheme.CARD_DATA_STYLE}>
                <p>{code}</p>
            </div>
        )
    };

    const renderHeader = () => {
        return (
            <div className={style_header}>
                {/* header title */}
                <div className={style_header_title}>
                    <div>
                        {collapse ?
                            <Button onclick={onCollapse}
                                    iconcolor="white"
                                    icon={AppThemifyIcons.TI_ARROW_DOWN}
                                iconsize="xs" />
                            :
                            <ButtonOld callback={onCollapse}
                                iconcolor="red" iconsize="xs"
                                iconname={AppThemifyIcons.TI_ANGLE_UP} />
                        }
                    </div>
                    <div className={style_title}>
                        <p className={AppTheme.TEXT_H3_SIZE}>Result</p>                                  
                    </div>
                </div>

                {/* headermbuttons */}
                <BarButtons classname={style_barbuttons}
                            barconfig={barConfig}
                            onclick={onClick} />
            </div>
        )
    };

    return (
        <div className={style_component}>
            {renderHeader()}
            {!collapse ? renderMainContent() : null}
        </div>
    )

} //end component
