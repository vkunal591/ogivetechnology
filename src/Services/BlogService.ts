import * as url from "../utils/urls";
import axiosInstance from "../axiosInstance";
import { ICreateBlog } from "../interfaces/i-user";
import { IBlogPayload } from "../interfaces/i-blog";


export default {

  createBlog: function (payload: ICreateBlog) {
    return axiosInstance.post(url.blogUrl, payload);
  },
  getBlog: function (id: string) {
    return axiosInstance.get(`${url.blogUrl}/${id}`);
  },
  getLocalBlog: function (id:string ,
    size: string ,
    page: string,
    q: string,
    categoryId: string
  ) {
    return axiosInstance.get(`${url.blogUrl}/blog/${id}`, {
      params: { size,page,q,categoryId }
    });
  },
  updateBlog: function (id: string, payload: ICreateBlog) {
    return axiosInstance.put(`${url.blogUrl}/${id}`, payload);
  },
  deleteBlog: function (id: string) {
    return axiosInstance.delete(`${url.blogUrl}/${id}`);
  }
} 