//src\twdaisy\twdaisycomp.tsx

import { text } from "stream/consumers";
import { TwDaisyUtil } from "./twdaisyutil";


/**
 * class TwDaisyCompBase 
 * TwDaisyCompBase.getButtonStyle
 */
export class TwDaisyCompBase {

    public static BUTTON_SIZE_DEF: string = "md";
    public static BUTTON_COLOR_DEF: string = "btn-primary";

    public static ICON_COLOR_DEF: string = "icon-color-white";
    public static ICON_SIZE_DEF: string = "sm";
    
    //icon-color-white1
    public static ICON_STYLE_BASE:string = TwDaisyUtil
        .addSpace(TwDaisyCompBase.ICON_COLOR_DEF)
        .concat("ti ti-").concat(TwDaisyCompBase.ICON_SIZE_DEF);

    public static getButtonStyle = (size:string|null,color:string|null):string => {
        const size_apply:string = size ?? TwDaisyCompBase.BUTTON_SIZE_DEF;
        const color_apply:string = color ?? TwDaisyCompBase.BUTTON_COLOR_DEF;     

        const style:string = "btn ".concat("btn-").concat(size_apply)
                            .concat(" text-").concat(size_apply)
                            .concat(" ").concat(color_apply);
        return style;
    }

    public static getIconStyle = (name:string,size:string|null,color:string|null):string => {
        const size_apply:string  = size ?? TwDaisyCompBase.ICON_SIZE_DEF;
        const color_apply:string = color ?? TwDaisyCompBase.ICON_COLOR_DEF;       
        const style:string = TwDaisyUtil.addSpace(color_apply)
                            .concat("ti ti-").concat(size_apply)
                            .concat(" ").concat(name);
        return style;         
    }

}//end class

export const renderOption = (key: string,
                            callback: (name: string) => void,
                            name:string, text:string,
                            color:string, size?:string) => {
 
    const size_apply:string|null  = size ?? null;

    let style: string = TwDaisyUtil.addSpace(TwDaisyCompBase.getButtonStyle(size_apply,color));
    style += color;
    return (
        <button key= { key } className = { style } onClick = {()=> callback(name)}>
            { text }
            </button>
    )

} //end render