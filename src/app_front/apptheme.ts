//src\app_front\apptheme.ts

import { AppConstants } from "./appconstants";

/**
 * Tailwind and DaisyUI lib
 * Themes with DaisyUI
 * Class for define compose class
 * class AppConstants.MODE_EDITION
 */


/* in globals.css
.main_monitor {
    width: 100%;
    height: auto;
    background-color: #2d323c;
    padding: 8px 10px 8px 10px;
    padding-inline:10px ;
    border-radius: 16px;
    box-sizing: border-box;
    box-shadow: -1px -1px 5px 7px rgba(48, 46, 46, 0.75) inset;
}
    <div class="rounded-sm ..."></div>
    <div class="rounded-md ..."></div>
    <div class="rounded-lg ..."></div>
    <div class="rounded-xl ..."></div>
*/

export class AppTheme {

    public static readonly LAYOUT_COLOR: string = "bg-gray-900";
    public static readonly LAYOUT_STYLE: string = "w-full h-auto ".concat(AppTheme.LAYOUT_COLOR);


    public static readonly BODY_COLOR: string = "bg-base-100";

    public static readonly BODY_MONITOR_COLOR: string = "main_monitor w-full min-h-screen rounded-lg"

    //rounded-lg border border-sky-500
    //text-white text-lg
    // border border-zinc-500
    //public static readonly ROOT_STYLE:string = AppTheme."w-full h-auto bg-gray-900 ";




}//end class

/**
 * AppThemeUtil
 */
export class AppThemeUtil {

    static addSpace(str: string): string {
        return str.endsWith(AppConstants.CHAR_SPACE) ? str : str + AppConstants.CHAR_SPACE;
    }

    static join(style_0: string, style_1: string): string {
        return AppThemeUtil.addSpace(style_0).concat(style_1);;
    }

    static compose(styles: string[]): string {
        let result: string = "";
        for (let idx=0;idx<styles.length; idx++) {
            if(idx==0){result = styles[idx];            }
            else      {result = AppThemeUtil.join(result,styles[idx]);}
        }
        return result;
    }

}//end class