//src\app_front\uimodel\uimodelbars.ts

import { BarButtonsConfig } from "@/types/types";

export const BARCFG_EDITION: BarButtonsConfig = {
    operations: ["delete","edit","save"],
    texts:      ["delete", "edit","save"],
    disabled:   [false, false, true],
    color:      ["btn-info", "btn-success","btn-error"],
    icons:      ["ti-trash","ti-write","ti-save"]
}

export const BARCFG_DELETE_OPEN: BarButtonsConfig = {
    operations: ["delete", "edit"],
    texts: ["delete", "edit"],
    disabled: [false, false],
    color: ["btn-info", "btn-success"],
    icons: ["none", "none"]
}