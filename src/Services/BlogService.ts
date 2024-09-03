import * as url from "../utils/urls";
import axiosInstance from "../axiosInstance";
import { ICreateBlog } from "../interfaces/i-user";


export default {

  createBlog: function (payload: ICreateBlog) {
    return axiosInstance.post(url.blogUrl, payload);
  },
  getBlog: function (id: string) {
    return axiosInstance.get(`${url.blogUrl}/${id}`);
  },
  updateBlog: function (id: string, payload: ICreateBlog) {
    return axiosInstance.put(`${url.blogUrl}/${id}`, payload);
  },
  deleteBlog: function (id: string) {
    return axiosInstance.delete(`${url.blogUrl}/${id}`);
  }
} 