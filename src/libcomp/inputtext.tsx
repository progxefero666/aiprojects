//src\lib\xuicomp\form\inputtext.tsx

import { forwardRef, useEffect, useState } from "react";
interface InputTextProps {
    name: string;
    disabled?: boolean;
    classname?: string;
    label?: string;
    placeholder?: string;
    defaultvalue?: string;
    maxlen?: number;
    autofocus?: boolean;  // Añadir esta prop
    onchange?: (value: string) => void;  // Si la usas
}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
    ({ name, disabled, classname, label, placeholder, defaultvalue, maxlen, autofocus, onchange }, ref) => {

        const handleOnChange = (value: string) => {
            if (onchange) {
                onchange(value);
            }
        }

        /*
        useEffect(() => {
            if (autofocus && ref && typeof ref !== 'function') {
                ref.current?.focus(); 
            }
        }, [autofocus, ref]);
        */

        const inputClassName = classname && classname.includes('flex-1') 
            ? "input w-full bg-gray-700 rounded-md flex-1" 
            : "input w-full bg-gray-700 rounded-md";

        const renderContent = () => (
            <>
                {label && <p className="w-full p-0 mx-0 mt-0 mb-1">{label}</p>}
                <input
                    autoFocus={autofocus}
                    name={name}
                    className={inputClassName}
                    ref={ref}
                    type="text"
                    placeholder={placeholder}
                    defaultValue={defaultvalue}
                    onChange={(e) => handleOnChange(e.target.value)}
                    maxLength={maxlen}
                    disabled={disabled}
                />
            </>
        );

        return classname ? (
            <div className={classname}>{renderContent()}</div>
        ) : (
            renderContent()
        );
    }
);
