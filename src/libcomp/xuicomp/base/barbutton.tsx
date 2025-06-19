//src\libcomp\xuicomp\base\barbutton.tsx

import { AppThemifyIcons } from "@/style/appthicons";
import { AppUIButtons } from "@/style/appui";
import { DataConstants } from "@/lib/common/app/dataconstants";

export interface BarButtonsIfc {
    onclick: (operation: string) => void;
    operations:string[];
    btnstext?: string;    
    btnsdisabled: boolean[];
    btnscolor: string[];
    btnsize?: string;
    iconsize?: string;       
    iconsname?: string;
    iconscolor?: string;
}
export function BarButtons({onclick,operations,btnstext,btnsdisabled,btnscolor,iconsname}: BarButtonsIfc) {

    /*
       <ul className="list w-full flex flex-col space-y-2">
            {pageElements.map((mmImage, index) => {
                    <renderElement({
                        mmImage,
                        className: 'w-full h-15 pl-3 pr-1 flex bg-sky-400 border-y border-base-300',
                        rowIndex,
                        selectElement,
                        executeOpElement,
                    />
            })}
        </ul>    
    */

    return (
        <>

        </>
    )

}//end component