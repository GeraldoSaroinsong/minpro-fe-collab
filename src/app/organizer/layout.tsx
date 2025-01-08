import type { Metadata } from "next";
import "../globals.css";
import * as React from "react";

import SideBar from "@/components/OrganizerSideBar";
import AuthGuard from "@/guard/AuthGuard";

interface IOrganizerDashboardLayout {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "Organizer Dashboard",
};

const OrganizerLayout: React.FunctionComponent<IOrganizerDashboardLayout> = ({
    children,
}) => {
    return (
        <AuthGuard allowedRoles="organizer">
            <div className="flex gap-4 divide-x-2 w-[95%] md:w-[70%] py-10 m-auto">
                <SideBar />
                {children}
            </div>
        </AuthGuard>
    );
};
export default OrganizerLayout;
