//src\app_front\manapplications\appeditorcfg.ts

import { Option } from "@/lib/common/model/base/option";


/**
 * class CodeGenCfg.TYPESCRIPT_FORMATS
 */
export class CodeGenCfg {

    public static readonly TYPESCRIPT_FORMATS:string = ".ts,.tsx"

    public static readonly CREATE_MODEL: Option = new Option
        ("create_typescript_model_from_sql", "Model by SQL", "create typescript model from sql");

    public static readonly SECTION_SERVICE: Option = new Option
        ("create_model_service", "Model Service", "create model service");
        
    public static readonly SECTION_MODEL_CARD: Option = new Option
        ("create_model_card", "Model Card", "create model card");


    public static readonly SECTIONS: Option[]=[
        CodeGenCfg.CREATE_MODEL,
        CodeGenCfg.SECTION_SERVICE
    ];

    public static readonly ACTIVE_SECTION: Option = CodeGenCfg.SECTIONS[0];

}//end class

/**
 * AppEditorMessages.MSG_SAVE_APP_ERROR
 */
export class CodeGenCfgMessages {

    public static readonly MSG_SAVE_APP_ERROR: string = "!! Files charged correct. !!";


}//end class