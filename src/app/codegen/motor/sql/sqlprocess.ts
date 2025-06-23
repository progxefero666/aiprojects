//src\app_front\manapplications\appeditorcfg.ts

import { Option } from "@/lib/common/model/base/option";


/**
 * class CodeGenCfg.TYPESCRIPT_FORMATS
 */
export class CodeGenSqlProcess {

    public static readonly WORD_CREATE_TABLE:string = "CREATE TABLE";
    public static readonly WORD_ALTER_TABLE:string = "ALTER TABLE";
    public static readonly WORD_PRIMARY_KEY:string = "PRIMARY KEY";
    public static readonly WORD_FOREIGN_KEY:string = "FOREIGN KEY";
    public static readonly WORD_REFERENCES:string = "REFERENCES";

    public static processSqlFile(text:string):string {
        let text_res:string = "";
        return text_res;
    }   

    public static processSqlDataInit(text:string):string {
        let text_res:string = "";
        return text_res;
    }   

    public static processSqlBlockCreate(text:string):string {
        let text_res:string = "";
        return text_res;
    }   

}//end class

/**
 * AppEditorMessages.MSG_SAVE_APP_ERROR
 */
export class CodeGenCfgMessages {

    public static readonly MSG_SAVE_APP_ERROR: string = "!! Files charged correct. !!";


}//end class