//src\app_front\uimodel\uimodelbars.ts

import { BarButtonsConfig } from "@/types/types";

//
export const BARCFG_DELETE_OPEN: BarButtonsConfig = {
    operations: ["delete", "open"],
    texts: ["delete", "open"],
    disabled: [false, false],
    color: ["btn-info", "btn-success"],
    icons: ["none", "none"]
}