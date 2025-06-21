//src\app\appeditor\primarybar.tsx


/**
 * JSX Component layout secondary column
 * Application Editor Tools
 */
export interface PagePrimaryBarProp {
    onmessage?: (message: string) => void;
}
export default function PagePrimaryBar({ onmessage }: PagePrimaryBarProp) {

    return (
        <div className="w-full min-h-screen flex flex-col p-2">
            Editor Tools
        </div>
    )

}//end comp