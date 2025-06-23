//src\app\appeditor\header.tsx

import { Search } from "@/libcomp/search";
import { AppThemifyIcons } from "@/style/appthicons";
import { ButtonOld } from "@/libcomp/button_old";
import { Button } from "@/libcomp/button";
import { AppConstants, AppTexts, AppUiConst } from "@/app_front/appconstants";
import { AppTheme } from "@/app_front/apptheme";


/**
 * Ai Manager Projects Header
 */
export interface PageHeaderProp {
     ontest?: () => void;
}
export default function PageHeader({ ontest }: PageHeaderProp) {

    const maxLen: number = 50;
    const onSearchSubmit = (value:string): void => {
    }

    const onButtonClick = (operation?: string) => {
        
    };

    return (

        <div className={AppTheme.LAYOUT_HEADER_STYLE}>

            {/*column left */}
            <div className="w-full flex flex-row items-center px-2 top-2">
                <div className="flex-1 flex items-center text-white text-2xl translate-y-[-4px]">
                    Code Gen
                </div>
                <div>                   
                    <Button icon={AppUiConst.ICON_RUN}
                            operation={AppConstants.NAV_BACK}                            
                            onclick={onButtonClick}  />                           
                </div>
            </div>

            {/*column center */}
            <div className="w-full flex flex-row pl-[6px]">
                <div className="w-auto mr-[12px]">
                    <Button text={AppTexts.RUN} 
                            icon={AppUiConst.ICON_RUN}
                            onclick={onButtonClick}  />               
                </div>
                <div className="w-[26%] flex flex-items-center" >
                    <Search placeholder="find" maxlen={maxLen}
                               onsubmit={onSearchSubmit}/>
                </div>
            </div>

            {/* column right */}
            <div className="w-full flex flex-row">
                tools
            </div>

        </div>
    )

}//end
