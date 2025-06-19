//src\app\module\aiprojects\manprojects\pageheader.tsx


import { Search } from "@/libcomp/search";
import { XSelect } from "@/lib/devcomp/bselect";

import { InputSelect } from "@/libcomp/inputselect";
import { AppThemifyIcons } from "@/style/appthicons";
import { XButton } from "@/libcomp/button";


/**
 * Ai Manager Projects Header
 */
export interface TemplatePageHeaderIfc {
    defvalue: string;
}
export default function TemplatePageHeader({ defvalue }: TemplatePageHeaderIfc) {

    const maxLen: number = 50;
    const onSearchSubmit = (value:string): void => {
    }

    const executeOperation = (operation_id?: string): void => {
    }

    return (

        <div className="w-full h-auto grid grid-cols-[17%_65%_17%] pt-[12px] pb-[6px]">

            {/*column left */}
            <div className="w-full flex flex-row items-center px-2 top-2">
                <div className="flex-1 flex items-center text-white text-2xl translate-y-[-4px]">
                    AI Projects
                </div>
                <div>
                    <XButton
                        callback={executeOperation}
                        operation={"nav_back"}
                        iconname={AppThemifyIcons.TI_BACK}
                        iconcolor="white" />
                </div>
            </div>

            {/*column center */}
            <div className="w-full flex flex-row">

                <div className="w-[26%]">
                    <Search placeholder="find" maxlen={maxLen}
                               onsubmit={onSearchSubmit}/>
                </div>

            </div>

            {/* column right */}
            <div className="w-full flex flex-row">
                config - user - about
            </div>

        </div>
    )

}//end
