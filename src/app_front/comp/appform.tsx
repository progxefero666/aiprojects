//src\app_front\comp\appform.tsx


import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from "react-dom/client";
import { AppThemifyIcons } from "@/style/appthicons";
import { ThemeColors } from "@/style/apptheme";
import { InputText } from '@/libcomp/xuicomp/base/inputtext';
import { InputSelect } from '@/libcomp/xuicomp/base/inputselect';
import { InputCheckold } from '@/libcomp/xuicomp/base/inputcheckold';
import { AppConstants } from '../appconstants';
import { ProgLangCodeService } from '@/client_aidatabase/ProglanguagesService';
import { ApptypesService } from '@/client_aidatabase/ApptypesService';
import { AppType } from '@/client_old/models/AppType';
import { AppDef } from '../manapplications/applicationdef';
import { Application } from '@/client_old/models/Application';

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

interface ApplicationFormIfc {
    app: Application;
    mode: number;
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
export const ApplicationForm = ({ app, mode, onClose, onCancel, isOpen }: ApplicationFormIfc) => {

    const [disabled, setDisabled] = useState<boolean>(false);

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
        if (mode == AppConstants.MODE_INSERT || mode == AppConstants.MODE_UPDATE) {
            setDisabled(false);
        }
        init();
    }, []);


    const onSelectChange = (name: string, result: string) => {
        if (name == "type") {

        }
        else if (name == "proglanguage") {

        }
    }

    //<input type="checkbox" defaultChecked className="checkbox" />

    return (
        <dialog open={isOpen} className="modal">

            <div className="modal-box w-fit">

                <div className="w-full h-auto flex flex-col">
                    <p>{mode}</p>

                    {mode == AppConstants.MODE_INSERT ?
                        <>
                            <InputText ref={nameRef}
                                label="Name"
                                placeholder="new application"
                                maxlen={AppDef.NAME_MAXLEN}
                                name="name" />

                            <InputSelect ref={typeRef}
                                disabled={disabled}
                                label="Type"
                                onchange={onSelectChange}
                                name="type"
                                defaultvalue={appTypesNames[0]}
                                collection={appTypesNames} />

                            <InputSelect ref={proglanguageRef}
                                disabled={disabled}
                                label="Prog. Language"
                                onchange={onSelectChange}
                                name="proglanguage"
                                defaultvalue={progLangs[0]}
                                collection={progLangs} />

                            <InputText ref={authorRef}
                                label="Auhor"
                                placeholder="new application"
                                maxlen={AppDef.AUTHOR_MAXLEN}
                                name="author" />

                            <InputText ref={osystemRef}
                                label="Op. System"
                                placeholder="new application"
                                maxlen={AppDef.OSSYSTEM_MAXLEN}
                                name="opsystem" />

                            <InputText ref={referenceRef}
                                label="Reference"
                                placeholder="new application"
                                maxlen={AppDef.REFERENCE_MAXLEN}
                                name="reference" />

                            <InputText ref={descriptionRef}
                                label="Description"
                                placeholder="new application"
                                maxlen={AppDef.DESCRIPTION_MAXLEN}
                                name="description" />

                            <InputText ref={urlRef}
                                label="Url"
                                placeholder="new application"
                                maxlen={AppDef.URL_MAXLEN}
                                name="url" />

                            <InputText ref={pathRef}
                                label="Path"
                                placeholder="new application"
                                maxlen={AppDef.PATH_MAXLEN}
                                name="path" />
                        </>
                        : <>
                            <InputText ref={nameRef}
                                disabled={disabled}
                                label="Name"
                                defaultvalue={app.name}
                                maxlen={AppDef.NAME_MAXLEN}
                                name="name" />
                            <InputSelect ref={typeRef}
                                disabled={disabled}
                                label="Type"
                                onchange={onSelectChange}
                                name="type"
                                defaultvalue={app.apptype}
                                collection={appTypesNames} />

                            <InputSelect ref={proglanguageRef}
                                disabled={disabled}
                                label="Prog. Language"
                                onchange={onSelectChange}
                                name="proglanguage"
                                defaultvalue={app.proglanguage!}
                                collection={progLangs} />

                            <InputText ref={authorRef}
                                disabled={disabled}
                                label="Auhor"
                                defaultvalue={app.author}
                                maxlen={AppDef.AUTHOR_MAXLEN}
                                name="author" />

                            <InputText ref={osystemRef}
                                disabled={disabled}
                                label="Op. System"
                                defaultvalue={app.osystem}
                                maxlen={AppDef.OSSYSTEM_MAXLEN}
                                name="opsystem" />

                            <InputText ref={referenceRef}
                                disabled={disabled}
                                label="Reference"
                                defaultvalue={app.reference}
                                maxlen={AppDef.REFERENCE_MAXLEN}
                                name="reference" />

                            <InputText ref={descriptionRef}
                                disabled={disabled}
                                label="Description"
                                defaultvalue={app.description}
                                maxlen={AppDef.DESCRIPTION_MAXLEN}
                                name="description" />

                            <InputText ref={urlRef}
                                disabled={disabled}
                                label="Url"
                                defaultvalue={app.appurl}
                                maxlen={AppDef.URL_MAXLEN}
                                name="url" />

                            <InputText ref={pathRef}
                                disabled={disabled}
                                label="Path"
                                defaultvalue={app.apppath}
                                maxlen={AppDef.PATH_MAXLEN}
                                name="path" />
                        </>}

                    <InputCheckold ref={localdevRef}
                        disabled={disabled}
                        label="Local Dev"
                        defaultvalue={app.localdev!}
                        name="localdev" />

                    <InputCheckold ref={usedockerRef}
                        disabled={disabled}
                        label="Use Docker"
                        defaultvalue={app.usedocker!}
                        name="usedocker" />

                    <InputCheckold ref={controlusersRef!}
                        disabled={disabled}
                        label="Control Users"
                        defaultvalue={app.controlusers!}
                        name="controlusers" />

                    <InputCheckold ref={useuiRef}
                        disabled={disabled}
                        label="Use UI"
                        defaultvalue={app.useui!}
                        name="useui" />

                    <InputCheckold ref={useagentsRef}
                        disabled={disabled}
                        label="Use Agents"
                        defaultvalue={app.useagents!}
                        name="useagents" />

                    <InputCheckold ref={consumedbRef}
                        disabled={disabled}
                        label="Consume db"
                        defaultvalue={app.consumedb!}
                        name="consumedb" />

                    <InputCheckold ref={consumeapiRef}
                        disabled={disabled}
                        label="Consume Api"
                        defaultvalue={app.consumeapi!}
                        name="consumeapi" />

                    <InputCheckold ref={consumeaiRef}
                        disabled={disabled}
                        label="Consume AI"
                        defaultvalue={app.consumeai!}
                        name="consumeai" />

                    <InputCheckold ref={exposedbRef}
                        disabled={disabled}
                        label="Expose Db"
                        defaultvalue={app.exposedb!}
                        name="exposedb" />

                    <InputCheckold ref={exposeapiRef}
                        disabled={disabled}
                        label="Expose AI"
                        defaultvalue={app.exposeapi!}
                        name="exposeapi" />
                </div>

                {/* Botones proglanguage */}
                <div className="modal-action flex justify-center mt-4">
                    <form method="dialog">

                        <button
                            className="btn btn-primary mr-2"
                            onClick={(e) => {
                                e.preventDefault();
                                onClose();
                            }}>
                            <div className={icon_ok_class} />
                            OK
                        </button>

                        <button
                            className="btn btn-secondary"
                            onClick={(e) => {
                                e.preventDefault();
                                onCancel();
                            }}>
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
export const showApplicationForm = (app: Application, mode: number): Promise<{ confirmed: boolean }> => {
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
                <ApplicationForm
                    app={app}
                    mode={mode}
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