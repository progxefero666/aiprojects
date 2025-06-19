//src\app_front\manservers\manservers.ts

import { Agent } from "@/client/models/Agent";
import { Server } from "@/client/models/Server";
import { CollCommands } from "@/lib/common/collection/collcommands";
import { CtrlCollectionByKey } from "@/lib/common/collection/ctrlcollbyid";


/**
 * class Manager AI Agents
 */
export class ManagerAgents extends CtrlCollectionByKey<Agent> {

    constructor(){
        super();
    }

    public execOperation = (opId: string,element?:Agent|null,elementId?:number|null): boolean => {
        let result = false;

        if (opId == CollCommands.OPID_INSERT) {
            result = super.insert(element!);
        }

        else if (opId == CollCommands.OPID_UPDATE) {
            result = super.update(elementId!,element!)
        }

        else if (opId == CollCommands.OPID_DELETE) {
            result = super.delete(elementId!);
        } 

        else if (opId == CollCommands.OPID_DELETEALL) {
            result = super.deleteAll();
        }
        
        return result;
    }//end 

}//end class