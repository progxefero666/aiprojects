//src\libcomp\types\interfaces.ts

import { BarButtonsCfg } from "../model/barbuttonscfg";


export interface BarButtonsProps {
    onclick: (operation: string) => void;
    barconfig: BarButtonsCfg;
    btnsize?: string;
    iconsize?: string;
    iconscolor?: string;
    classname?: string;
}