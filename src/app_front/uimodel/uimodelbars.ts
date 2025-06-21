//src\app_front\uimodel\uimodelbars.ts

import { AppConstants, AppUiConst } from "@/app_front/appconstants";
import { BarButtonsCfg } from "@/libcomp/model/barbuttonscfg";

// template: BARCFG_OPEN
export const BARCFG_DELETE_OPEN: BarButtonsCfg = new BarButtonsCfg(
    [AppConstants.ACT_ITEM__DELETE,AppConstants.ACT_OPEN],
    [AppConstants.ACT_ITEM__DELETE,AppConstants.ACT_OPEN],
    [AppUiConst.COLOR_DELETE,AppUiConst.COLOR_ACT_OPEN],
    [AppUiConst.ICON_DELETE,AppUiConst.ICON_OPEN],
    [false,false],
    [true,true]
);

export const BARCFG_EDITION: BarButtonsCfg = new BarButtonsCfg(
    [AppConstants.MODE_EDITION,       AppConstants.ACT_SAVE],
    [AppConstants.MODE_EDITION,       AppConstants.ACT_SAVE],
    [AppUiConst.COLOR_MODE_EDITION, AppUiConst.COLOR_ACT_SAVE],
    [AppUiConst.ICON_MODE_EDITION,  AppUiConst.ICON_ACT_SAVE],
    [false,false],
    [true, false]
);