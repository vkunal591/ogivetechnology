import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import ViewBlog from "../Component/ViewBlog";
import Pageheader from "../Component/Pageheader";
import { IBlogResponse } from "../interfaces/i-blog";
import BlogService from "../Services/BlogService";
import Toast from "./AdminPanel/Admin_Component/Toast";

export default function Blog() {
  const [pageBreadCrumb, setPageBreadCrumb] = useState("");
  const [blogData, setBlogData] = useState<IBlogResponse>();
  const getBlog = async (
    id: string,
    size: string,
    page: string,
    q: string,
    categoryId: string
  ) => {
    try {
      await BlogService.getLocalBlog(id, size, page, q, categoryId).then(
        (res: AxiosResponse) => {
          setBlogData(res.data.details.post);
          console.log(res.data.data.posts[0]);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const location = window.location.href.split("/");
    const id = location[3].split("?")[1];
    const category = location[3].split("?")[0];
    console.log(location[3].split("?")[1]);
    getBlog(id, "", "", "", "");
    setPageBreadCrumb(`${category}`);
  }, []);

  return (
    <div>
      {blogData && (
        <>
          <div className="container">
            <Pageheader Title={`${pageBreadCrumb} / ${blogData?.title}`} />
          </div>
          <ViewBlog blogData={blogData} />
        </>
      )}
      <Toast />
    </div>
  );
}
