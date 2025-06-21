//src\app_front\comp\appform.tsx


import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from "react-dom/client";
import { AppThemifyIcons } from "@/style/appthicons";
import { ThemeColors } from "@/style/apptheme";
import { InputText } from '@/libcomp/inputtext';
import { InputSelect } from '@/libcomp/inputselect';
import { InputCheckold } from '@/libcomp/inputcheckold';
import { AppConstants } from '../../lib/arquitect/appconstants';
import { ProgLangCodeService } from '@/client_aidatabase/ProglanguagesService';
import { ApptypesService } from '@/client_aidatabase/ApptypesService';
import { AppType } from '@/client_old/models/AppType';
import { AppDef } from '../manapplications/applicationdef';
import { Application } from '@/client_old/models/Application';
import { InputCheck } from '@/libcomp/inputcheck';

/*
showApplicationForm(app,mode).then(({ confirmed }) => {
  if (confirmed) {
  } else {
  }
});
*/

const iconsize = "xs";
const icons_size: string = iconsize ?? AppThemifyIcons.DEF_SIZE;
const icon_ok = AppThemifyIcons.TI_CHECK;
const icon_cancel = AppThemifyIcons.TI_CLOSE;
const icon_ok_class = AppThemifyIcons.getIconClass(icon_ok, icons_size);
const icon_cancel_class = AppThemifyIcons.getIconClass(icon_cancel, icons_size);

interface AppPopupIntroFormIfc {
    app: Application;
    onClose: () => void;
    onCancel: () => void;
    isOpen: boolean;
}

