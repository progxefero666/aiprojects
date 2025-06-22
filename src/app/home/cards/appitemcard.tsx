//src\app\home\appformcard.tsx

import React, { useEffect, useMemo, useRef, useState } from "react";
import { AppThemifyIcons } from "@/style/appthicons";
import { ProgLangCodeService } from "@/client_aidatabase/ProglanguagesService";
import { FieldWrapper } from "@/libcomp/fieldwrapper";
import { BarButtons } from "@/libcomp/barbutton";
import { Application } from "@/client/models/Application";
import { ApptypesService } from "@/client_aidatabase/ApptypesService";
import { OutputCheck } from "@/libcomp/outputcheck";
import { OutputText } from "@/libcomp/ouputtext";
import { XButton } from "@/libcomp/button";
import { BARCFG_DELETE_OPEN } from "@/app_front/uimodel/uimodelbars";
import { AppConstants } from "@/app_front/appconstants";
import { AppTheme } from "@/app_front/apptheme";

/*
import { MdPreview } from 'md-editor-rt';
//import 'md-editor-rt/lib/preview.css';
import 'md-editor-rt/lib/style.css';
import 'md-editor-rt/lib/preview.css';
<MdPreview
    value={dummy_content}
    theme="dark" />
*/

export const HorizontalSeparator = ({ width = 20 }) => {
    return <div style={{ width: `${width}px`, height: 'auto' }} />;
};
export interface AppItemCardProp {
    app: Application;
    ondelete: () => void;
    onselection: (appid: number) => void;
    iconname?: string;
    iconcolor?: string;
    iconsize?: string;
}
export function AppItemCard({ app, onselection, ondelete, iconname, iconsize, iconcolor }: AppItemCardProp) {

    const [collapse, setcollapse] = useState<boolean>(true);
    const onCollapse = (operation_id?: string) => {
        setcollapse(!collapse);
    };
    const refInline: string = " (".concat(app.reference!).concat(")");

    const onClick = (opId: string) => {
        if (opId === AppConstants.ACT_OPEN) {
            onselection(app.id!);
        }
        else if (opId === AppConstants.ACT_ITEM__DELETE) {
            ondelete();
        }
    };

    const renderContent = () => {
        return (
            <div className = {AppTheme.CARD_DATA_STYLE}>

                <div className = {AppTheme.LIST_IOTEXT_STYLE}>
                    <OutputText label="Author" value={app.author} />
                    <OutputText label="Description" value={app.description} />
                    <OutputText label="Url" value={app.appurl!} />
                    <OutputText label="Path" value={app.apppath!} />
                </div>

                <div className = {AppTheme.GRID_IOELEMS_STYLE}>

                    <FieldWrapper label="App. Type">
                        <OutputText value={app.apptype} />
                    </FieldWrapper>

                    <FieldWrapper label="code-lang">
                        <OutputText value={app.proglanguage!} />
                    </FieldWrapper>

                    <FieldWrapper label="System">
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
    }



    return (
        <div className = {AppTheme.CARD_STYLE}>

            {/* header */}
            <div className = {AppTheme.CARD_HEADER_BAR_STYLE}>

                <div className = {AppTheme.CARD_HEADER_STYLE}>
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

                    <div className= {AppTheme.CARD_TITLE_STYLE}>
                        <p className={AppTheme.TEXT_BIG_SIZE}>{app.name}</p> 
                        <HorizontalSeparator width={10} />
                        <p className={AppTheme.TEXT_BASE_SIZE}>{refInline}</p>
                    </div>

                </div>

                {/* crud buttons */}
                <div className=" h-auto mr-[6px] my-[6px] flex justify-end">
                    <BarButtons barconfig={BARCFG_DELETE_OPEN} onclick={onClick} />
                </div>
            </div>

            {!collapse ? renderContent():null}
        </div>
    )

} //end component
