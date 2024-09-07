import * as url from "../utils/urls";
import axiosInstance from "../axiosInstance";
import { ICategoryPayload } from "../interfaces/i-category";



export default {

  createCategory: function (id: string, payload: ICategoryPayload) {
    if (id) {
      return axiosInstance.put(`${url.categoryUrl}/${id}`, payload);

    } else {

      return axiosInstance.post(`${url.categoryUrl}`, payload);
    }
  },
  getCategory: function (id: string, size: number | null, page: number | null) {
    if (!id) {
      return axiosInstance.get(`${url.categoryUrl}`)

    } else {

      return axiosInstance.get(`${url.categoryUrl}/${id}`, {
        params: { size, page }
      });
    }
  },
  getCategoryByTitleSizePage: function (payload: { title: string, size: number, page: number }) {
    return axiosInstance.post(url.categoryUrl, payload);
  },
  deleteCategory: function (id: string) {
    return axiosInstance.delete(`${url.categoryUrl}/${id}`);
  }

}