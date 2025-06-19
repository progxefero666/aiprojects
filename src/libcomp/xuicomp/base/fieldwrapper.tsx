//src\libcomp\xuicomp\base\fieldwrapper.tsx


//cell_style?: string;
//className?: string;
interface FieldWrapperIfc {
    children: React.ReactNode;    
    label: string;    
}
export const FieldWrapper = (({ children,label }: FieldWrapperIfc) => {

    const contStyle: string = "w-full h-auto flex items-center grid grid-cols-[35%_65%] px-[8px]";
    const cellStyle:string = "w-full h-auto";

    return (
        <div className={contStyle}>
            <div className={cellStyle}>
                {label}
            </div>
            <div className={cellStyle}>
                {children}
            </div>
        </div>
    );

});
