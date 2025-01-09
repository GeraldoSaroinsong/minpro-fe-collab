export interface ISignUp {
    name: string;
    email: string;
    username: string;
    password: string;
    passwordConfirmation: string;
    role?: "user" | "organizer";
    usingReferralCode?: string;
}
