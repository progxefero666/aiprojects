//src\app_front\manapplications\appeditorcfg.ts

import { Option } from "@/lib/common/model/base/option";


/**
 * class CodeGenCfg.SECTIONS
 */
export class CodeGenCfg {

    public static readonly SECTION_MAIN: Option = new Option
        ("default", "default", "default section");

    public static readonly SECTION_B: Option = new Option
        ("utils", "utils", "section utils");

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

    public static readonly MSG_SAVE_APP_ERROR: string = "!! CodeGen message !!";


}//end class