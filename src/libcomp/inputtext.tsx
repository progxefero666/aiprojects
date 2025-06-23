//src\lib\xuicomp\form\inputtext.tsx

import { forwardRef, useEffect, useState } from "react";


interface InputTextProps {
    name: string;
    inline?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    classname?: string;
    label?: string;
    placeholder?: string;
    defaultvalue?: string;
    maxlen?: number;
    autofocus?: boolean;  // Añadir esta prop
    onchange?: (value: string) => void;  // Si la usas
}

/*
rounded-md
    const contStyle: string = "w-full h-auto flex items-center grid grid-cols-[35%_65%] px-[8px]";
    const cellStyle:string = "w-full h-auto";

    return (
        <div className={contStyle}>
            <div className={cellStyle}>
                {label}
            </div>
            <div className={cellStyle}>
                {children}
            </div>
        </div>
    );
*/

const editable_style:string = "input w-full bg-gray-700 rounded-md";
const readonly_style:string = "input w-full bg-gray-700 rounded-md";

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
    ({name, inline, readonly,disabled, classname, label, placeholder, defaultvalue, maxlen, autofocus, onchange }, ref) => {

        const handleOnChange = (value: string) => {
            if (onchange) {
                onchange(value);
            }
        }


        const inputClassName = "input w-full";

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
