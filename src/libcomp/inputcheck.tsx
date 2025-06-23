//src\lib\xuicomp\form\inputcheckbox.tsx

import { forwardRef } from "react";


// classname?: string;
    // 🟢<h2>💊 Pills (Píldoras)</h2>
    //✅


export interface InputCheckIfc {    
    classname?: string;
    name?: string;
    label?: string;
    inline?: boolean;
    readonly?: boolean;    
    disabled?:boolean;
    defaultvalue?: boolean;
    onchange?: (result:boolean,name?:string) => void;    
   
}
export const InputCheck = forwardRef<HTMLInputElement, InputCheckIfc>(
    ({name,classname,readonly,disabled,inline,defaultvalue,label,onchange},ref) => {

        const handleOnChange = (value: boolean) => {
            if (onchange) {

            }
        }

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

        return defaultvalue ? (
            <div className={name}>{renderContent()}</div>
        ) : (
            renderContent()
        );
    }
);