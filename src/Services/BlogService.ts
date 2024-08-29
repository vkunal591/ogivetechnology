import * as url from "../utils/urls";
import axiosInstance from "../axiosInstance";
import { IBaseReponse2 } from "../interfaces/i-base-response";


export default {

  createBlog: function (payload: any) {
    return axiosInstance.post(url.createBlogUrl,payload);
  }
  ,  getCategory: function () {
    return axiosInstance.get(url.categoryUrl);
  }, 
   getCategoryByTitleSizePage: function (payload:{title:string,size:number,page:number}) {
    return axiosInstance.post(url.createBlogUrl,payload);
  }
}