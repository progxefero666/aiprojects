//src\libcomp\button.tsx

import { TwDaisyCompBase } from "@/twdaisy/twdaisycomp"




/**
 * Component Input List
 *  author: xefero
 */
/*
            disabled={disabled}
            onClick={() => onclick(operation)}>
            {icon ?
                <div className={TwDaisyCompBase.getIconStyle(
                    icon,
                    iconsize ?? TwDaisyCompBase.ICON_SIZE_DEF,
                    iconcolor ?? TwDaisyCompBase.ICON_COLOR_DEF)} />
                : null}
            {text ? text : null}

*/
export interface ButtonProps {
    key?: string,
    visibled?: boolean,
    disabled?: boolean,
    operation?: string,
    onclick: (operation?: string) => void,
    text?: string,
    icon?: string,
    size?: string,
    color?: string,
    iconsize?: string | null,
    iconcolor?: string | null,
}
export const Button = ({ key, visibled, disabled, operation, onclick,
                         text, icon, size, color, iconsize, iconcolor }: ButtonProps) => {

    const operationId:string = operation ?? "undefined";
    const getButtonStyle = () => {
        return TwDaisyCompBase.getButtonStyle(size ?? TwDaisyCompBase.BUTTON_SIZE_DEF, color!);
    }

    const getIconStyle = () => {
        return TwDaisyCompBase.getIconStyle(icon!,
                                    iconsize ?? TwDaisyCompBase.ICON_SIZE_DEF,
                                    iconcolor ?? TwDaisyCompBase.ICON_COLOR_DEF);
    }

    if (!visibled) {return null;}

    return (
        
        <button key={key} disabled={disabled} 
                className = {getButtonStyle()}                 
                onClick={() => onclick(operationId)}>
            {icon ? <span className={getIconStyle()} />:null}
            {text ? text : null}
        </button>
    )

}//end comp