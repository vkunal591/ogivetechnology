import { useEffect, useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { IErrorMessageResponse } from "../interfaces/i-authentication";
import { IBlogResponse } from "../interfaces/i-blog";
import BlogService from "../Services/BlogService";
import { errorMessage } from "../utils/fetchResponseMessage";
import { showToast } from "../utils/toast";
import ilogo from "../assets/iLogo.png";

export default function Gallery() {
  const [galleryData, setGalleryData] = useState<IBlogResponse[]>();
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
          setGalleryData(res.data.details.posts);
          console.log(res.data.details.posts);
        }
      );
    } catch (error) {
      const message = errorMessage(error as AxiosError<IErrorMessageResponse>);
      showToast({
        message: message,
        type: "error"
      });
    }
  };

  useEffect(() => {
    // const location = window.location.href.split("/");
    // const id = location[3].split("?")[1];
    // // const category = location[3].split("?")[0];
    // console.log(location[3].split("?")[1]);
    const categoryId = "66d743bd2bf7a82260729116";
    getBlog("", "", "", "", categoryId);
  }, []);
  return (
    <section className="py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h5 className="card-header cs-title-style  bg-transparent border-0 mb-5 mt-3">
              <span>
                <img
                  className="m-0"
                  src={ilogo}
                  alt=""
                  width={8}
                  style={{ rotate: "0deg" }}
                />
              </span>
              Gallery
            </h5>
            <p className="text-secondary mb-5 text-center lead fs-4">
              Gallery of ogive
            </p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </div>
        </div>
      </div>

      <div className="container overflow-hidden">
        <div className="row gy-4 gy-xxl-5">
          {galleryData &&
            galleryData?.map((gallery, index) => {
              return (
                <div className="col-12 col-md-4 bsb-project-2-item" key={index}>
                  <figure className="rounded rounded-3 overflow-hidden bsb-overlay-hover m-0">
                    <a href="#!">
                      <img
                        className="img-fluid bsb-scale-up bsb-hover-scale"
                        src={gallery?.file}
                        alt="Photography"
                      />
                    </a>
                    <figcaption>
                      <h3 className="text-white bsb-hover-fadeInLeft">
                        {gallery?.title}
                      </h3>
                      <div className="text-white bsb-hover-fadeInRight">
                        {gallery?.category?.title}
                      </div>
                    </figcaption>
                  </figure>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
