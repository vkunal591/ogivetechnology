import * as url from "../utils/urls";
import axiosInstance from "../axiosInstance";
import { ICategoryPayload, ICategoryResponse } from "../interfaces/i-category";
import { IBaseReponse2 } from "../interfaces/i-base-response";


export default {

  createCategory: function (payload:ICategoryPayload) {
    return axiosInstance.post(url.categoryUrl,payload);
  }
  ,  getCategory: function () {
    return axiosInstance.get(url.categoryUrl);
  }, 
   getCategoryByTitleSizePage: function (payload:{title:string,size:number,page:number}) {
    return axiosInstance.post<IBaseReponse2<ICategoryResponse[]>>(url.categoryUrl,payload);
  }
}