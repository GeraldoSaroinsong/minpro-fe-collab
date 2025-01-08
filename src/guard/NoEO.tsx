"use client";

import { useAppSelector } from "@/lib/redux/hooks";
import { redirect } from "next/navigation";
import * as React from "react";

type Role = "user" | "organizer";

interface INoEOProps {
    children: React.ReactNode;
    terlarang: Role;
}

const NoEO: React.FunctionComponent<INoEOProps> = ({ children, terlarang }) => {
    const userData = useAppSelector((state) => state.userReducer);
    const role = userData.role;

    React.useEffect(() => {
        console.log("PROSES MELARANG EO", userData);
        if (role === terlarang) {
            redirect("/organizer/");
        }
    }, [userData, terlarang]);

    return <>{children};</>;
};

export default NoEO;
