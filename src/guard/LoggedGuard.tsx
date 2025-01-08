"use client";
import { redirect } from "next/navigation";
import * as React from "react";

interface IAuthProps {
    children: React.ReactNode;
}

const LoggedGuard: React.FunctionComponent<IAuthProps> = ({ children }) => {
    const id = localStorage.getItem("userId");
    React.useEffect(() => {
        // console.log("APAKAH ADA ID YG LOG IN", id);
        if (id) {
            redirect("/");
        }
    }, [id]);

    return <>{children};</>;
};

export default LoggedGuard;
