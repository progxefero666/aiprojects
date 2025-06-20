import { Option } from "@/lib/common/model/base/option";


/**
 * class AppEditorConfig
 * AppEditorConfig.MENU_OPT_COLOR_DEF
 * AppEditorConfig.MENU_OPT_ACT_COLOR_DEF
 */
export class AppEditorConfig {

    public static readonly MENU_OPT_COLOR: string = "btn-accent";
    public static readonly MENU_OPT_ACT_COLOR: string = "btn-warning";

    public static readonly SECTION_MAIN: Option = new Option
        ("main", "Main", "application entity data");

    public static readonly SECTION_DOCS: Option = new Option
        ("docs", "Documents", "application analisis documents collection");

    public static readonly SECTION_TASKS: Option
        = new Option("task", "Tasks", "application task collections");


    public static readonly SECTIONS: Option[]=[
        AppEditorConfig.SECTION_MAIN,
        AppEditorConfig.SECTION_DOCS,
        AppEditorConfig.SECTION_TASKS
    ];

    public static readonly ACTIVE_SECTION: Option = AppEditorConfig.SECTIONS[0];

}//end class