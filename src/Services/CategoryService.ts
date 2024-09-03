import * as url from "../utils/urls";
import axiosInstance from "../axiosInstance";
import { ICategoryPayload } from "../interfaces/i-category";



export default {

  createCategory: function (payload: ICategoryPayload) {
    return axiosInstance.post(url.categoryUrl, payload);
  },
  getCategory: function () {
    return axiosInstance.get(url.categoryUrl);
  },
  getCategoryByTitleSizePage: function (payload: { title: string, size: number, page: number }) {
    return axiosInstance.post(url.categoryUrl, payload);
  },
  deleteCategory: function (id: string) {
    return axiosInstance.delete(`${url.categoryUrl}/${id}`);
  }

}