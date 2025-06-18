//src\libcomp\xuicomp\modal\putemplate.tsx

import React, { useState, useEffect } from 'react';
import { createRoot } from "react-dom/client";
import { AppThemifyIcons } from "@/style/appthicons";
import { ThemeColors } from "@/style/apptheme";

/*
showPopupTemplate("¿Estás seguro de que deseas eliminar este elemento?").then(({ confirmed }) => {
  if (confirmed) {
    console.log("El usuario confirmó la acción.");
    // Realizar la acción de eliminación aquí
  } else {
    console.log("El usuario canceló la acción.");
  }
});
*/

interface PopupTemplateIfc {
    message: string;
    onClose: () => void;
    onCancel: () => void;
    isOpen: boolean;
}

export const PopupTemplate = ({ message, onClose, onCancel, isOpen }: PopupTemplateIfc) => {

    const iconsize ="xs";
    const icons_size: string = iconsize ?? AppThemifyIcons.DEF_SIZE; 
    const icon_ok = AppThemifyIcons.TI_CHECK;
    const icon_cancel = AppThemifyIcons.TI_CLOSE;
           
    const icon_ok_class= AppThemifyIcons.getIconClass(icon_ok,icons_size);
    const icon_cancel_class= AppThemifyIcons.getIconClass(icon_cancel,icons_size);

    return (
        <dialog open={isOpen} className="modal">

            <div className="modal-box w-fit">

                <div className="w-full">
                    <p>{message}</p>
                </div>

                {/* Botones */}
                <div className="modal-action flex justify-center mt-4">
                    <form method="dialog">

                        <button
                            className="btn btn-primary mr-2"
                            onClick={(e) => {
                                e.preventDefault();
                                onClose();}}>
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
export const showPopupTemplate = (message: string): Promise<{ confirmed: boolean }> => {
    return new Promise((resolve) => {

        const modalRoot = document.createElement("div");
        document.body.appendChild(modalRoot);
        const root = createRoot(modalRoot);

        const ModalWrapper = () => {
            const [isOpen, setIsOpen] = useState(true);

            const handleConfirm = () => {
                setIsOpen(false);
                resolve({ confirmed: true });
            };

            const handleCancel = () => {
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
                <PopupTemplate message={message}
                    onClose={() => { handleConfirm(); }}
                    onCancel={() => { handleCancel(); }}
                    isOpen={isOpen} />
            );
        };

        root.render(<ModalWrapper />);

    });
};