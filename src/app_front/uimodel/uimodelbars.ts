//src\app_front\uimodel\uimodelbars.ts

import { AppConstants } from "@/lib/arquitect/appconstants";
import { BarButtonsCfg } from "@/libcomp/model/barbuttonscfg";
import { BarButtonsConfig } from "@/types/types";

/*
const barConfig: BarButtonsConfig = {
    operations: ["open"],
    texts: ["open"],
    disabled: [false],
    color: ["btn-info"],
    icons: [AppThemifyIcons.TI_EYE]
}
*/

// template: BARCFG_OPEN
export const BARCFG_OPEN: BarButtonsCfg = new BarButtonsCfg(
    ["open"],["open"],["btn-info"],["ti-eye"],[false]
);

export const BARCFG_EDITION: BarButtonsCfg = new BarButtonsCfg(
    [AppConstants.ACT_ITEM__DELETE, AppConstants.MODE_EDITION,AppConstants.ACT_SAVE],
    [AppConstants.ACT_ITEM__DELETE, AppConstants.MODE_EDITION,AppConstants.ACT_SAVE],
    [AppConstants.COLOR_DELETE,AppConstants.COLOR_MODE_EDITION,AppConstants.COLOR_ACT_SAVE],
    ["ti-trash","ti-write", "ti-save"],
    [false, false, true]
);

export const BARCFG_EDITION_TYPE: BarButtonsConfig = {
    operations: ["delete", "edit", "save"],
    texts: ["delete", "edit", "save"],
    disabled: [false, false, true],
    color: ["btn-info", "btn-success", "btn-error"],
    icons: ["ti-trash", "ti-write", "ti-save"]
}

export const BARCFG_DELETE_OPEN: BarButtonsConfig = {
    operations: ["delete", "edit"],
    texts: ["delete", "edit"],
    disabled: [false, false],
    color: ["btn-info", "btn-success"],
    icons: ["none", "none"]
}