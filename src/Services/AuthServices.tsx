import * as url from "../utils/urls";
import axiosInstance from "../axiosInstance";
import { IBaseReponse2 } from "../interfaces/i-base-response";
import { ILoginPayload, ILoginResponse } from "../interfaces/i-authentication";


export default {

  login: function (payload:ILoginPayload) {
    return axiosInstance.post<IBaseReponse2<ILoginResponse>>(url.loginUrl,payload);
  }
  
}