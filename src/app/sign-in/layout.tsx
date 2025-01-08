import LoggedGuard from "@/guard/LoggedGuard";
import { Metadata } from "next";
import * as React from "react";

interface ISignInProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "Sign In",
};

const SignIn: React.FunctionComponent<ISignInProps> = ({ children }) => {
    return (
        <LoggedGuard>
            <div>{children}</div>;
        </LoggedGuard>
    );
};

export default SignIn;