/*
showUiPopupConfirm("¿confirm opereration?").then(({ confirmed }) => {
    if (confirmed) {
        ctrlColl.execOperation(CollCommandsIds.OPID_DELETEALL);
        ctrlColl.clearOperations();
        updateStateUiCollection();
    }
});
*/
export const AppPopupIntroForm = ({ app, onClose, onCancel, isOpen }: AppPopupIntroFormIfc) => {

    const [disabled, setDisabled] = useState<boolean>(true);

    //relational collections
    const [progLangs, setProgLangs] = useState<string[]>([]);
    //const [appTypes, setAppTypes] = useState<AppType[]>([]);
    const [appTypesNames, setAppTypesNames] = useState<string[]>([]);


    //app fields
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


    const onSelectChange = (name: string, result: string) => {
        if (name == "type") {

        }
        else if (name == "proglanguage") {

        }
    }

    return (
        <dialog open={isOpen} className="modal">

            <div className="modal-box w-fit">

                <div className="w-full h-auto flex flex-col space-y-2 border">

                    <InputText ref={nameRef}
                        disabled={disabled}
                        label="Name"
                        defaultvalue={app.name}
                        maxlen={AppDef.NAME_MAXLEN}
                        name="name" />
                    
                    <InputText ref={authorRef}
                        disabled={disabled}
                        label="Auhor"
                        defaultvalue={app.author}
                        maxlen={AppDef.AUTHOR_MAXLEN}
                        name="author" />                    
                </div>

                <div className="w-full h-auto grid grid-cols-[25%_25%_25%_25%]">
  
                    <div className="w-full h-auto grid grid-cols-[50%_50%]">
                        <div className="w-full h-auto">
                            Type                    
                        </div>
                        <div className="w-full h-auto">
                            <InputSelect ref={typeRef}
                                disabled={disabled}
                                label="Type"
                                onchange={onSelectChange}
                                name="type"
                                defaultvalue={app.apptype}
                                collection={appTypesNames} />                  
                        </div>                    
                    </div>

                    <div className="w-full h-auto grid grid-cols-[50%_50%]">
                        <div className="w-full h-auto">
                            Type                    
                        </div>
                        <div className="w-full h-auto">
                            <InputSelect ref={proglanguageRef}
                                disabled={disabled}
                                label="Prog. Language"
                                onchange={onSelectChange}
                                name="proglanguage"
                                defaultvalue={app.proglanguage!}
                                collection={progLangs} />
                        </div>                    
                    </div>


                    <div className="w-full h-auto grid grid-cols-[50%_50%]">
                        <div className="w-full h-auto">
                            Type                    
                        </div>
                        <div className="w-full h-auto">
                            <InputText ref={osystemRef}
                                disabled={disabled}
                                label="Op. System"
                                defaultvalue={app.osystem}
                                maxlen={AppDef.OSSYSTEM_MAXLEN}
                                name="opsystem" />
                        </div>                    
                    </div>

                    <div className="w-full h-auto grid grid-cols-[50%_50%]">
                        <div className="w-full h-auto">
                            Type                    
                        </div>
                        <div className="w-full h-auto">
                            <InputText ref={referenceRef}
                                disabled={disabled}
                                label="Reference"
                                defaultvalue={app.reference}
                                maxlen={AppDef.REFERENCE_MAXLEN}
                                name="reference" />               
                        </div>                    
                    </div>

                    <div className="w-full h-auto grid grid-cols-[50%_50%]">
                        <div className="w-full h-auto">
                            Type                    
                        </div>
                        <div className="w-full h-auto">                    
                            <InputText ref={descriptionRef}
                                disabled={disabled}
                                label="Description"
                                defaultvalue={app.description}
                                maxlen={AppDef.DESCRIPTION_MAXLEN}
                                name="description" />
                        </div>                    
                    </div>

                    <div className="w-full h-auto grid grid-cols-[50%_50%]">
                        <div className="w-full h-auto">
                            Type                    
                        </div>
                        <div className="w-full h-auto">
                            <InputText ref={urlRef}
                                disabled={disabled}
                                label="Url"
                                defaultvalue={app.appurl}
                                maxlen={AppDef.URL_MAXLEN}
                                name="url" />
                        </div>                    
                    </div>


                    <div className="w-full h-auto grid grid-cols-[50%_50%]">
                        <div className="w-full h-auto">
                            Type                    
                        </div>
                        <div className="w-full h-auto">
                            <InputText ref={pathRef}
                                disabled={disabled}
                                label="Path"
                                defaultvalue={app.apppath}
                                maxlen={AppDef.PATH_MAXLEN}
                                name="path" />              
                        </div>                    
                    </div>

                    <div className="w-full h-auto grid grid-cols-[50%_50%]">
                        <div className="w-full h-auto">
                            Local Dev                   
                        </div>
                        <div className="w-full h-auto">
                            <InputCheck ref={localdevRef}
                                disabled={disabled}
                                defaultvalue={app.localdev!}
                                name="localdev" />               
                        </div>                    
                    </div>

                    <div className="w-full h-auto grid grid-cols-[50%_50%]">
                        <div className="w-full h-auto">
                            Use Docker                    
                        </div>
                        <div className="w-full h-auto">
                            <InputCheck ref={usedockerRef}
                                disabled={disabled}
                                defaultvalue={app.usedocker!}
                                name="usedocker" />
                        </div>                    
                    </div>
             
                    <div className="w-full h-auto grid grid-cols-[50%_50%]">
                        <div className="w-full h-auto">
                            Use Docker                    
                        </div>
                        <div className="w-full h-auto">
                            <InputCheck ref={controlusersRef!}
                                disabled={disabled}
                                defaultvalue={app.controlusers!}
                                name="controlusers" />
                        </div>                    
                    </div>

                    <div className="w-full h-auto grid grid-cols-[50%_50%]">
                        <div className="w-full h-auto">
                            Use Docker                    
                        </div>
                        <div className="w-full h-auto">
                            <InputCheck ref={useuiRef}
                                disabled={disabled}
                                defaultvalue={app.useui!}
                                name="useui" />
                        </div>                    
                    </div>

                    <div className="w-full h-auto grid grid-cols-[50%_50%]">
                        <div className="w-full h-auto">
                            Use Docker                    
                        </div>
                        <div className="w-full h-auto">
                            <InputCheck ref={useagentsRef}
                                disabled={disabled}
                                defaultvalue={app.useagents!}
                                name="useagents" />
                        </div>                    
                    </div>

                    <div className="w-full h-auto grid grid-cols-[50%_50%]">
                        <div className="w-full h-auto">
                            Use Docker                    
                        </div>
                        <div className="w-full h-auto">
                            <InputCheck ref={consumedbRef}
                                disabled={disabled}
                                defaultvalue={app.consumedb!}
                                name="consumedb" />
                        </div>                    
                    </div>

                    <div className="w-full h-auto grid grid-cols-[50%_50%]">
                        <div className="w-full h-auto">
                            Use Docker                    
                        </div>
                        <div className="w-full h-auto">
                            <InputCheck ref={consumeapiRef}
                                disabled={disabled}
                                defaultvalue={app.consumeapi!}
                                name="consumeapi" />
                        </div>                    
                    </div>

                    <div className="w-full h-auto grid grid-cols-[50%_50%]">
                        <div className="w-full h-auto">
                            Use Docker                    
                        </div>
                        <div className="w-full h-auto">
                            <InputCheck ref={consumeaiRef}
                                disabled={disabled}
                                defaultvalue={app.consumeai!}
                                name="consumeai" />
                        </div>                    
                    </div>

                    <div className="w-full h-auto grid grid-cols-[50%_50%]">
                        <div className="w-full h-auto">
                            Use Docker                    
                        </div>
                        <div className="w-full h-auto">
                            <InputCheck ref={exposedbRef}
                                disabled={disabled}
                                defaultvalue={app.exposedb!}
                                name="exposedb" />
                        </div>                    
                    </div>

                    <div className="w-full h-auto grid grid-cols-[50%_50%]">
                        <div className="w-full h-auto">
                            Use Docker                    
                        </div>
                        <div className="w-full h-auto">
                            <InputCheck ref={exposeapiRef}
                                disabled={disabled}
                                defaultvalue={app.exposeapi!}
                                name="exposeapi" />
                        </div>                    
                    </div>
                
                </div>

                {/* Botones */}
                <div className="modal-action flex justify-center mt-4">
                    <form method="dialog">
                        <button
                            className="btn btn-primary mr-2"
                            onClick={(e) => {
                                e.preventDefault();
                                onClose(); }}>
                            <div className={icon_ok_class} />
                            OK
                        </button>

                        <button
                            className="btn btn-secondary"
                            onClick={(e) => {
                                e.preventDefault();
                                onCancel(); }}>
                            <div className={icon_cancel_class} />
                            Cancel
                        </button>

                    </form>
                </div>

            </div>
        </dialog>
    );
};

