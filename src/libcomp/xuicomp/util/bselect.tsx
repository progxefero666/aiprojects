//src\lib\xuicomp\common\bselect.tsx

export interface XSelectIfc {
    name: string;
    collection: string[];
    classname?: string;
    defaultvalue: string;
    onselect: (name: string, result: string) => void;

}
export function XSelect({ name, collection, defaultvalue, onselect, classname }: XSelectIfc) {

    const handleOnChange = (value: string) => {
       onselect(name,value);
    }

    const renderContent = () => (
        <>
            <select name={name} className="select w-full"
                defaultValue={defaultvalue}
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