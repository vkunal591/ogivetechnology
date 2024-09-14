import * as url from "../utils/urls";
import axiosInstance from "../axiosInstance";
import { ILandingPagePayload } from "../interfaces/i-landingpage";



export default {

  createLandingPage: function (payload: ILandingPagePayload) {
    return axiosInstance.post(url.landingPageUrl, payload);
  },
  updateLandingPage: function (id:string,payload: ILandingPagePayload) {
    return axiosInstance.put(`${url.landingPageUrl}/${id}`, payload);
  },
  getLandingPage: function (id: string) {
    return axiosInstance.get(`${url.landingPageUrl}/${id}`);
  },
  getLandingPages: function (id: string) {
    return axiosInstance.get(`${url.landingPageUrl}/${id}`, {
   
    });
  },
  deleteLandingPage: function (id: string) {
    return axiosInstance.delete(`${url.landingPageUrl}/${id}`);
  }

}