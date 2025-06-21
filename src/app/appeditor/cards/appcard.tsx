//src\app\appeditor\cards\appcard.tsx

import React, { useEffect, useRef, useState } from "react";
import { AppThemifyIcons } from "@/style/appthicons";

import { FieldWrapper } from "@/libcomp/fieldwrapper";
import { BarButtons } from "@/libcomp/barbutton";
import { Application } from "@/client/models/Application";
import { XButton } from "@/libcomp/button";

import { ProgLangCodeService } from "@/client_aidatabase/ProglanguagesService";
import { ApptypesService } from "@/client_aidatabase/ApptypesService";


import { InputCheck } from "@/libcomp/inputcheck";
import { AppDef } from "@/app_front/manapplications/applicationdef";
import { InputText } from "@/libcomp/inputtext";
import { InputSelect } from "@/libcomp/inputselect";


import { MdPreview } from 'md-editor-rt';
import 'md-editor-rt/lib/preview.css';
import 'md-editor-rt/lib/style.css';
import 'md-editor-rt/lib/preview.css';
import { BarButtonsCfg } from "@/libcomp/model/barbuttonscfg";
import { AppConstants } from "@/app_front/appconstants";
import { BARCFG_EDITION } from "@/app_front/uimodel/uimodelbars";

const style_component: string = "w-full flex flex-col bg-base-100 p-[10px] rounded-lg border border-zinc-500";
const style_header: string = "w-full h-auto flex flex-row items-center justify-between rounded-lg border border-sky-500";
const style_header_title: string = "flex flex-row items-center pl-[6px] text-white text-xs flex-1";

const style_title: string = "flex items-center flex-row ml-[12px] text-white text-lg flex-1";
const style_barbuttons: string = "h-auto mr-[6px] my-[6px] flex justify-end";

/**
 * src\app_front\manapplications\appeditorcfg.ts
 */
