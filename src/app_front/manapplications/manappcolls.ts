//src\app_front\manager\manappcolls.ts


import { ProgLanguage } from "@/client/models/ProgLanguage";
import { AppType } from "@/client/models/AppType";
import { DocCategory } from "@/client/models/DocCategory";
import { DocType } from "@/client/models/DocType";

import { ProgLangCodeService } from "@/client/service/ProglanguagesService";
import { ApptypesService } from "@/client/service/ApptypesService";
import { DocTypesService } from "@/client/service/DoctypesService";
import { DocCategoriesService } from "@/client/service/DoccategoriesService";


/**
 * Manager Common Collections
 */
export class ManCmmCollections {

    private codelangs: ProgLanguage[] = [];
    private apptypes: AppType[] = [];
    
    private doccats: DocCategory[] = [];
    private doctypes: DocType[] = [];

    public codelangsNames:string[]= [];
    public apptypesNames:string[] = [];
    public doctypesNames: string[] = [];
    public doccatNames: string[] = [];

    constructor() {
        this.chargeInitCollections();
        this.chargeNamesCollections();
    }

    private async chargeInitCollections() {
        this.codelangs = await ProgLangCodeService.getAll();
        this.apptypes  = await ApptypesService.getAll();
        this.doctypes = await DocTypesService.getAll();
        this.doccats = await DocCategoriesService.getAll();    
    }

    private async chargeNamesCollections() {
        this.codelangsNames = [];
        this.apptypesNames = [];
        this.doctypesNames= [];
        this.doccatNames = [];    
        for(let idx=0;idx<this.codelangs.length;idx++)
            {this.codelangsNames.push(this.codelangs[idx].name);}
        for(let idx=0;idx<this.apptypes.length;idx++)
            {this.apptypesNames.push(this.apptypes[idx].name); }
        for(let idx=0;idx<this.doctypes.length;idx++)
            {this.apptypesNames.push(this.doctypes[idx].name);}                       
        for(let idx=0;idx<this.doccats.length;idx++)
            {this.apptypesNames.push(this.doccats[idx].name);}         
    }

    public outputConsole(){
        console.log(this.codelangs);
        console.log(this.apptypes);
        console.log(this.doctypes);
        console.log(this.doccats);
    }
}//end manager