//src\lib\xuicards\cardproyect.tsx

import React, { useMemo, useState } from "react";
import { MdPreview } from 'md-editor-rt';
//import 'md-editor-rt/lib/preview.css';

import { AppThemifyIcons } from "@/style/appthicons";
import { DataConstants } from "@/lib/common/app/dataconstants";

import { ThemeColors } from "@/style/apptheme";

import 'md-editor-rt/lib/style.css';
import 'md-editor-rt/lib/preview.css';
import { XButton } from "@/libcomp/button";
import { Application } from "@/client/models/Application";


const dummy_content: string = `## Introducción

    Este es un **texto en negrita** y este es *texto en cursiva*.

    ### Lista de tareas
    - [x] Tarea completada
    - [ ] Tarea pendiente
    - [ ] Otra tarea

    ### Lista numerada
    1. Primer elemento
    2. Segundo elemento
    3. Tercer elemento

    ## Código
    Aquí hay código inline: \`console.log("Hola")\``;

export interface AppIntroCardIfc {
    app: Application;
    onselection: (id: number) => void;
    iconname?: string;
    iconcolor?: string;
    iconsize?: string;
}
export function AppIntroCard({ app, onselection, iconname, iconsize, iconcolor }: AppIntroCardIfc) {

    const [collapse, setcollapse] = useState<boolean>(true);

    let iconclass: string = DataConstants.UNDEFINED;
    if (iconname) {
        const icon_size: string = iconsize ?? AppThemifyIcons.DEF_SIZE;
        //iconclass = AppThemifyIcons.getIconClass(iconname, icon_size, iconcolor);
    }

    const onOpen = () => {
        onselection(app.id!);
    };

    const onCollapse = (operation_id?: string) => {
        setcollapse(!collapse);
    };

    const renderMainContent = useMemo(() => {
         return (
            <div className="flex items-center text-white text-base ml-2">
                {app.description}
            </div>
         )
    }, []);

    return (
        <div className="w-full flex flex-col bg-base-100">

            {/* header */}
            <div className="w-full relative">
                <div className="w-full h-auto flex items-center">

                    {/* collapse comp */}
                    <div className="flex flex-row text-white text-2xl">
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

                        {/* app data */}
                        {renderMainContent}

                    </div>

                    {/* crud buttons */}
                    <div className="absolute right-2 flex flex-row gap-2">
                        <button className="btn btn-sm btn-info"
                            onClick={onOpen}>
                            delete
                        </button>
                        <button className="btn btn-sm btn-success"
                            onClick={onOpen}>
                            open
                        </button>
                    </div>

                </div>
            </div>

            {/* body */}
            {!collapse ?
                <div className="w-full flex flex-col">
                    <hr className="text-primary mb-2" />
                    <div className="w-full text-white text-md pb-1">
                        <MdPreview
                            value={dummy_content}
                            theme="dark" />

                    </div>

                </div> : null}
        </div>
    )

} //end component

/*
                    <XButton callback={onClick}
                             btntext="open" 
                             btncolor={ThemeColors.INFO} />
 */