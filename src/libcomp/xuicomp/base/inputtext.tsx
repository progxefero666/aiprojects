//src\lib\xuicomp\form\inputtext.tsx

import { forwardRef, useState } from "react";

export interface InputTextProps {
    disabled?:boolean;
    name: string;
    classname?: string;
    label?: string;
    defaultvalue?: string;
    onchange?: (name: string, result: unknown) => void;
    placeholder?: string;
    maxlen: number;
}
export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
    ({name,disabled,classname,label,placeholder,defaultvalue,maxlen},ref) => {

        const handleOnChange = (value: string) => {
            if (onchange) {
            }
        }

        const renderContent = () => (
            <>
                {label && <label className="w-full">{label}</label>}
                <input
                    name={name}
                    className="input w-full"
                    ref={ref}
                    type="text"
                    placeholder={placeholder}
                    defaultValue={defaultvalue}
                    onChange={(e) => handleOnChange(e.target.value)}
                    maxLength={maxlen} />
            </>
        );

        // Decide si envolver el contenido en un div con className o no
        return classname ? (
            <div className={classname}>{renderContent()}</div>
        ) : (
            renderContent()
        );
    }
);
