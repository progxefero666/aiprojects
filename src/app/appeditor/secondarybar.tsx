//src\app\appeditor\paneltools.tsx


/**
 * JSX Component layout secondary column
 * Application Editor Tools
 */
export interface PageSecondaryBarProp {
    onmessage?: (message: string) => void;
}
export default function PageSecondaryBar({ onmessage }: PageSecondaryBarProp) {

    return (
        <div className="w-full min-h-screen flex flex-col p-2">
            Editor Tools
        </div>
    )

}//end comp