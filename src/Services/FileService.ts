import * as url from "../utils/urls";
import axiosInstance from "../axiosInstance";



export default {
    getDocumentList: function () {
        // return axiosInstance.get(url.getAllDocumentListurl);
    },
    uploadDocument: function (formData: FormData) {

        return axiosInstance.post(url.uploadImageUrl, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "x-rapidapi-host": "file-upload8.p.rapidapi.com",
                "x-rapidapi-key": "your-rapidapi-key-here"
              }
        });
    }
}