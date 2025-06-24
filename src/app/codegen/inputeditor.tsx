//src\app\appeditor\primarybar.tsx

import { useRef, useState } from "react";
import { AppConstants } from "@/app_front/appconstants";
import { renderAlert } from "@/twdaisy/twdaisycomp";
import { AppTheme } from "@/app_front/apptheme";
import { CodeGenCfg } from "./motor/cgcfg";
import CodeGenCard from "./cards/codegencard";
import { InputFiles } from "@/libcomp/inputfiles";



/**
 * JSX Component layout secondary column
 * Application Editor Tools
 */
export interface PageInputEditorProp {
    section:string;
    onfileloaded: (file: File) => void;
}
export default function PageInputEditor({ section,onfileloaded }: PageInputEditorProp) {
    
    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);
    const inputFilesRef = useRef<HTMLInputElement>(null);
    const [code, setCode] = useState<string>(AppConstants.NOT_DEF);

    
    const onFileLoaded = async (name:string,file:unknown) => {
        if(file){
            const code_file:File = file as File;
        }        
    }
        
    const onexport = () => {
        alert("export");
    }

    return (
        <div className={CodeGenCfg.EDITOR_STYLE}>
            <div className={CodeGenCfg.EDITOR_HEADER_STYLE}>
                        <InputFiles name="codefile"
                                    ref={inputFilesRef}                            
                                    formats={CodeGenCfg.TYPESCRIPT_FORMATS}
                                    multiple={false}
                                    onchange={onFileLoaded} />
            </div>
            
            <div className={CodeGenCfg.EDITOR_AREA_STYLE}>
                <textarea className="textarea textarea-primary w-full min-h-screen "
                           placeholder="(not def)" defaultValue={code} />
            </div>

             {(alertMessage !== AppConstants.NOT_DEF) ? renderAlert(alertMessage) : null}
        </div>
    )

}//end comp