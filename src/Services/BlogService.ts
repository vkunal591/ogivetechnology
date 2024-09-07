import * as url from "../utils/urls";
import axiosInstance from "../axiosInstance";
import { ICreateBlog } from "../interfaces/i-user";


export default {

  createBlog: function (payload: ICreateBlog) {
    return axiosInstance.post(url.blogUrl, payload);
  },
  getBlog: function (id: string ,  size: number|null ,
    page: number|null) {
    return axiosInstance.get(`${url.getblogUrl}/${id}`,{
      params:{size,page}
    });
  },
  getLocalBlog: function (id:string ,
    size: string ,
    page: string,
    q: string,
    categoryId: string
  ) {
    return axiosInstance.get(`${url.blogUrl}/blog/${id}`, {
      params: { size:size,page:page,q:q,category:categoryId }
    });
  },
  updateBlog: function (id: string, payload: ICreateBlog) {
    return axiosInstance.put(`${url.blogUrl}/${id}`, payload);
  },
  deleteBlog: function (id: string) {
    return axiosInstance.delete(`${url.blogUrl}/${id}`);
  }
} 