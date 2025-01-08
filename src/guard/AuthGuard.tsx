"use client";

import { useAppSelector } from "@/lib/redux/hooks";
import { redirect } from "next/navigation";
import * as React from "react";

type Role = "user" | "organizer";

interface IAuthProps {
    childern: React.ReactNode;
    allowedRoles: Role;
}

const AuthGuard: React.FunctionComponent<IAuthProps> = ({
    childern,
    allowedRoles,
}) => {
    const userData = useAppSelector((state) => state.userReducer);
    const role = userData.role;

    React.useEffect(() => {
        if (!userData) {
            redirect("/sign-in");
        }

        if (allowedRoles !== role) {
            if (role === "organizer") {
                redirect("/organizer/");
            } else {
                redirect("/");
            }
        }

        if (allowedRoles === role) {
            return;
        }
    }, [userData, allowedRoles]);

    return <section>{childern};</section>;
};

export default AuthGuard;
