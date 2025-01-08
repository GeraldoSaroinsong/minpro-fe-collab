import LoggedGuard from "@/guard/LoggedGuard";
import { Metadata } from "next";
import * as React from "react";

interface ISignUpProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "Sign Up",
};

const SignUp: React.FunctionComponent<ISignUpProps> = ({ children }) => {
    return (
        <LoggedGuard>
            <div>{children}</div>;
        </LoggedGuard>
    );
};

export default SignUp;
