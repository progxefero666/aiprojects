//src\app\codegen\motor\model\relation.ts

import { AppConstants } from "@/app_front/appconstants";


/**
 * class Field
 */
export class Relation {
    
    public table:string = AppConstants.NOT_DEF;    
    public field:string = AppConstants.NOT_DEF;
 
    constructor(table:string,field:string){
        this.table = table;
        this.field = field;
    }

}//end 
