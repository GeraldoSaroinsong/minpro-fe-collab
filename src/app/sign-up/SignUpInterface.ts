export interface ISignUp {
    fullname: string;
    email: string;
    username: string;
    password: string;
    passwordConfirmation: string;
    role?: "user" | "organizer";
}
