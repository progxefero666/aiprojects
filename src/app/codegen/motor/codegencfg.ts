//src\app_front\manapplications\appeditorcfg.ts

import { Option } from "@/lib/common/model/base/option";


/**
 * class CodeGenCfg.TYPESCRIPT_FORMATS
 */
export class CodeGenCfg {

    public static readonly TYPESCRIPT_FORMATS:string = ".ts,.tsx"

    public static readonly SECTION_MAIN: Option = new Option
        ("forms", "forms", "table form insert");

    public static readonly SECTION_B: Option = new Option
        ("services", "services", "table services");

    public static readonly SECTIONS: Option[]=[
        CodeGenCfg.SECTION_MAIN,
        CodeGenCfg.SECTION_B
    ];

    public static readonly ACTIVE_SECTION: Option = CodeGenCfg.SECTIONS[0];

}//end class

/**
 * AppEditorMessages.MSG_SAVE_APP_ERROR
 */
export class CodeGenCfgMessages {

    public static readonly MSG_SAVE_APP_ERROR: string = "!! Files charged correct. !!";


}//end class