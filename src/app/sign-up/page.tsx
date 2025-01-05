"use client";

import FormInput from "@/components/InputForm";
import { Form, Formik, FormikProps } from "formik";
import { ISignUp } from "./SignUpInterface";
import { SignUpSchema } from "./SignUpSchema";
import { callAPI } from "@/config/axios";
import { Button } from "@/components/ui/button";

export default function SignUpPage() {
    const onRegisterUser = async (values: ISignUp) => {
        try {
            console.log("REGISTER VALUES", values);
            const result = await callAPI.post("/user/register", {
                name: values.fullname,
                email: values.email,
                username: values.username,
                password: values.password,
            });
            console.log("REGISTERED", result);
        } catch (error) {
            console.log("ERROR CALL API", error);
        }
    };

    return (
        <div className="bg-gray-100">
            <div className="w-[95%] md:w-[70%] m-auto py-5 flex flex-col gap-4">
                <h1 className="text-3xl font-bold">SIGNUP</h1>
                <Formik
                    initialValues={{
                        fullname: "",
                        email: "",
                        username: "",
                        password: "",
                        passwordConfirmation: "",
                    }}
                    validationSchema={SignUpSchema}
                    onSubmit={(values) => {
                        console.log("FORMIK ONSUBMIT", values);

                        onRegisterUser(values);
                    }}
                >
                    {(props: FormikProps<ISignUp>) => {
                        const { handleChange, values, touched, errors } = props;
                        console.log("ERROR FORMIK", errors);

                        return (
                            <Form>
                                <div className="flex flex-col gap-4 p-8 my-8 w-1/2 border-2 border-slate-400">
                                    <FormInput
                                        id="fullname"
                                        name="fullname"
                                        label="Full Name"
                                        placeholder="Masukkan nama lengkap anda"
                                        type="text"
                                        onChange={handleChange}
                                        value={values.fullname}
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
