//src\lib\xuicomp\form\inputselect.tsx

import { forwardRef } from "react";


export interface InputSelectProps {
    disabled?: boolean;
    name: string;
    classname?: string;
    label?: string;
    defaultvalue: string;
    onchange?: (name: string, value: string) => void;
    collection: string[];
}
export const InputSelect = forwardRef<HTMLSelectElement, InputSelectProps>(
    ({name,disabled,classname,label,defaultvalue,collection},ref) => {

        const handleOnChange = (text: string) => {
            if (onchange) {
            }
        }

        const renderContent = () => (
            <>
                {label && <label className="w-full">{label}</label>}
                <select name={name} ref={ref} className="select w-full bg-gray-700"
                    defaultValue={defaultvalue}
                    disabled={disabled}
                    onChange={(e) => handleOnChange(e.target.value)} >

                    {collection.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}
                </select>

            </>
        );

        return classname ?
            (<div className={classname}>{renderContent()}</div>)
            : (renderContent());
    }

);

/*

                    <div className={cell_style}>
                        <div className="w-full h-auto">
                            Type
                        </div>
                        <div className="w-full h-auto">
                            <InputSelect ref={typeRef}
                                disabled={true}
                                onchange={onSelectChange}
                                name="type"
                                defaultvalue={app.apptype}
                                collection={appTypesNames} />
                        </div>
                    </div>

                    <div className={cell_style}>
                        <div className="w-full h-auto">
                            code-lang
                        </div>
                        <div className="w-full h-auto">
                            <InputSelect ref={proglanguageRef}
                                disabled={disabled}
                                onchange={onSelectChange}
                                name="proglanguage"
                                defaultvalue={app.proglanguage!}
                                collection={progLangs} />
                        </div>
                    </div>
*/