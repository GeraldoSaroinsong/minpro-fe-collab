import * as Yup from "yup";

export const SignInSchema = Yup.object().shape({
    email: Yup.string().email("Must be an email").required("Email is required"),
    password: Yup.string().required("Password is required"),
});
