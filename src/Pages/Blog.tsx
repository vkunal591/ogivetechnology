import { useEffect, useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import ViewBlog from "../Component/ViewBlog";
import Pageheader from "../Component/Pageheader";
import { IBlogPayload, IBlogResponse } from "../interfaces/i-blog";
import { IErrorMessageResponse } from "../interfaces/i-authentication";
import BlogService from "../Services/BlogService";
import { errorMessage } from "../utils/fetchResponseMessage";
import { showToast } from "../utils/toast";
import Toast from "./AdminPanel/Admin_Component/Toast";

export default function Blog() {
  const [pageBreadCrumb, setPageBreadCrumb] = useState("");
  const [blogData, setBlogData] = useState<IBlogResponse>();
  const getBlog = async (
    id:string,
    size: string,
    page: string,
    q: string,
    categoryId: string
  ) => {
    try {
    
      
 
      await BlogService.getLocalBlog(id,size,page,q,categoryId).then((res: AxiosResponse) => {
        setBlogData(res.data.details.post);
        console.log(res.data.data.posts[0]);
      });
    } catch (error) {
      const message = errorMessage(error as AxiosError<IErrorMessageResponse>);
      showToast({
        message: message,
        type: "error"
      });
    }
  };
  useEffect(() => {
    const location = window.location.href.split("/");
    setPageBreadCrumb(location[3].replace("?", " / ").toUpperCase());
    const id = "66d87db0ad58f33258cc4099" // | location[3].split("?")[1];
    const category = location[3].split("?")[0];
    console.log(category)
    getBlog(id,"", "", "","" );
  }, []);

  return (
    <div>
      <div className="container cs-mt-5">
        {/* <BlogHeader /> */}
        {/* <BlogNavbar /> */}
        <Pageheader Title={pageBreadCrumb} />
      </div>
      {blogData && <ViewBlog blogData={blogData} />}
      <Toast />
    </div>
  );
}