// Función controladora para mostrar el modal
export const showAppPopupIntroForm = (app: Application): Promise<{ confirmed: boolean }> => {
    return new Promise((resolve) => {

        const modalRoot = document.createElement("div");
        document.body.appendChild(modalRoot);
        const root = createRoot(modalRoot);

        const ModalWrapper = () => {
            const [isOpen, setIsOpen] = useState(true);

            const Submit = () => {
                setIsOpen(false);
                resolve({ confirmed: true });
            };

            const Cancel = () => {
                setIsOpen(false);
                resolve({ confirmed: false });
            };

            useEffect(() => {
                if (!isOpen) {
                    setTimeout(() => {
                        root.unmount(); // Desmontar el componente
                        document.body.removeChild(modalRoot);
                    }, 0);
                }
            }, [isOpen]);

            return (
                <AppPopupIntroForm
                    app={app}
                    onClose={() => { Submit(); }}
                    onCancel={() => { Cancel(); }}
                    isOpen={isOpen} />
            );
        };

        root.render(<ModalWrapper />);

    });
};

/*
        if(mode==AppConstants.MODE_READ){
            setAppProgLang(proglangsNames[0]);
            setAppType(apptypesNames[0]);
        }
        else if(mode==AppConstants.MODE_UPDATE || mode==AppConstants.MODE_READ){
            setAppProgLang(app.proglanguage);
            setAppType(app.apptype);
        }
*/