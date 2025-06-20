//src\app\appeditor\appeditorcard.tsx

import React, { useEffect, useMemo, useRef, useState } from "react";

import { AppThemifyIcons } from "@/style/appthicons";
import { DataConstants } from "@/lib/common/app/dataconstants";
import { FieldWrapper } from "@/libcomp/fieldwrapper";
import { OutputText } from "@/libcomp/ouputtext";
import { OutputCheck } from "@/libcomp/outputcheck";
import { BarButtonsConfig } from "@/types/types";
import { BarButtons } from "@/libcomp/barbutton";
import { Application } from "@/client/models/Application";
import { XButton } from "@/libcomp/button";

import { ProgLangCodeService } from "@/client_aidatabase/ProglanguagesService";
import { ApptypesService } from "@/client_aidatabase/ApptypesService";

import { MdPreview } from 'md-editor-rt';
import 'md-editor-rt/lib/preview.css';
import 'md-editor-rt/lib/style.css';
import 'md-editor-rt/lib/preview.css';
import { BARCFG_DELETE_OPEN } from "@/app_front/uimodel/uimodelbars";
import { InputCheck } from "@/libcomp/inputcheck";
import { AppDef } from "@/app_front/manapplications/applicationdef";
import { InputText } from "@/libcomp/inputtext";


