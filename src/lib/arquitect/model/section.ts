//src\lib\arquitect\model\section.ts

import { DataConstants } from "@/lib/common/app/dataconstants";

/**
 * class Section
 */
export class Section {

    public name: string;
    public title: string;
    public logo: string;
    public description: string;

    constructor(name: string, title: string,description?:string,logo?:string) {
        this.name = name;
        this.title = title;
        this.logo = logo ?? DataConstants.UNDEFINED;
        this.description = description  ?? DataConstants.UNDEFINED;
    }

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    }

    public static build(jsonString: string): Section {
        const obj = JSON.parse(jsonString);
        return new Section(obj.name, obj.title, obj.logo, obj.description);
    }

}//end class