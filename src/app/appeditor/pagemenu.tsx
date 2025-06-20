//src\app\appeditor\pagemenu.tsx


import { Desktop } from "@/app_front/desktop/desktop";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { PAGE_EDITOR_PATH } from "../appeditor/page";
import { AppModule } from "@/lib/arquitect/model/appmodule";
import { AppEditorConfig } from "@/app_front/manapplications/appeditor";
import { Section } from "@/lib/arquitect/model/section";


/**
 * Desktop Menu JSX
 * AppEditorConfig.SECTIONS;
 */
export interface AppEditorMenuIfc {
    optcolor:string;
    optactcolor:string;
    optactname:string;    
    options:Section[]
    onselection: (name:string) => void;
}
export default function ApplicationEditorMenu({optcolor,optactcolor,options,optactname,onselection}: AppEditorMenuIfc) {
   
    const renderButton = (key:string,name:string,title:string) => {        
        let buttonStyle: string = "btn btn-md text-md ";
        if (optactname === name) { buttonStyle = buttonStyle.concat("btn-warning");}
        else {buttonStyle = buttonStyle.concat("btn-info");}                
        return (
            <button key={key}
                className={buttonStyle}
                onClick={() => onselection(name)}>
                {title}
            </button>
        )
    }

    return (
        <div className="w-full h-auto  flex flex-col px-2 py-[10px] space-y-3 ">
            {options.map((section, index) => (
                renderButton(index.toString(),section.name,section.title)
            ))}
        </div>
    )

}//end
