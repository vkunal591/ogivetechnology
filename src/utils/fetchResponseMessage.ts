import { AxiosError, AxiosResponse } from "axios";
import messages from "../constants/messages";
import { IErrorMessageResponse } from "../interfaces/i-authentication";

export const errorMessage = (error: AxiosError<IErrorMessageResponse>) => {
    return error.response?.data.message
        ? error.response?.data.message
        : messages.API_SUBMIT_ERROR;
};

export const successMessage = (response: AxiosResponse) => {
    return response?.data?.message
        ? response.data.message
        : messages.SAVE_SUCCESS;
};
