//src\app\manaielems\page.tsx

"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import PageAgentsHeader from "./pageheader";



/**
 * Page JSX Ai Elements
 */
export default function PageAgents() {

    //ManagerAgents
    //ManagerServers

    useEffect(() => {

    }, []);

    const renderMainContent = useMemo(() => {
       
        return (
            <div></div>
        );
    }, []);

  return (
    
        <div id="cont_root" className="w-full h-auto bg-gray-900 " >

            {/* header */}
            <PageAgentsHeader param={"param"} />

            {/* body */}
            <div className="w-full h-auto grid grid-cols-[17%_65%_17%]">

                {/* column left */}
                <div className="w-full min-h-screen flex flex-col px-2 mb-2">
                    <div className="w-full h-auto">
                        Btn New
                    </div>
                </div>

                {/* column center */}
                <div className="w-full h-auto">
                    <div className="main_monitor w-full min-h-screen rounded-lg">
                        {renderMainContent}
                    </div>
                </div>

                {/* column right */}
                <div className="w-full min-h-screen flex-col p-2">
                    Right Panel
                </div>

            </div>

        </div>
    );

    
}//end jsx view