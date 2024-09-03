import * as url from "../utils/urls";
import axiosInstance from "../axiosInstance";
import { ILoginPayload } from "../interfaces/i-authentication";
import { IChangePassword, IUpdateProfile } from "../interfaces/i-user";


export default {

  login: function (payload:ILoginPayload) {
    return axiosInstance.post(url.loginUrl,payload);
  },
  logOut: function () {
    localStorage.removeItem('token')
  },
  createUser: function (payload:ILoginPayload) {
    return axiosInstance.post(url.loginUrl,payload);
  },
  updateProfile: function (payload:IUpdateProfile) {
    return axiosInstance.put(url.updateProfileUrl,payload);
  },
  changePassword: function (payload:IChangePassword) {
    return axiosInstance.put(url.changePasswordUrl,payload);
  },
  getCurrentUser: function () {
    return axiosInstance.get(url.getCurrentUserUrl);
  },
  getAllUsers: function () {
    return axiosInstance.get(url.getAllUsersUrl);
  },
  sendEmail: function (payload:{email:string|undefined}) {
    return axiosInstance.post(url.sendCodeUrl,payload);
  },
  verifyUser: function (payload:{email:string|undefined,code:string}) {
    return axiosInstance.post(url.verifyUsereUrl,payload);
  },
  
}