//src\libcomp\xuicomp\base\barbutton.tsx

import { AppThemifyIcons } from "@/style/appthicons";
import { AppUIButtons } from "@/style/appui";
import { DataConstants } from "@/lib/common/app/dataconstants";
import { BarButtonsConfig } from "@/types/types";
import { useEffect } from "react";

export interface BarButtonsIfc {
    onclick: (operation: string) => void;
    barconfig: BarButtonsConfig;
    btnsize?: string;
    iconsize?: string;
    iconscolor?: string;
}
export function BarButtons({ onclick, barconfig, btnsize, iconsize, iconscolor }: BarButtonsIfc) {

    const buttonSize = btnsize ?? "sm";
    const iconSize = iconsize ?? "sm";
    const iconColor = iconscolor ?? "white";

    useEffect(() => {

    }, []);

    const renderButton = (key:string,operation: string, disabled: boolean,
                          text: string, color: string, icon?: string) => {
        const onButtonClick = () => {
            onclick(operation);
        };

        //btn-info
        const getClassName = (color:string):string => {
            let style:string = "btn btn-sm ".concat(color);
            return style;
        };

        if (!icon) {
            return (
                <button key={key}
                    className={getClassName(color)}
                    disabled={disabled}
                    onClick={onButtonClick}>
                    {text ? text : null}
                </button>
            )
        }
        else {
            return (
                <button  key={key}
                    className={getClassName(color)}
                    disabled={disabled}
                    onClick={onButtonClick}>
                    {text ? text : null}
                </button>
            )
        }
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
