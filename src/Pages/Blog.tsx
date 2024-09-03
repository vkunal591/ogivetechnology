import { useEffect, useState } from "react";
import ViewBlog from "../Component/ViewBlog";
import Pageheader from "../Component/Pageheader";

export default function Blog() {
  const [pageBreadCrumb, setPageBreadCrumb] = useState("");

  useEffect(() => {
    const location = window.location.href.split("/");
    setPageBreadCrumb(location[3].replace("?", " / ").toUpperCase());
  }, []);

  return (
    <div>
      <div className="container cs-mt-5">
        {/* <BlogHeader /> */}
        {/* <BlogNavbar /> */}
        <Pageheader Title={pageBreadCrumb} />
      </div>
      <ViewBlog />
    </div>
  );
}
