import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
    fullname: Yup.string().required("Name is required"),
    email: Yup.string().email("Must be an email").required("Email is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string()
        .required("Password is required")
        .min(4, "Password must be at least 3 charaters"),
    passwordConfirmation: Yup.string().required("You must confirm your password"),
});
