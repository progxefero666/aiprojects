//src\app_front\desktop\desktop.ts

import { AppModule } from "@/lib/arquitect/model/appmodule";

/**
 * class Desktop.ACTIVE_MOD
 */
export class Desktop {

    public static readonly MOD_AIAPPS: AppModule    = new AppModule("application","AI Applications");
    public static readonly MOD_CHATBOT: AppModule   = new AppModule("chatbot","AI Chatbot");
    public static readonly MOD_SERVICES: AppModule  = new AppModule("services","Man. Services");
    public static readonly MOD_SERVERS: AppModule   = new AppModule("servers","Man. Servers");
    public static readonly MOD_AGENTS: AppModule   = new AppModule("agents","Man. Agents");

    public static readonly MODULES: AppModule[] = [
        Desktop.MOD_AIAPPS,
        Desktop.MOD_CHATBOT,
        Desktop.MOD_SERVICES,
        Desktop.MOD_SERVERS,
        Desktop.MOD_AGENTS
    ]
    public static readonly ACTIVE_MOD: AppModule = Desktop.MODULES[0];

}//end class
