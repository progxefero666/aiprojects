//src\app\appeditor\appeditorcard.tsx

import React, { useEffect, useRef, useState } from "react";
import { AppThemifyIcons } from "@/style/appthicons";
import { DataConstants } from "@/lib/common/app/dataconstants";
import { FieldWrapper } from "@/libcomp/fieldwrapper";
import { BarButtons } from "@/libcomp/barbutton";
import { Application } from "@/client/models/Application";
import { XButton } from "@/libcomp/button";

import { ProgLangCodeService } from "@/client_aidatabase/ProglanguagesService";
import { ApptypesService } from "@/client_aidatabase/ApptypesService";

import { BARCFG_EDITION_TYPE } from "@/app_front/uimodel/uimodelbars";
import { InputCheck } from "@/libcomp/inputcheck";
import { AppDef } from "@/app_front/manapplications/applicationdef";
import { InputText } from "@/libcomp/inputtext";
import { InputSelect } from "@/libcomp/inputselect";


import { MdPreview } from 'md-editor-rt';
import 'md-editor-rt/lib/preview.css';
import 'md-editor-rt/lib/style.css';
import 'md-editor-rt/lib/preview.css';
import { BarButtonsCfg } from "@/libcomp/model/barbuttonscfg";
import { AppConstants } from "@/lib/arquitect/appconstants";
export interface AppCardProp {
    app: Application;
    onedit: () => void;
    ondelete: () => void;
    iconname?: string;
    iconcolor?: string;
    iconsize?: string;
}
export function AppCard({ app, onedit, ondelete, iconname, iconsize, iconcolor }: AppCardProp) {

    const [collapse, setcollapse] = useState<boolean>(true);

    let iconclass: string = DataConstants.UNDEFINED;
    if (iconname) {
        const icon_size: string = iconsize ?? AppThemifyIcons.DEF_SIZE;
        iconclass = AppThemifyIcons.getIconClass(iconname, icon_size, iconcolor);
    }
    const onCollapse = (operation_id?: string) => {
        setcollapse(!collapse);
    };

    const [disabled, setDisabled] = useState<boolean>(false);
    const [barConfig, setBarConfig] = useState<BarButtonsCfg>(BARCFG_EDITION_TYPE);

    //BarButtonsCfg
    //relational collections
    const [progLangs, setProgLangs] = useState<string[]>([]);
    const [appTypesNames, setAppTypesNames] = useState<string[]>(["uno", "dos"]);

    const typeRef = useRef<HTMLSelectElement>(null);
    const proglanguageRef = useRef<HTMLSelectElement>(null);
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

    useEffect(() => {
        const init = async () => {

            const apptypes = await ApptypesService.getAll();
            const apptypes_names: string[] = ApptypesService.getCollNames(apptypes);
            setAppTypesNames(apptypes_names);

            const proglangsNames = await ProgLangCodeService.getAllNames();
            setProgLangs(proglangsNames);
        };
        init();
    }, []);

    const onClick = (opId: string) => {

        if (opId === "edit") {  

        }
        else if (opId === AppConstants.ACT_ITEM__DELETE) {
            ondelete();

        }
    };

    const renderMainContent = () => {
        return (
            <div className="w-full h-auto rounded-md">

                <div className="w-full h-auto flex flex-col space-y-3 mb-[12px]">

                    <InputText name="author" ref={authorRef} label="Auhor"
                        defaultvalue={app.author} maxlen={AppDef.AUTHOR_MAXLEN}
                        disabled={disabled} autofocus={true} />

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
                    <BarButtons barconfig={barConfig} onclick={onClick} />
                </div>

            </div>


            {/* body */}
            {!collapse ? renderMainContent() : null}
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