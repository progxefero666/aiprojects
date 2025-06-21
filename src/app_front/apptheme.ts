//src\app_front\apptheme.ts

import { AppConstants } from "./appconstants";

/**
 * Tailwind and DaisyUI lib
 * Themes with DaisyUI
 * Class for define compose class
 * class AppConstants.MODE_EDITION
 */
export class AppTheme {

    public static readonly LAYOUT_COLOR: string = "bg-gray-900";

    //public static readonly ROOT_STYLE:string = AppTheme."w-full h-auto bg-gray-900 ";
    //public static readonly ACT_OPEN:string = "bg-base-100 ";
    //public static readonly ACT_SAVE:string = "save";



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