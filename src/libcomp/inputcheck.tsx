//src\lib\xuicomp\form\inputcheckbox.tsx

import { forwardRef } from "react";


export interface InputCheckIfc {
    disabled?:boolean;
    name: string;
    classname?: string;
    label?: string;
    defaultvalue: boolean;
    onchange?: (name: string, result: unknown) => void;
}
export const InputCheck = forwardRef<HTMLInputElement, InputCheckIfc>(
    ({name,disabled,classname,label,defaultvalue,onchange},ref) => {

        const handleOnChange = (value: boolean) => {
            if (onchange) {

            }
        }
    // 🟢<h2>💊 Pills (Píldoras)</h2>
    //✅
        const renderContent = () => (
            <div className="flex items-center">
                {label && <label>{label}</label>}
                <input className="checkbox bg-gray-700 checked:bg-amber-500 text-black text-black border border-gray-300"
                        disabled={disabled}
                        type="checkbox"
                        ref={ref}
                        defaultChecked={defaultvalue}                                
                        onChange={(e) => handleOnChange?.(e.target.checked)} />
            </div>
        );

        return classname ? (
            <div className={classname}>{renderContent()}</div>
        ) : (
            renderContent()
        );
    }
);