export interface AppCardProp {  
    app: Application;
    save: (app:Application) => void;
    iconname?: string;
    iconcolor?: string;
    iconsize?: string;
}
export function AppCard({app,save,iconname,iconsize,iconcolor}: AppCardProp) {

    const [barConfig, setBarConfig] = useState<BarButtonsCfg>(BARCFG_EDITION);
    const [mode,setMode]           = useState<string>(AppConstants.MODE_READONLY);
    const [collapse, setCollapse]   = useState<boolean>(false);    
    const [disabled, setDisabled]   = useState<boolean>(true);

    //relational collections
    const [progLangs, setProgLangs] = useState<string[]>([]);
    const [appTypesNames, setAppTypesNames] = useState<string[]>([]);

    //aplication edition
    const nameRef = useRef<HTMLInputElement>(null);

    const typeRef = useRef<HTMLSelectElement>(null);
    const proglanguageRef = useRef<HTMLSelectElement>(null);    
    const osystemRef = useRef<HTMLInputElement>(null);
    const authorRef = useRef<HTMLInputElement>(null);
    const referenceRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    const urlRef = useRef<HTMLInputElement>(null);
    const pathRef = useRef<HTMLInputElement>(null);
    const localdevRef = useRef<HTMLInputElement>(null);
    const usedockerRef = useRef<HTMLInputElement>(null);
    const controlusersRef = useRef<HTMLInputElement>(null);
    const useuiRef = useRef<HTMLInputElement>(null);
    const useagentsRef = useRef<HTMLInputElement>(null);
    const consumedbRef = useRef<HTMLInputElement>(null);
    const consumeapiRef = useRef<HTMLInputElement>(null);
    const consumeaiRef = useRef<HTMLInputElement>(null);
    const exposedbRef = useRef<HTMLInputElement>(null);
    const exposeapiRef = useRef<HTMLInputElement>(null);

    const refInline: string = " - (".concat(app.reference!).concat(")");

    useEffect(() => {
        const init = async () => {
            const proglangsNames = await ProgLangCodeService.getAllNames();
            const apptypes = await ApptypesService.getAll();
            setProgLangs(proglangsNames);
            setAppTypesNames(ApptypesService.getCollNames(apptypes));
        };
        if(appTypesNames.length==0){init();}        
    });

    const updateObjApplication = () => {
        app.author      = authorRef.current?.value! ?? AppConstants.NOT_DEF;
        app.description = descriptionRef.current?.value! ?? AppConstants.NOT_DEF;
        app.appurl      = urlRef.current?.value! ?? AppConstants.NOT_DEF;
        app.apppath     = pathRef.current?.value! ?? AppConstants.NOT_DEF;
        app.apptype     = typeRef.current?.value! ?? AppConstants.NOT_DEF;
        app.proglanguage= proglanguageRef.current?.value! ?? AppConstants.NOT_DEF;
        app.osystem     = osystemRef.current?.value! ?? AppConstants.NOT_DEF;
        app.localdev    = localdevRef.current?.checked?? AppDef.fdef_localdev;
        app.usedocker   = usedockerRef.current?.checked?? AppDef.fdef_usedocker;
        app.consumeai   = consumeaiRef.current?.checked?? AppDef.fdef_consumeai;
        app.consumeapi  = consumeapiRef.current?.checked?? AppDef.fdef_consumeapi;
        app.consumedb   = consumedbRef.current?.checked?? AppDef.fdef_consumedb;
        app.exposeapi   = exposeapiRef.current?.checked?? AppDef.fdef_exposeapi;
        app.exposedb    = exposedbRef.current?.checked?? AppDef.fdef_exposedb;
        app.useui       = useuiRef.current?.checked?? AppDef.fdef_useui;
        app.useagents   = useagentsRef.current?.checked?? AppDef.fdef_useagents;
    }

    const onClick = (opId: string) => {

        if (opId === AppConstants.MODE_EDITION) {
            const bar_cfg:BarButtonsCfg = barConfig;
            barConfig.visibled = [false,true];
            setBarConfig(bar_cfg);
            setDisabled(false);  
            setTimeout(() => {
                nameRef.current?.focus();
            }, 100);           
        }
        else if (opId === AppConstants.ACT_SAVE) {
            updateObjApplication();   
            save(app);                
            setBarConfig(BARCFG_EDITION);
            setDisabled(true);  
        }
    };

    const onCollapse = (operation_id?: string) => { 
        //alert(!collapse);
        setCollapse(!collapse); 
    };

    const renderMainContent = () => {
        return (
            <div className="w-full h-auto rounded-md">

                <div className="w-full h-auto flex flex-col space-y-3 mb-[12px]">

                    <InputText name="author" ref={authorRef} label="Auhor"
                        defaultvalue={app.author} maxlen={AppDef.AUTHOR_MAXLEN}
                        disabled={disabled} />

                    <InputText name="reference" ref={referenceRef} label="reference"
                        defaultvalue={app.reference} maxlen={AppDef.REFERENCE_MAXLEN}
                        disabled={disabled} />

                    <InputText name="description" ref={descriptionRef} label="Description"
                        defaultvalue={app.description} maxlen={AppDef.DESCRIPTION_MAXLEN}
                        disabled={disabled} />

                    <InputText name="url" ref={urlRef} label="url"
                        defaultvalue={app.appurl} maxlen={AppDef.URL_MAXLEN}
                        disabled={disabled} />

                    <InputText name="path" ref={pathRef} label="path"
                        defaultvalue={app.apppath} maxlen={AppDef.PATH_MAXLEN}
                        disabled={disabled} />
                </div>

                <div className="w-full h-auto grid grid-cols-[25%_25%_25%_25%] mt-4 space-y-4">

                    <FieldWrapper label="Type">
                        <InputSelect name="type" ref={typeRef} collection={appTypesNames}
                            defaultvalue={appTypesNames[0]}
                            disabled={disabled} />
                    </FieldWrapper>

                    <FieldWrapper label="prog Lang">
                        <InputSelect name="proglanguage" ref={proglanguageRef} collection={progLangs}
                            defaultvalue={app.proglanguage!}
                            disabled={disabled} />
                    </FieldWrapper>

                    <FieldWrapper label="System">
                        <InputText name="opsystem" ref={osystemRef}
                            defaultvalue={app.osystem}
                            maxlen={AppDef.OSSYSTEM_MAXLEN}
                            disabled={disabled} />
                    </FieldWrapper>

                    <FieldWrapper label="local Dev" >
                        <InputCheck name="localdev" ref={localdevRef} classname="ml-[12px]"
                            defaultvalue={app.localdev!}
                            disabled={disabled} />
                    </FieldWrapper>

                    <FieldWrapper label="Docker">
                        <InputCheck name="usedocker" ref={usedockerRef} classname="ml-[12px]"
                            defaultvalue={app.usedocker!}
                            disabled={disabled} />
                    </FieldWrapper>

                    <FieldWrapper label="ctr. Users">
                        <InputCheck name="controlusers" ref={controlusersRef!} classname="ml-[12px]"
                            defaultvalue={app.controlusers!}
                            disabled={disabled} />
                    </FieldWrapper>

                    <FieldWrapper label="use UI">
                        <InputCheck name="useui" ref={useuiRef} classname="ml-[12px]"
                            defaultvalue={app.useui!}
                            disabled={disabled} />
                    </FieldWrapper>

                    <FieldWrapper label="use Agents">
                        <InputCheck name="useagents" ref={useagentsRef} classname="ml-[12px]"
                            defaultvalue={app.useagents!}
                            disabled={disabled} />
                    </FieldWrapper>

                    <FieldWrapper label="cons. Db">
                        <InputCheck name="consumedb" ref={consumedbRef} classname="ml-[12px]"
                            defaultvalue={app.consumedb!}
                            disabled={disabled} />
                    </FieldWrapper>

                    <FieldWrapper label="cons. Api">
                        <InputCheck name="consumeapi" ref={consumeapiRef} classname="ml-[12px]"
                            defaultvalue={app.consumeapi!}
                            disabled={disabled} />
                    </FieldWrapper>

                    <FieldWrapper label="cons. AI">
                        <InputCheck name="consumeai" ref={consumeaiRef} classname="ml-[12px]"
                            defaultvalue={app.consumeai!}
                            disabled={disabled} />
                    </FieldWrapper>

                    <FieldWrapper label="expose Db">
                        <InputCheck name="exposedb" ref={exposedbRef} classname="ml-[12px]"
                            defaultvalue={app.exposedb!}
                            disabled={disabled} />
                    </FieldWrapper>

                    <FieldWrapper label="expose Api">
                        <InputCheck name="exposeapi" ref={exposeapiRef} classname="ml-[12px]"
                            defaultvalue={app.exposeapi!}
                            disabled={disabled} />
                    </FieldWrapper>

                </div>
            </div>
        )
    };

    //<div className={iconclass} />

    const renderHeader = () => {
        return (
            <div className={style_header}>
                {/* header title */}
                <div className={style_header_title}>
                    <div>
                        {collapse ?
                            <XButton callback={onCollapse}
                                iconcolor="white"
                                iconname={AppThemifyIcons.TI_ARROW_DOWN}
                                iconsize="xs" /> :
                            <XButton callback={onCollapse}
                                iconcolor="red" iconsize="xs"
                                iconname={AppThemifyIcons.TI_ANGLE_UP} />
                        }
                    </div>
                    <div className={style_title}>
                        <InputText name="name" ref={nameRef} 
                                   defaultvalue={app.name} maxlen={AppDef.NAME_MAXLEN}
                                   disabled={disabled} autofocus={true} 
                                   classname="flex-1 mr-[10px]" />           
                    </div>
                </div>

                {/* headermbuttons */}
                <BarButtons classname={style_barbuttons}
                            barconfig={barConfig}
                            onclick={onClick} />
            </div>
        )
    };

    return (
        <div className={style_component}>
            {renderHeader()}
            {!collapse ? renderMainContent() : null}
        </div>
    )

} //end component
