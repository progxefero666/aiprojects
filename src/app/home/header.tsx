//src\app\home\pageheader.tsx


import { Search } from "@/libcomp/search";
import { AppThemifyIcons } from "@/style/appthicons";
import { ButtonOld } from "@/libcomp/button_old";


/**
 * Ai Manager Projects Header
 */
export interface DesktopHeaderProps {
     onaddapplication: () => void;
}
export default function PageHeader({ onaddapplication }: DesktopHeaderProps) {

    const maxLen: number = 50;
    const onSearchSubmit = (value:string): void => {
    }

    const executeOperation = (op_id?: string): void => {
    }

    const onButtonAddClick = () => {
        
    };

    return (

        <div className="w-full h-auto grid grid-cols-[17%_65%_17%] pt-[12px] pb-[6px]">

            {/*column left */}
            <div className="w-full flex flex-row items-center px-2 top-2">
                <div className="flex-1 flex items-center text-white text-2xl translate-y-[-4px]">
                    AI Projects
                </div>
                <div>
                    <ButtonOld
                        callback={executeOperation}
                        operation={"nav_back"}
                        iconname={AppThemifyIcons.TI_BACK}
                        iconcolor="white" />
                </div>
            </div>

            {/*column center */}
            <div className="w-full flex flex-row pl-[6px]">

                <div className="w-auto mr-[12px]">
                    <button className="btn btn-md btn-success text-md"
                            onClick={onButtonAddClick}>
                                add
                    </button>                    
                </div>

                <div className="w-[26%] flex flex-items-center" >
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
