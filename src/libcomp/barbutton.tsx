//src\libcomp\xuicomp\base\barbutton.tsx

import { AppThemifyIcons } from "@/style/appthicons";
import { AppUIButtons } from "@/style/appui";
import { DataConstants } from "@/lib/common/app/dataconstants";
import { BarButtonsConfig } from "@/types/types";
import { useEffect } from "react";
import { TwDaisyUtil } from "@/twdaisy/twdaisyutil";
import { BarButtonsCfg } from "./model/barbuttonscfg";

/*
btn-info 💾  
ti ti-sm ti-write
AppThemifyIcons.TI_EDIT
export const BARCFG_EDITION: BarButtonsConfig = {
    operations: ["delete","edit","save"],
    texts:      ["delete", "edit","save"],
    disabled:   [false, false, true],
    color:      ["btn-info", "btn-success","btn-error"],
    icons:      ["ti-trash","ti-write","ti-save"]
}
*/
export interface BarButtonsIfc {
    onclick: (operation: string) => void;
    barconfig: BarButtonsCfg;
    btnsize?: string;
    iconsize?: string;
    iconscolor?: string;
}
export function BarButtons({ onclick, barconfig, btnsize, iconsize, iconscolor }: BarButtonsIfc) {

    const buttonSize = btnsize ?? "md";
    const iconSize = iconsize ?? "sm";
    const iconColor = iconscolor ?? "icon-color-white";
    const iconStyleBase:string = TwDaisyUtil.addSpace(iconColor).concat("ti ti-").concat(iconSize);

    const renderButton = (key:string, operation:string, disabled: boolean,
                          text:string,color:string, icon?: string|null) => {

        if(disabled){
            return null;
        }
        const onButtonClick = () => {
            onclick(operation);
        };

        const getButtonClass = (color:string):string => {
            let style:string = "btn btn-".concat(buttonSize).concat(" ").concat(color);
            return style;
        };

        const getIconClass= (name:string):string => {
            let style:string = TwDaisyUtil.addSpace(iconStyleBase).concat(name);
            return style;
        };

        return (
            <button key={key} className={getButtonClass(color)}
                    disabled={disabled}
                    onClick={onButtonClick}>
                {icon ? <div className={getIconClass(icon)} /> : null}    
                {text ? text : null}
            </button>
        )
    }

    return (
        <div className="w-auto h-auto flex flex-row gap-3">
            {barconfig.operations.map((op: string, index: number) => (
   
                renderButton(index.toString(),op,
                    barconfig.disabled[index],
                    barconfig.texts[index],
                    barconfig.color[index],
                    barconfig.icons[index])
            ))}
        </div>
    )

}//end component
