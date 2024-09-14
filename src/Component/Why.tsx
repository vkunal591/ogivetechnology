const WHY_ID = import.meta.env.VITE_API_WHY_ID;
import { useEffect, useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { IErrorMessageResponse } from "../interfaces/i-authentication";
import { IBlogResponse } from "../interfaces/i-blog";
import BlogService from "../Services/BlogService";
import { errorMessage } from "../utils/fetchResponseMessage";
import { showToast } from "../utils/toast";
import ilogo from "../assets/iLogo.png";
import Loader from "../modals/Loader";

export default function Why() {
  const [whyData, setWhyData] = useState<IBlogResponse[]>();
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
          setWhyData(res.data.details.posts);
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
    const categoryId = WHY_ID;
    getBlog("", "", "", "", categoryId);
  }, []);
  return (
    <><Loader /><section className="py-3 py-md-5">
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
                  style={{ rotate: "0deg" }} />
              </span>
              Why Ogive
            </h5>
            <p className="text-secondary mb-5 text-center lead fs-4">
              
            </p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </div>
        </div>
      </div>

      <div className="container overflow-hidden">
        <div className="row gy-4 gy-xxl-5">
          {whyData &&
            whyData?.map((why, index) => {
              return (
                <div
                  className="col-12 col-md-6 col-lg-4 d-flex text-left"
                  key={index}
                >
                  <article className="d-flex">
                    <div className="card border border-dark">
                      <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                        <a href="#!">
                          <img
                            className="img-fluid bsb-scale bsb-hover-scale-up w-100"
                            loading="lazy"
                            src={why?.file}
                            alt="Spokes" />
                        </a>
                      </figure>
                      <div className="card-body border-0 bg-white p-4">
                        <div className="entry-header mb-3">
                          <ul className="entry-meta list-unstyled d-flex mb-2">
                            <li>
                              <a
                                className="link-dark link-opacity-75 link-opacity-100-hover text-decoration-none"
                                href="#!"
                              >
                                <span className="fs-7">25 Dec 2024</span>
                              </a>
                            </li>
                          </ul>
                          <h2 className="card-title entry-title h4 mb-0">
                            <a
                              className="link-dark link-opacity-100 link-opacity-75-hover text-decoration-none"
                              href="#!"
                            >
                              {why?.title}
                            </a>
                          </h2>
                        </div>
                        <p className="card-text entry-summary text-secondary m-0 p-0">
                          {why?.shortDesc}
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
        </div>
      </div>
    </section></>
  );
}