export interface AppCardProp {
    app: Application;
    onedit: () => void;
    ondelete: () => void;
    iconname?: string;
    iconcolor?: string;
    iconsize?: string;
}
export function AppCard({ app, onedit,ondelete, iconname, iconsize, iconcolor }: AppCardProp) {

    const [collapse, setcollapse] = useState<boolean>(true);
    let iconclass: string = DataConstants.UNDEFINED;
    if (iconname) {
        const icon_size: string = iconsize ?? AppThemifyIcons.DEF_SIZE;
        iconclass = AppThemifyIcons.getIconClass(iconname, icon_size, iconcolor);
    }
    const onCollapse = (operation_id?: string) => {
        setcollapse(!collapse);
    };

    const [disabled, setDisabled] = useState<boolean>(true);

    //relational collections
    const [progLangs, setProgLangs] = useState<string[]>([]);
    //const [appTypes, setAppTypes] = useState<AppType[]>([]);
    const [appTypesNames, setAppTypesNames] = useState<string[]>([]);

    const typeRef = useRef<HTMLInputElement>(null);
    const proglanguageRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
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

    const init = async () => {
        const proglangsNames = await ProgLangCodeService.getAllNames();
        const apptypes = await ApptypesService.getAll();
        setProgLangs(proglangsNames);
        setAppTypesNames(ApptypesService.getCollNames(apptypes));
    };

    useEffect(() => {
        //setDisabled(false);
        init();
    }, []);

    const onClick = (opId:string) => {    
        if(opId === "delete")    {ondelete();}
        else if(opId === "edit") { onedit();}
    }; 


    const renderMainContent = useMemo(() => {
        return (
            <div className="w-full h-auto rounded-md">

                <div className="w-full h-auto flex flex-col space-y-3 mb-[12px]">

                    <InputText ref={authorRef}
                        disabled={disabled}
                        label="Auhor"
                        defaultvalue={app.author}
                        maxlen={AppDef.AUTHOR_MAXLEN}
                        name="author" />

                    <InputText ref={descriptionRef}
                        disabled={disabled}
                        label="Description"
                        defaultvalue={app.description}
                        maxlen={AppDef.DESCRIPTION_MAXLEN}
                        name="description" />

                    <InputText ref={urlRef}
                        label="url"
                        disabled={disabled}
                        defaultvalue={app.appurl}
                        maxlen={AppDef.URL_MAXLEN}
                        name="url" />

                    <InputText ref={pathRef}
                        label="path"
                        disabled={disabled}
                        defaultvalue={app.apppath}
                        maxlen={AppDef.PATH_MAXLEN}
                        name="path" />
                </div>

                <div className="w-full h-auto grid grid-cols-[25%_25%_25%_25%] mt-4 space-y-4">

                    <FieldWrapper label="Type">
                        <InputText ref={typeRef}
                            disabled={true}
                            maxlen={200}
                            name="type"
                            defaultvalue={app.apptype} />
                    </FieldWrapper>

                    <FieldWrapper label="prog Lang">
                        <InputText ref={proglanguageRef}
                            disabled={disabled}
                            maxlen={200}
                            name="proglanguage"
                            defaultvalue={app.proglanguage!} />
                    </FieldWrapper>

                    <FieldWrapper label="Op. System">
                        <InputText ref={osystemRef}
                            disabled={disabled}
                            defaultvalue={app.osystem}
                            maxlen={AppDef.OSSYSTEM_MAXLEN}
                            name="opsystem" />
                    </FieldWrapper>

                    <FieldWrapper label="local Dev">
                        <InputCheck ref={localdevRef}
                            disabled={disabled}
                            defaultvalue={app.localdev!}
                            name="localdev" />
                    </FieldWrapper>

                    <FieldWrapper label="Use Docker">
                        <InputCheck ref={usedockerRef}
                            disabled={disabled}
                            defaultvalue={app.usedocker!}
                            name="usedocker" />
                    </FieldWrapper>

                    <FieldWrapper label="ctr. Users">
                        <InputCheck ref={controlusersRef!}
                            disabled={disabled}
                            defaultvalue={app.controlusers!}
                            name="controlusers" />
                    </FieldWrapper>

                    <FieldWrapper label="use UI">
                        <div className="w-full h-auto">
                            <InputCheck ref={useuiRef}
                                disabled={disabled}
                                defaultvalue={app.useui!}
                                name="useui" />
                        </div>
                    </FieldWrapper>

                    <FieldWrapper label="use Agents">
                        <InputCheck ref={useagentsRef}
                            disabled={disabled}
                            defaultvalue={app.useagents!}
                            name="useagents" />
                    </FieldWrapper>


                    <FieldWrapper label="cons. Db">
                        <InputCheck ref={consumedbRef}
                            disabled={disabled}
                            defaultvalue={app.consumedb!}
                            name="consumedb" />
                    </FieldWrapper>


                    <FieldWrapper label="cons. Api">
                        <InputCheck ref={consumeapiRef}
                            disabled={disabled}
                            defaultvalue={app.consumeapi!}
                            name="consumeapi" />
                    </FieldWrapper>

                    <FieldWrapper label="cons. AI">
                        <InputCheck ref={consumeaiRef}
                            disabled={disabled}
                            defaultvalue={app.consumeai!}
                            name="consumeai" />
                    </FieldWrapper>

                    <FieldWrapper label="expose Db">
                        <InputCheck ref={exposedbRef}
                            disabled={disabled}
                            defaultvalue={app.exposedb!}
                            name="exposedb" />
                    </FieldWrapper>

                    <FieldWrapper label="expose Api">
                        <InputCheck ref={exposeapiRef}
                            disabled={disabled}
                            defaultvalue={app.exposeapi!}
                            name="exposeapi" />
                    </FieldWrapper>

                </div>
            </div>

        )
    }, []);

 

    return (
        <div className="w-full flex flex-col bg-base-100 p-[10px] border border-zinc-500">

            {/* header */}
            <div className="w-full h-auto grid grid-cols-2 auto-cols-max  rounded-lg border border-sky-500">

                {/* collapse comp items-end */}
                <div className="flex flex-row items-center pl-[6px] text-white text-xs">
                    <div>
                        {collapse ?
                            <XButton callback={onCollapse}
                                iconcolor="white"
                                iconname={AppThemifyIcons.TI_ARROW_DOWN}
                                iconsize="xs" />
                            : <XButton callback={onCollapse}
                                iconcolor="red"
                                iconsize="xs"
                                iconname={AppThemifyIcons.TI_ANGLE_UP} />
                        }
                    </div>
                    <div className="w-full flex items-center flex-row ml-[12px] text-white text-lg">
                        <p>{app.name}</p> <p className="ml-[6px] text-sm">{refInline}</p>
                    </div>

                </div>

                {/* crud buttons */}
                <div className=" h-auto mr-[6px] my-[6px] flex justify-end">
                    <BarButtons barconfig={BARCFG_DELETE_OPEN} onclick={onClick} />
                </div>

            </div>
    

            {/* body */}
            {!collapse ? renderMainContent : null}
        </div>
    )

} //end component

/*
 <div className="w-full flex flex-col">
                    <hr className="text-primary mb-2" />
                    <div className="w-full text-white text-md pb-1">
                        <MdPreview
                            value={dummy_content}
                            theme="dark" />

                    </div>

                </div>
                    <XButton callback={onClick}
                             btntext="open" 
                             btncolor={ThemeColors.INFO} />
 */