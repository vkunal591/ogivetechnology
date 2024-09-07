import "./Css/blog.css";
import "./Css/career.css";
import { AxiosError, AxiosResponse } from "axios";
import ilogo from "./../assets/iLogo.png";
import { useState, useEffect } from "react";
import { IErrorMessageResponse } from "../interfaces/i-authentication";
import { IBlogResponse } from "../interfaces/i-blog";
import BlogService from "../Services/BlogService";
import { errorMessage, successMessage } from "../utils/fetchResponseMessage";
import { showToast } from "../utils/toast";
import { Link } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import FileService from "../Services/FileService";
import { ICareerForm } from "../interfaces/i-form";
import FormService from "../Services/FormService";

export default function Career() {
  const [careerData, setCareerData] = useState<IBlogResponse[]>();
  const [resumeUrl, setResumeUrl] = useState("");
  const { register, handleSubmit, reset, resetField } = useForm();
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
          setCareerData(res.data.details.posts);
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

  const uploadFile = async (event: {
    target: { files: File[]; name: string };
  }) => {
    try {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      await FileService.uploadDocument(formData).then((res: AxiosResponse) => {
        setResumeUrl(res.data.url);
        const message = successMessage(res);
        showToast({ message: message, type: "success" });
      });
    } catch (error) {
      console.error("Upload Failed");
      const message = errorMessage(error as AxiosError<IErrorMessageResponse>);
      resetField("file");
      showToast({
        message: message,
        type: "error"
      });
    }
  };

  const createCareer = async (data: FieldValues) => {
    try {
      const careerPayload: ICareerForm = {
        name: data?.name,
        email: data?.email,
        phone: data?.phone,
        resume: resumeUrl,
        role: data?.role,
        coverLatter: data?.coverLatter,
        createdAt: "",
        _id: ""
      };
      await FormService.createCareer(careerPayload).then((res) => {
        const message = successMessage(res.data.details.message);
        showToast({
          message: message,
          type: "success"
        });
        reset();
        resetField("file");
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
    // const location = window.location.href.split("/");
    const categoryId = "66dc065165cf3e3890e36199";
    getBlog("", "", "", "", categoryId);
  }, []);
  return (
    <section className="py-3 py-md-5 py-xl-8 text-left cs-mt-1 mb-5">
      <div className="container">
        <div className="row justify-content-md-center text-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h5 className="card-header cs-title-style  bg-transparent border-0 mb-3 mt-2">
              <span>
                <img
                  className="mx-1"
                  src={ilogo}
                  alt=""
                  width={8}
                  style={{ rotate: "0deg" }}
                />
              </span>
              CAREER WITH US
            </h5>
            <p className="text-secondary mb-2 text-center lead fs-4">
              Our team is available to provide prompt and helpful responses to
              all inquiries. You can reach us via phone, email, or by filling
              out the contact form below.
            </p>
            <hr className="w-50 mx-auto mb-2 mb-xl-9 border-dark-subtle" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card border border-dark rounded shadow-sm overflow-hidden">
              <div className="card-body p-0">
                <div className="row gy-3 gy-md-4 gy-lg-0">
                  <div className="col-12 col-lg-6 bsb-overlay background-position-center background-size-cover bg-black">
                    <div className="row align-items-lg-start justify-content-center h-100">
                      <div className="col-11 col-xl-10">
                        <div className="contact-info-wrapper list py-4 py-xl-5">
                          <h2 className=" mb-2 text-light">List Of Oppening</h2>

                          <ul
                            className="hideScrollBar h-100"
                            style={{ overflowY: "auto", maxHeight: "575px" }}
                          >
                            {careerData &&
                              careerData?.map((career, index) => {
                                return (
                                  <Link to={`/career?${career?._id}`} key={index}>
                                    <li>
                                      <span>{career?.title}</span>
                                    </li>
                                  </Link>
                                );
                              })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="row align-items-lg-center h-100 align-content-center">
                      <h5 className="card-header cs-title-style  bg-transparent border-0 mb- mt-3">
                        <span>
                          <img
                            className="mx-1"
                            src={ilogo}
                            alt=""
                            width={8}
                            style={{ rotate: "0deg" }}
                          />
                        </span>
                        Personal Information
                      </h5>
                      <div className="col-12 mt-2">
                        <form onSubmit={handleSubmit(createCareer)}>
                          <div className="row gy-4 gy-xl-5 py-1 px-4 p-xl-">
                            <div className="col-12 mt-2">
                              <label
                                htmlFor="fullname"
                                className="form-label d-flex"
                              >
                                Full Name <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="fullname"
                                {...register("name")}
                                required
                              />
                            </div>
                            <div className="col-12 col-md-6 mt-2">
                              <label
                                htmlFor="email"
                                className="form-label d-flex"
                              >
                                Email <span className="text-danger">*</span>
                              </label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-envelope"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                  </svg>
                                </span>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="email"
                                  {...register("email")}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-12 col-md-6 mt-2">
                              <label
                                htmlFor="phone"
                                className="form-label d-flex"
                              >
                                Phone Number
                              </label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-telephone"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                  </svg>
                                </span>
                                <input
                                  type="tel"
                                  className="form-control"
                                  id="phone"
                                  {...register("phone")}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-12 mt-2">
                              <label
                                htmlFor="subject"
                                className="form-label d-flex"
                              >
                                Resume <span className="text-danger">*</span>
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                id="resume"
                                {...register(`file`, {
                                  onChange: async (e) => {
                                    uploadFile(e);
                                  }
                                })}
                                required
                              />
                            </div>
                            <div className="col-12 mt-2">
                              <label
                                htmlFor="subject"
                                className="form-label d-flex"
                              >
                                Designation{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="subject"
                                {...register("role")}
                                required
                              />
                            </div>
                            <div className="col-12 mt-2">
                              <label
                                htmlFor="message"
                                className="form-label d-flex"
                              >
                                Cover Latter{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <textarea
                                className="form-control"
                                id="message"
                                {...register("coverLatter")}
                                rows={3}
                                required
                              ></textarea>
                            </div>
                            <div className="col-12 mt-2">
                              <div className="d-grid">
                                <button
                                  className="btn btn-primary btn-lg"
                                  type="submit"
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
