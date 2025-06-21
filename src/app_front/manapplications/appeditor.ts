//src\app_front\manapplications\appeditorcfg.ts

import { Option } from "@/lib/common/model/base/option";


/**
 * class AppEditorConfig
 * AppEditorConfig.ACTIVE_SECTION
 * AppEditorConfig.MENU_OPT_ACT_COLOR_DEF
 */
export class AppEditorCfg {

    public static readonly MENU_OPT_COLOR: string = "btn-accent";
    public static readonly MENU_OPT_ACT_COLOR: string = "btn-warning";

    public static readonly SECTION_MAIN: Option = new Option
        ("main", "Main", "application entity data");

    public static readonly SECTION_DOCS: Option = new Option
        ("docs", "Documents", "application analisis documents collection");

    public static readonly SECTION_TASKS: Option
        = new Option("task", "Tasks", "application task collections");


    public static readonly SECTIONS: Option[]=[
        AppEditorCfg.SECTION_MAIN,
        AppEditorCfg.SECTION_DOCS,
        AppEditorCfg.SECTION_TASKS
    ];

    public static readonly ACTIVE_SECTION: Option = AppEditorCfg.SECTIONS[0];

}//end class

/**
 * AppEditorMessages.MSG_SAVE_APP_ERROR
 */
export class AppEditorMessages {

    public static readonly MSG_SAVE_APP_ERROR: string = "!! Error saving app !!";
    public static readonly MSG_SAVE_APP_SUCCESS: string = "!! Save Application Success !!"; 


}//end class