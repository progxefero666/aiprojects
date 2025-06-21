//src\app_front\uimodel\uimodelbars.ts

import { AppConstants } from "@/lib/arquitect/appconstants";
import { BarButtonsCfg } from "@/libcomp/model/barbuttonscfg";

// template: BARCFG_OPEN
export const BARCFG_DELETE_OPEN: BarButtonsCfg = new BarButtonsCfg(
    [AppConstants.ACT_ITEM__DELETE,AppConstants.ACT_OPEN],
    [AppConstants.ACT_ITEM__DELETE,AppConstants.ACT_OPEN],
    [AppConstants.COLOR_DELETE,AppConstants.COLOR_ACT_OPEN],
    [AppConstants.ICON_DELETE,AppConstants.ICON_OPEN],
    [false,false],
    [true,true]
);

export const BARCFG_EDITION: BarButtonsCfg = new BarButtonsCfg(
    [AppConstants.MODE_EDITION,       AppConstants.ACT_SAVE],
    [AppConstants.MODE_EDITION,       AppConstants.ACT_SAVE],
    [AppConstants.COLOR_MODE_EDITION, AppConstants.COLOR_ACT_SAVE],
    [AppConstants.ICON_MODE_EDITION,  AppConstants.ICON_ACT_SAVE],
    [false,false],
    [true, false]
);