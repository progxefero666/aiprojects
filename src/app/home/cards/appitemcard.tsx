//src\app\home\appformcard.tsx

import React, { useEffect, useMemo, useRef, useState } from "react";
import { MdPreview } from 'md-editor-rt';
//import 'md-editor-rt/lib/preview.css';

import { AppThemifyIcons } from "@/style/appthicons";
import { DataConstants } from "@/lib/common/app/dataconstants";
import { ProgLangCodeService } from "@/client_aidatabase/ProglanguagesService";
import { FieldWrapper } from "@/libcomp/fieldwrapper";
import { BarButtonsConfig } from "@/types/types";
import { BarButtons } from "@/libcomp/barbutton";
import { Application } from "@/client/models/Application";
import { ApptypesService } from "@/client_aidatabase/ApptypesService";
import { OutputCheck } from "@/libcomp/outputcheck";
import { OutputText } from "@/libcomp/ouputtext";
import { XButton } from "@/libcomp/button";

import 'md-editor-rt/lib/style.css';
import 'md-editor-rt/lib/preview.css';
import { BARCFG_OPEN } from "@/app_front/uimodel/uimodelbars";



export interface AppItemCardProp {
    app: Application;
    onselection: (appid: number) => void;
    iconname?: string;
    iconcolor?: string;
    iconsize?: string;
}
export function AppItemCard({ app, onselection, iconname, iconsize, iconcolor }: AppItemCardProp) {

    const [collapse, setcollapse] = useState<boolean>(true);

    const onCollapse = (operation_id?: string) => {
        setcollapse(!collapse);
    };

    const [disabled, setDisabled] = useState<boolean>(false);

    //relational collections
    const [progLangs, setProgLangs] = useState<string[]>([]);
    //const [appTypes, setAppTypes] = useState<AppType[]>([]);
    const [appTypesNames, setAppTypesNames] = useState<string[]>([]);

    const refInline: string = " (".concat(app.reference!).concat(")");

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

    const onClick = (opId: string) => {
        onselection(app.id!);
    };
   const renderMainContent = useMemo(() => {
        return (
            <div className="w-full h-auto px-2 rounded-md bg-red">

                <div className="w-full h-auto flex flex-col space-y-3 mb-[12px]">
                    <OutputText label="Author" value={app.author} />
                    <OutputText label="Description" value={app.description} />
                    <OutputText label="Url" value={app.appurl!} />
                    <OutputText label="Path" value={app.apppath!} />
                </div>

                <div className="w-full h-auto grid grid-cols-[25%_25%_25%_25%] mt-4 space-y-4">

                    <FieldWrapper label="App. Type">
                        <OutputText value={app.apptype} />
                    </FieldWrapper>

                    <FieldWrapper label="prog Lang">
                        <OutputText value={app.proglanguage!} />
                    </FieldWrapper>

                    <FieldWrapper label="Op. System">
                        <OutputText value={app.osystem!} />
                    </FieldWrapper>

                    <OutputCheck label="local Dev" chequed={app.localdev!} />
                    <OutputCheck label="use Docker" chequed={app.localdev!} />
                    <OutputCheck label="ctr. Users" chequed={app.controlusers!} />
                    <OutputCheck label="use UI" chequed={app.useui!} />
                    <OutputCheck label="use Agents" chequed={app.useagents!} />
                    <OutputCheck label="cons. Db" chequed={app.consumedb!} />
                    <OutputCheck label="cons. Api" chequed={app.consumeapi!} />
                    <OutputCheck label="cons. AI" chequed={app.consumeai!} />
                    <OutputCheck label="expose Api" chequed={app.exposedb!} />
                    <OutputCheck label="cons. AI" chequed={app.exposeapi!} />
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
                    <BarButtons barconfig={BARCFG_OPEN} onclick={onClick} />
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