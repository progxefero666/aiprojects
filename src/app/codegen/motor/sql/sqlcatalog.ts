//src\app\codegen\motor\sql\sqlcatalog.ts

import {fieldtypes} from "./sqltypes.json";

/**
 * class CodeGenCfg.TYPESCRIPT_FORMATS
 */
export class SqlCatalog {

    public static readonly WORD_CREATE_TABLE:string = "CREATE TABLE";
    public static readonly WORD_ALTER_TABLE:string = "ALTER TABLE";
    public static readonly WORD_PRIMARY_KEY:string = "PRIMARY KEY";
    public static readonly WORD_FOREIGN_KEY:string = "FOREIGN KEY";
    public static readonly WORD_REFERENCES:string = "REFERENCES";

}