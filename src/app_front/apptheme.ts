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

        //rounded-lg border border-sky-500
    //text-white text-lg
    // border border-zinc-500
    //public static readonly ROOT_STYLE:string = AppTheme."w-full h-auto bg-gray-900 ";
*/

//AppTheme.LIST_IOTEXT_STYLE
export class AppTheme {

    public static readonly LAYOUT_COLOR: string = "bg-gray-900";
    public static readonly LAYOUT_STYLE: string = "w-full h-auto ".concat(AppTheme.LAYOUT_COLOR);

    public static readonly BODY_COLOR: string = "bg-base-100";
    public static readonly BODY_MONITOR_STYLE: string = "main_monitor w-full min-h-screen rounded-lg"

    public static readonly TEXT_BASE_COLOR: string = "text-white";
    public static readonly TEXT_BASE_SIZE: string   = "text-base";

    public static readonly TEXT_SMALL_COLOR: string = "text-white";
    public static readonly TEXT_SMALL_SIZE: string  = "text-sm";

    public static readonly TEXT_BIG_COLOR: string   = "text-white";
    public static readonly TEXT_BIG_SIZE: string    = "text-lg";

    public static readonly TEXT_H1_SIZE: string   = "text-4xl";
    public static readonly TEXT_H2_SIZE: string   = "text-3xl";
    public static readonly TEXT_H3_SIZE: string   = "text-2xl";
    public static readonly TEXT_H4_SIZE: string   = "text-xl";
    public static readonly TEXT_H5_SIZE: string   = "text-lg";

    public static readonly TEXT_H1_COLOR: string   = "text-white";
    public static readonly TEXT_H2_COLOR: string   = "text-white";
    public static readonly TEXT_H3_COLOR: string   = "text-white";
    public static readonly TEXT_H4_COLOR: string   = "text-white";
    public static readonly TEXT_H5_COLOR: string   = "text-white";

    public static readonly MENU_OPT_COLOR: string = "btn-accent";
    public static readonly MENU_OPT_ACT_COLOR: string = "btn-warning";

    public static readonly CARD_BORDER_COLOR: string = "border-zinc-500";
    public static readonly CARD_HEADER_BORDER_COLOR: string = "border-sky-500";

    public static readonly CARD_STYLE: string 
        ="w-full flex flex-col bg-base-100 border border-zinc-500 rounded-lg p-2";

    public static readonly CARD_HEADER_BAR_STYLE: string 
        = "w-full h-auto grid grid-cols-2 auto-cols-max  rounded-lg border border-sky-500";

    public static readonly CARD_HEADER_STYLE: string =
        "flex flex-row items-center pl-[6px] text-white text-xs"

    public static readonly CARD_TITLE_STYLE: string 
        = "w-full flex items-center flex-row ml-[12px] text-white text-lg";

    public static readonly CARD_DATA_STYLE: string ="w-full h-auto p-2 rounded-md";

    public static readonly LIST_IOTEXT_STYLE: string = "w-full h-auto flex flex-col space-y-3 mb-4";
    

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