import { IUsersResponse } from "./i-user";


export interface ILoginPayload {
    email: string;
    password: string;
}

export interface ILoginResponse {
    token: string;
    user: IUsersResponse;
    childDropDownEnable: boolean;
}

export interface IErrorMessageResponse {
    message: string;
    status: boolean;
    code: string;
}

export interface IResetPassword {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
}