//src\app\codegen\motor\sql\sqlprocess.ts


import { ModelTable } from "./sqlmodel";
import {fieldtypes} from "./sqltypes.json";

/**
 * class CodeGenSqlProcess.getEsquemaTables(text):ModelTable[] 
 */
export class CodeGenSqlProcess {

    public static readonly WORD_CREATE_TABLE:string = "CREATE TABLE";
    public static readonly WORD_ALTER_TABLE:string = "ALTER TABLE";
    public static readonly WORD_PRIMARY_KEY:string = "PRIMARY KEY";
    public static readonly WORD_FOREIGN_KEY:string = "FOREIGN KEY";
    public static readonly WORD_REFERENCES:string = "REFERENCES";

    public static getEsquemaTables(scriptSql:string):ModelTable[] {
        let tables:ModelTable[] = [];

        return tables;
    }


}//end class

/*
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
*/