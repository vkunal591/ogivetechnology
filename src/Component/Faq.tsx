const FAQ_ID = import.meta.env.VITE_API_FAQ_ID;
import ilogo from "../assets/iLogo.png";
import "./Css/faq.css";
import { useEffect, useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { IErrorMessageResponse } from "../interfaces/i-authentication";
import { IBlogResponse } from "../interfaces/i-blog";
import BlogService from "../Services/BlogService";
import { errorMessage } from "../utils/fetchResponseMessage";
import { showToast } from "../utils/toast";
import Loader from "../modals/Loader";

export default function Faq() {
  const [faqsData, setFaqsData] = useState<IBlogResponse[]>();
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
          setFaqsData(res.data.details.posts);
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
    const location = window.location.href.split("/");
    console.log(location[3].split("?")[1]);
    const categoryId = FAQ_ID;
    getBlog("", "", "", "", categoryId);
  }, []);

  return (
    <>
      <Loader />
      <section className="bsb-faq-3 py-3 py-md-5 py-xl-8 ">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8">
              <h5 className="card-header cs-title-style  bg-transparent border-0 mb-5 mt-3">
                <span>
                  <img
                    className="mx-1"
                    src={ilogo}
                    alt=""
                    width={8}
                    style={{ rotate: "0deg" }}
                  />
                </span>
                Frequently Asked Questions
              </h5>
              <p className="mb-5 text-center">
                Whether you're a new customer looking to learn more about what
                we offer or a long-time user seeking clarification on specific
                topics, this page has clear and concise information about our
                products and services.
              </p>
              <hr className="w-75 mx-auto mb-2 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>
        <div className="row head mobile-head">
          <div className="container col-8 mx-auto">
            <div className="accordion">
              {faqsData &&
                faqsData.map((faq) => {
                  return (
                    <div className="accordion-item my-2 border-1 border">
                      <button
                        className="px-4"
                        id="accordion-button-1"
                        aria-expanded="false"
                        onClick={(e) => {
                          const atr =
                            e.currentTarget.getAttribute("aria-expanded");
                          if (atr === "false")
                            e.currentTarget.setAttribute(
                              "aria-expanded",
                              "true"
                            );
                          else
                            e.currentTarget.setAttribute(
                              "aria-expanded",
                              "false"
                            );
                        }}
                      >
                        <span className="accordion-title">
                          {faq?.title ||
                            "Why is the moon sometimes out during the day?"}
                        </span>
                        <span className="icon" aria-hidden="true"></span>
                      </button>
                      <div className="accordion-content">
                        <p>
                          {faq?.shortDesc ||
                            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut.  Ut tortor pretium viverra suspendisse potenti."}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
