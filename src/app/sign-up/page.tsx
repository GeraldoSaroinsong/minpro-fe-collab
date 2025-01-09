"use client";

import FormInput from "@/components/InputForm";
import { Form, Formik, FormikProps } from "formik";
import { ISignUp } from "./SignUpInterface";
import { SignUpSchema } from "./SignUpSchema";
import { callAPI } from "@/config/axios";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/lib/redux/hooks";
import { useRouter } from "next/navigation";
import { setSignIn } from "@/lib/redux/features/userSlice";
import { useEffect, useState } from "react";

export default function SignUpPage() {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const [refcode, setRefcode] = useState<{ referralCode: string }[]>([]);
    const refArr = refcode.map((e) => {
        return e.referralCode;
    });

    const fetchRefCode = async () => {
        try {
            const res = await callAPI.get("/user/refcode");
            const refData = res.data.result.data;

            setRefcode(refData);
        } catch (error) {
            console.log(error);
        }
    };

    const onRegisterUser = async (values: ISignUp) => {
        try {
            console.log("REGISTER VALUES", values);

            let result;
            if (refArr.includes(values.usingReferralCode as string)) {
                result = await callAPI.post("/user/register", {
                    name: values.name,
                    email: values.email,
                    username: values.username,
                    password: values.password,
                    role: values.role,
                    usingReferralCode: values.usingReferralCode,
                });
            } else {
                result = await callAPI.post("/user/register", {
                    name: values.name,
                    email: values.email,
                    username: values.username,
                    password: values.password,
                    role: values.role,
                });
            }

            const user = result.data.result.data;
            console.log("REGISTERED", user);

            dispatch(setSignIn({ ...user, isAuth: true }));

            localStorage.setItem("tkn", user.token);
            localStorage.setItem("userId", user.id);

            router.push("/");
        } catch (error) {
            console.log("ERROR CALL API", error);
        }
    };

    useEffect(() => {
        fetchRefCode();
    }, []);

    return (
        <div className="bg-gray-100">
            <div className="w-[95%] md:w-[70%] m-auto py-5 flex flex-col gap-4">
                <h1 className="text-3xl font-bold">SIGNUP</h1>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        username: "",
                        password: "",
                        passwordConfirmation: "",
                        role: "user",
                        usingReferralCode: "",
                    }}
                    validationSchema={SignUpSchema}
                    onSubmit={(values) => {
                        console.log("FORMIK ONSUBMIT", values);

                        onRegisterUser(values);
                    }}
                >
                    {(props: FormikProps<ISignUp>) => {
                        const { handleChange, values, errors } = props;
                        console.log("ERROR FORMIK", errors);

                        return (
                            <Form>
                                <div className="flex flex-col gap-8 p-8 my-8 border-2 border-slate-400">
                                    <FormInput
                                        id="name"
                                        name="name"
                                        label="Full Name"
                                        placeholder="Masukkan nama lengkap anda"
                                        type="text"
                                        onChange={handleChange}
                                        value={values.name}
                                    />
                                    <FormInput
                                        id="email"
                                        name="email"
                                        label="Email"
                                        placeholder="Masukkan email anda"
                                        type="text"
                                        onChange={handleChange}
                                        value={values.email}
                                    />
                                    <FormInput
                                        id="username"
                                        name="username"
                                        label="Username"
                                        placeholder="Masukkan username anda"
                                        type="text"
                                        onChange={handleChange}
                                        value={values.username}
                                    />
                                    <div className="text-gray-700 font-md text-sm flex flex-col gap-1">
                                        <label htmlFor="">Role</label>
                                        <div className="flex gap-8">
                                            <label
                                                htmlFor="role"
                                                className="inline-flex gap-1"
                                            >
                                                <input
                                                    type="radio"
                                                    name="role"
                                                    id="user"
                                                    value="user"
                                                    checked={
                                                        values.role === "user"
                                                    }
                                                    onChange={handleChange}
                                                />
                                                User
                                            </label>
                                            <label
                                                htmlFor="role"
                                                className="inline-flex gap-1"
                                            >
                                                <input
                                                    type="radio"
                                                    name="role"
                                                    id="organizer"
                                                    value="organizer"
                                                    checked={
                                                        values.role ===
                                                        "organizer"
                                                    }
                                                    onChange={handleChange}
                                                />
                                                Organizer
                                            </label>
                                        </div>
                                    </div>
                                    <FormInput
                                        id="password"
                                        name="password"
                                        label="Password"
                                        placeholder="Masukkan password anda"
                                        type="password"
                                        onChange={handleChange}
                                        value={values.password}
                                    />
                                    <FormInput
                                        id="passwordConfirmation"
                                        name="passwordConfirmation"
                                        label="Password Confirmation"
                                        placeholder="Konfirmasi password anda"
                                        type="password"
                                        onChange={handleChange}
                                        value={values.passwordConfirmation}
                                    />
                                    <FormInput
                                        id="usingReferralCode"
                                        name="usingReferralCode"
                                        label="Referral Code"
                                        placeholder="(Opsional) Masukkan Referral Code"
                                        type="text"
                                        onChange={handleChange}
                                        value={values.usingReferralCode}
                                    />
                                    <Button type="submit">Sign Up</Button>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
}
