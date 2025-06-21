//src\libcomp\xuicomp\base\barbutton.tsx


import { BarButtonsCfg } from "./model/barbuttonscfg";
import { renderButton, TwDaisyCompBase } from "@/twdaisy/twdaisycomp";

//btn-info 💾  

export interface BarButtonsIfc {
    onclick: (operation: string) => void;
    barconfig: BarButtonsCfg;
    btnsize?: string;
    iconsize?: string;
    iconscolor?: string;
}
export function BarButtons({ onclick, barconfig, btnsize, iconsize, iconscolor }: BarButtonsIfc) {

    return (
        <div className={TwDaisyCompBase.BAR_ROW_STYLE}>
            {barconfig.operations.map((op: string, index: number) => (
                renderButton(index.toString(),
                             op,onclick,
                             btnsize??TwDaisyCompBase.BUTTON_SIZE_DEF,
                             iconsize??TwDaisyCompBase.ICON_SIZE_DEF,
                             iconscolor??TwDaisyCompBase.ICON_COLOR_DEF,
                             barconfig.disabled[index],
                             barconfig.visibled[index],
                             barconfig.texts[index],                             
                             barconfig.color[index],
                             barconfig.icons[index])
            ))}
        </div>
    )

}//end component
