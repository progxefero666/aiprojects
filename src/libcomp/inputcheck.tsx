//

//src\lib\xuicomp\form\inputtext.tsx

import { AppTheme } from "@/app_front/apptheme";
import { forwardRef, useEffect, useState } from "react";

interface InputCheckIfc {
    name: string;
    inline?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    label?: string;
    placeholder?: string;
    defaultvalue?: boolean;
    maxlen?: number;
    autofocus?: boolean; 
    onchange?: (value: string) => void;
}
export const InputCheck = forwardRef<HTMLInputElement, InputCheckIfc>(({
                name, label,placeholder,defaultvalue,
                inline, readonly, disabled, autofocus, onchange }, ref) => {

        const showInline:boolean = inline ?? false;
        const isReadOnly:boolean = readonly ?? false;
        const isDisabled:boolean = disabled ?? false;


        const handleOnChange = (value: boolean) => {
            if (onchange) {

            }
        }
        const renderReadComp = () => {
            return (
                <div className={AppTheme.C_READONLY_STYLE}>
                    <p>{defaultvalue}</p>
                </div>          
            )  
        }

        const renderEditComp = () => {
            let cell_style:string = "";
            if(isDisabled){cell_style = AppTheme.C_DISABLED_STYLE;}
            else          {cell_style = AppTheme.C_EDIT_STYLE;}

            return (
                <div className={cell_style}>
                <input  ref={ref} type="checkbox"
                        className={AppTheme.INPUT_CHECK_STYLE}                                                
                        defaultChecked={defaultvalue}                                
                        onChange={(e) => handleOnChange?.(e.target.checked)}
                        disabled={disabled} />              
                </div>
            ) 
        }

        const renderRowSimpleContent = () => {
            return (
                <div className={AppTheme.C_CELL_STYLE}>
                    {isReadOnly ? renderReadComp() : 
                                  renderEditComp() }
                </div>
            )            
        }
        
        const renderRowLabelContent = () => { 
            return (
                <div className={AppTheme.C_INCLABEL_ROW_STYLE}>
                    <div className={AppTheme.C_CELL_STYLE}>
                        {label}
                    </div>
                    {renderRowSimpleContent()}
                </div>
            )        
        }
 
        const renderColSimpleContent = () => {
            return (            
                <div className={AppTheme.C_CELL_STYLE}>
                    {isReadOnly ? renderReadComp() : 
                                  renderEditComp() }                        
                </div>
            )             
        }

        const renderColLabelContent = () => {
            return (
                <div className={AppTheme.C_INCLABEL_COL_STYLE}>
                    {label}      
                    {renderColSimpleContent()}                                       
                </div>
            )        
        }        

        return (
            <>
            {showInline?
                label ? renderRowLabelContent() :
                        renderRowSimpleContent()
            :
                label ? renderColLabelContent() :
                        renderColSimpleContent()
            }                      
            </>
        )
    }

)//end component
