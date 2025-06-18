//src\lib\xuicomp\base\button.tsx

import { ThemeColors } from "@/style/apptheme";
import { AppThemifyIcons } from "@/style/appthicons";
import { AppUIButtons } from "@/style/appui";
import { DataConstants } from "@/lib/common/app/dataconstants";


export interface XButtonIfc {    
    callback: (operation?: string) => void; 
    operation?: string;
    btnsize?: string;
    btndisabled?: boolean;
    btncolor?: string;        
    btntext?:string;
    iconname?: string;
    iconcolor?: string;
    iconsize?: string;     
}
export function XButton({ callback,operation,
                              btnsize,btntext,btncolor,btndisabled,
                              iconname,iconsize,iconcolor}: XButtonIfc) {

    const btn_disabled:boolean  = btndisabled ?? false;
    const btn_color: string     = btncolor ?? AppUIButtons.DEF_ICON_COLOR;
    const btn_size: string      = btnsize ?? AppUIButtons.DEF_SIZE;
    const btn_class:string      = AppUIButtons.getButtonClass(btn_color,btn_size);
    const btn_oper: string      = operation ?? DataConstants.UNDEFINED;              

    let iconclass:string = DataConstants.UNDEFINED;
    if(iconname){
        const icon_size: string = iconsize ?? AppThemifyIcons.DEF_SIZE;        
        iconclass= AppThemifyIcons.getIconClass(iconname,icon_size,iconcolor);
    }
    
    const handleOnClick = () => {
        callback(btn_oper);        
    };
    
    return (
        <div className="icon-button" 
                onClick={handleOnClick}>
            {btntext? btntext:null}        
            {iconname ? <div className={iconclass} />:null }            
        </div>        
    )

} //end component

/*
        <button className={btn_class} 
                onClick={handleOnClick} 
                disabled={btn_disabled}>
            {btntext? btntext:null}        
            {iconname ? <div className={iconclass} />:null }            
        </button>        
 const btnclass = AppButtons.getButtonClass(btncolor);
 {RenderIcon(libicon, iconclass)} 
*/