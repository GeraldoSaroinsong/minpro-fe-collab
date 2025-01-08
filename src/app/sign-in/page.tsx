"use client";

import { Form, Formik, FormikProps } from "formik";
import { callAPI } from "@/config/axios";
import { ISignIn } from "./SignInInterface";
import { SignInSchema } from "./SignInSchema";
import FormInput from "@/components/InputForm";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/redux/hooks";
import { setSignIn } from "@/lib/redux/features/userSlice";

export default function SignInPage() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const onRegisterUser = async (values: ISignIn) => {
        try {
            // console.log("LOGIN VALUES", values);
            const result = await callAPI.post("/user/login", {
                email: values.email,
                password: values.password,
            });
            const user = result.data.result.data;
            console.log("LOGED USER", user);

            dispatch(setSignIn({ ...user, isAuth: true }));

            localStorage.setItem("tkn", user.token);
            localStorage.setItem("userId", user.id);

            const globalToken = localStorage.getItem("tkn");
            const globalId = localStorage.getItem("userId");

            console.log("GLOBAL STORAGE", { globalToken, globalId });

            router.push("/");
        } catch (error) {
            console.log("ERROR CALL API", error);
        }
    };

    return (
        <div className="bg-gray-100">
            <div className="w-[95%] md:w-[70%] m-auto py-5 flex flex-col gap-4">
                <h1 className="text-3xl font-bold">LOGIN</h1>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={SignInSchema}
                    onSubmit={(values) => {
                        // console.log("FORMIK ONSUBMIT", values);
                        onRegisterUser(values);
                    }}
                >
                    {(props: FormikProps<ISignIn>) => {
                        const { handleChange, values, errors } = props;
                        // console.log("ERROR FORMIK", errors);

                        return (
                            <Form>
                                <div className="flex flex-col gap-4 p-8 my-8 border-2 border-slate-400">
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
                                        id="password"
                                        name="password"
                                        label="Password"
                                        placeholder="Masukkan password anda"
                                        type="password"
                                        onChange={handleChange}
                                        value={values.password}
                                    />

                                    <Button type="submit">Login</Button>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
}
