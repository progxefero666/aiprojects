//src\libcomp\xuicomp\base\barbutton.tsx

import { TwDaisyUtil } from "@/twdaisy/twdaisyutil";
import { BarButtonsCfg } from "./model/barbuttonscfg";
import { TwDaisyCompBase } from "@/twdaisy/twdaisycomp";

//btn-info 💾  

export interface BarButtonsIfc {
    onclick: (operation: string) => void;
    barconfig: BarButtonsCfg;
    btnsize?: string;
    iconsize?: string;
    iconscolor?: string;
}
export function BarButtons({ onclick, barconfig, btnsize, iconsize, iconscolor }: BarButtonsIfc) {

    const iconSize = iconsize ?? TwDaisyCompBase.ICON_SIZE_DEF;
    const iconColor = iconscolor ?? TwDaisyCompBase.ICON_COLOR_DEF;

    const renderButton = (key:string, operation:string, disabled: boolean, visibled: boolean,
                          text:string, color:string, icon?: string|null) => {

        const buttonSize:string = btnsize ?? TwDaisyCompBase.BUTTON_SIZE_DEF;


        if(!visibled){return null;}
        const onButtonClick = () => {onclick(operation);};
        return (
            <button key={key} className={TwDaisyCompBase.getButtonStyle(buttonSize,color)}
                    disabled={disabled}
                    onClick={onButtonClick}>
                {icon ? <div className={TwDaisyCompBase.getIconStyle(icon,iconSize,iconColor)} /> : null}
                {text ? text : null}
            </button>
        )
    }

    return (
        <div className="w-auto h-auto flex flex-row gap-3">
            {barconfig.operations.map((op: string, index: number) => (
   
                renderButton(index.toString(),op,
                    barconfig.disabled[index],
                    barconfig.visibled[index],
                    barconfig.texts[index],
                    barconfig.color[index],
                    barconfig.icons[index])
            ))}
        </div>
    )

}//end component
