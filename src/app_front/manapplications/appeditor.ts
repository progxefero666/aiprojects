import { Section } from "@/lib/arquitect/model/section";


/**
 * class AppEditorConfig
 */
export class AppEditorConfig {

    public static readonly SECTION_MAIN: Section = new Section
        ("main", "Main", "application entity data");

    public static readonly SECTION_DOCS: Section = new Section
        ("docs", "Documents", "application analisis documents collection");

    public static readonly SECTION_TASKS: Section
        = new Section("task", "Tasks", "application task collections");


    public static readonly SECTIONS: Section[]=[
        AppEditorConfig.SECTION_MAIN,
        AppEditorConfig.SECTION_DOCS,
        AppEditorConfig.SECTION_TASKS
    ];

    public static readonly ACTIVE_SECTION: Section = AppEditorConfig.SECTIONS[0];

}//end class