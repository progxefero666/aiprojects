//src\libcomp\xuicomp\base\barbutton.tsx


import { BarButtonsCfg } from "./model/barbuttonscfg";
import { renderBarButtons, renderButton, TwDaisyCompBase } from "@/twdaisy/twdaisycomp";

//btn-info 💾  

/**
 * JSX BarButtons
 */
export interface BarButtonsProps {
    onclick: (operation: string) => void;
    barconfig: BarButtonsCfg;
    btnsize?: string;
    iconsize?: string;
    iconscolor?: string;
    classname?: string;
}
export function BarButtons({classname,onclick,barconfig,btnsize,iconsize,iconscolor}:BarButtonsProps) {
    const renderContent = () => (
        renderBarButtons(onclick,barconfig,btnsize??null,iconsize??null,iconscolor??null)
    );
    return classname ? (<div className={classname}>{renderContent()}</div>) 
                     : (renderContent());

}//end component
