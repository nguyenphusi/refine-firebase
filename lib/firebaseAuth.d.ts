import { Auth, RecaptchaVerifier, RecaptchaParameters, ParsedToken } from "firebase/auth";
import { FirebaseApp } from "@firebase/app";
import { IRegisterArgs, ILoginArgs, IAuthCallbacks, IAuthContext } from "./interfaces";
export declare class FirebaseAuth {
    auth: Auth;
    authActions: IAuthCallbacks;
    constructor(authActions?: IAuthCallbacks, firebaseApp?: FirebaseApp);
    handleLogOut(): Promise<void>;
    handleRegister(args: IRegisterArgs): Promise<never>;
    handleLogIn({ email, password, remember }: ILoginArgs): Promise<never>;
    handleResetPassword(email: string): Promise<void>;
    onUpdateUserData(args: IRegisterArgs): Promise<never>;
    private getUserIdentity;
    private handleCheckAuth;
    getPermissions(): Promise<ParsedToken>;
    createRecaptcha(containerOrId: string | HTMLDivElement, parameters?: RecaptchaParameters): RecaptchaVerifier;
    getAuthProvider(): IAuthContext;
}
