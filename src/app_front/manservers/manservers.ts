//src\app_front\manservers\manservers.ts

import { Server } from "@/client/models/Server";
import { CollCommands } from "@/lib/common/collection/collcommands";
import { CtrlCollectionByKey } from "@/lib/common/collection/ctrlcollbyid";


//export class ViControlGrImages extends CtrlCollectionByIndex<XImage> {

/**
 * class ManagerServers
 */
export class ManagerServers extends CtrlCollectionByKey<Server> {

    constructor(){
        super();
    }

    public execOperation = (opId: string,element?:Server|null,elementId?:number|null): boolean => {
        let result = false;

        if (opId == CollCommands.OPID_INSERT) {
            super.insert(element!);
        }

        else if (opId == CollCommands.OPID_UPDATE) {
            super.update(elementId!,element!)
        }

        else if (opId == CollCommands.OPID_DELETE) {
            super.delete(elementId!);
        } 

        else if (opId == CollCommands.OPID_DELETEALL) {
            super.deleteAll();
        }
        
        return result;
    }//end 

}//end class