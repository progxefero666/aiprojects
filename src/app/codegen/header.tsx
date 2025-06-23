//src\app\appeditor\header.tsx

import { Search } from "@/libcomp/search";
import { AppThemifyIcons } from "@/style/appthicons";
import { ButtonOld } from "@/libcomp/button_old";
import { Button } from "@/libcomp/button";
import { AppConstants, AppTexts, AppUiConst } from "@/app_front/appconstants";
import { AppTheme } from "@/app_front/apptheme";
import { InputFiles } from "@/libcomp/inputfiles";
import { useRef } from "react";
import { CodeGenCfg } from "./motor/codegencfg";


/**
 * Ai Manager Projects Header
 */
export interface PageHeaderProp {
     onfileloaded: (file: File) => void;
}
export default function PageHeader({ onfileloaded }: PageHeaderProp) {
    const inputFilesRef = useRef<HTMLInputElement>(null);

    const maxLen: number = 50;
    const onSearchSubmit = (value:string): void => {
    }

    const onButtonClick = (operation?: string) => {
        
    };
    
    const onFileLoaded = async (name:string,file:unknown) => {
        if(file){
            onfileloaded(file as File);
        }        
    }

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

            {/*column center classname="hidden" */}
            <div className="w-full flex flex-row pl-[6px]">
                
                <InputFiles name="codefile"
                            ref={inputFilesRef}                            
                            formats={CodeGenCfg.TYPESCRIPT_FORMATS}
                            multiple={false}
                            onchange={onFileLoaded} />

                <div className="w-auto ml-[12px] mr-[12px]">
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
