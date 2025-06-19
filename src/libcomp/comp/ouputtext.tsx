//src\lib\xuicomp\form\inputtext.tsx

import { forwardRef, useState } from "react";

export interface OutputTextIfc {
    value: string;
    label?: string;
    classname?: string;    
    maxlen?: number;
}
export function OutputText({ value, classname, label }: OutputTextIfc) {
    const renderContent = () => (
        <div className="input w-full bg-gray-700 rounded-md">
            <p>{value}</p>
        </div>
    );

    // Decide si envolver el contenido en un div con className o no
    return  (
        <div className="w-full h-auto rounded-md">
            {label && <p className="w-full p-0 mx-0 mt-0 mb-1">{label}</p>}
            {renderContent()}
        </div>
    ) 
}

