//src\app_front\modules\projects\appprojects.ts
import {Application} from "@/client/models/Application"
import { ApplicationsService } from "@/client_aidatabase/ApplicationsService";

/**
 * Manager Application id db
 * router.push("/module/aiprojects/manproyect");
 */
export class ManagerAplications {

    public listapps: Application[] = [];
    public listappsNames:string[]= [];
    public appSelIndex:number = -1;
    public appSel:Application|null=null;

    constructor() {
        this.chargeListApps();
    }

    private async chargeListApps() {
        this.listapps = await ApplicationsService.getAll();
        alert(this.listapps.length);
        if(this.listapps.length>0){
            this.appSelIndex = 0;
            this.selectAppByIndex(this.appSelIndex);
            
            for(let idx=0;idx<this.listapps.length;idx++)
                {this.listappsNames.push(this.listapps[idx].name);}  
        }      
    }

    public selectAppByIndex(index:number){
        this.appSel = this.listapps[index];
    }
} //end manager
