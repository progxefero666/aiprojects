//src\twdaisy\twdaisycomp.tsx

import { text } from "stream/consumers";
import { TwDaisyUtil } from "./twdaisyutil";


/**
 * class TwDaisyCompBase 
 * TwDaisyCompBase.getButtonStyle
 */
export class TwDaisyCompBase {

    public static BUTTON_SIZE_DEF: string = "md";

    public static getButtonStyle = (size?: string) => {
        const bsize = size ?? TwDaisyCompBase.BUTTON_SIZE_DEF;
        const style = "btn ".concat("btn-").concat(bsize)
            .concat(" text-").concat(bsize);
        return style;
    }

}//end class

export const renderOption = (key: string,
                            callback: (name: string) => void,
                            name:string, text:string,
                            color:string, size?:string) => {

    let style: string = TwDaisyUtil.addSpace(TwDaisyCompBase.getButtonStyle(size));
    style += color;
    return (
        <button key= { key } className = { style } onClick = {()=> callback(name)}>
            { text }
            </button>
    )

} //end render