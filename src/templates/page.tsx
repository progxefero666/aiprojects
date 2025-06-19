//src\app\module\aiprojects\manproyect\page.tsx
"use client";

import { useEffect, useState } from "react";


import { useRouter } from "next/navigation";
import { useClientReady } from "@/lib/react/hook/useclientready";

import { CardProject } from "../../public/docs/cardproyect";
import TemplatePageHeader from "./pageheader";


export default function TemplatePage() {
    const router = useRouter();
    const [value, setValue] = useState<string>("template");

    const init = async () => {
        setValue("template init");
    }

    useEffect(() => {
        init();
    }, []);

    const onTemplateEvent = (value: string) => {
    }

    const clientReady = useClientReady();
    if (!clientReady) { return <div>Loading...</div>; }


    const renderMainContent = () => {
        return (
            <p>Template Main Content</p>            
        );
    }

    return (
        <div id="cont_root" className="w-full h-auto bg-gray-900 " >

            {/* header */}
            <TemplatePageHeader defvalue="none" />

            {/* body */}
            <div className="w-full h-auto grid grid-cols-[17%_65%_17%]">

                {/* column left */}
                <div className="w-full min-h-screen flex flex-col px-2">

                </div>

                {/* column center */}
                <div className="w-full h-auto">
                    <div className="main_monitor w-full min-h-screen rounded-lg">
                        {renderMainContent()}
                    </div>
                </div>

                {/* column right */}
                <div className="w-full min-h-screen flex-col p-2">
                    Right Panel
                </div>

            </div>

        </div>
    );

}//end 