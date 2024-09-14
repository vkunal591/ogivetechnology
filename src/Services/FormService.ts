import * as url from "../utils/urls";
import axiosInstance from "../axiosInstance";
import { ICareerForm, IContactForm } from "../interfaces/i-form";


export default {

  createCareer: function (payload: ICareerForm) {
    return axiosInstance.post(url.careerUrl, payload);
  },
  getCareer: function (id: string) {
    return axiosInstance.get(`${url.careerUrl}/${id}`);
  },
  getCareers: function (id: string,
    size: number | null,
    page: number | null,
    subject: string
  ) {
    return axiosInstance.get(`${url.careerUrl}/${id}`, {
      params: { size: size, page: page, subject: subject }
    });
  },
  deleteCareer: function (id: string) {
    return axiosInstance.delete(`${url.careerUrl}/${id}`);
  }
  ,
  createContact: function (payload: IContactForm) {
    return axiosInstance.post(url.contactUrl, payload);
  },
  getContact: function (id: string) {
    return axiosInstance.get(`${url.contactUrl}/${id}`);
  },
  getContacts: function (id: string,
    size: number | null,
    page: number | null,
    subject: string
  ) {
    return axiosInstance.get(`${url.contactUrl}/${id}`, {
      params: { size: size, page: page, subject: subject }
    });
  },
  deleteContact: function (id: string) {
    return axiosInstance.delete(`${url.contactUrl}/${id}`);
  },

  createSubscriber: function (payload:{email:string}) {
    return axiosInstance.post(url.subcriberUrl,payload);
  },
  getSubscriber: function (id: string) {
    return axiosInstance.get(`${url.subcriberUrl}/${id}`);
  },
  getSubcribers: function (id: string,
    size: number | null,
    page: number | null,
    email: string
  ) {
    return axiosInstance.get(`${url.subcriberUrl}/${id}`, {
      params: { size: size, page: page, email: email }
    });
  },
  deleteSubscriber: function (id: string) {
    return axiosInstance.delete(`${url.subcriberUrl}/${id}`);
  }
} 