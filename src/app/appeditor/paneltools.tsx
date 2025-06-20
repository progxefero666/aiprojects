//src\app\appeditor\paneltools.tsx


/**
 * JSX Component layout secondary column
 * Application Editor Tools
 */
export interface ApplicationEditorToolsProp {
    ontoolsmessage: (message: string) => void;
}
export default function ApplicationEditorTools({ ontoolsmessage }: ApplicationEditorToolsProp) {

    return (
        <div className="w-full min-h-screen flex-col p-2">
            Editor Tools
        </div>
    )

}//end comp