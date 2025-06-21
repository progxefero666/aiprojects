//src\libcomp\model\barbuttonscfg.ts


/**
 *     operations: ["delete","edit","save"],
    texts:      ["delete", "edit","save"],
    disabled:   [false, false, true],
    color:      ["btn-info", "btn-success","btn-error"],
    icons:      ["ti-trash","ti-write","ti-save"]
 */

/**
 * class Template
 */
export class BarButtonsCfg {

    public operations:string[]=[];
    public texts:string[]=[];
    public disabled:boolean[]=[];
    public color:string[]=[];
    public icons:string[]=[];

    constructor(operations:string[],texts:string[],color:string[],icons:string[],disabled?:boolean[]){
        this.operations = operations;
        this.texts = texts;
        this.color = color;
        if(icons){this.icons = icons;}
        if(disabled){this.disabled = disabled;}
    }

}//end class