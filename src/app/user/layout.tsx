import type { Metadata } from "next";
import "../globals.css";
import * as React from "react";
import AuthGuard from "@/guard/AuthGuard";

interface IUserLayout {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "User",
};

const UserLayout: React.FunctionComponent<IUserLayout> = ({ children }) => {
    return <AuthGuard allowedRoles="user">{children}</AuthGuard>;
};
export default UserLayout;
