import { AxiosError, AxiosResponse } from "axios";
import "./Css/blog.css";
import ilogo from "./../assets/iLogo.png";
import { FieldValues, useForm } from "react-hook-form";
import { IErrorMessageResponse } from "../interfaces/i-authentication";
import { IContactForm } from "../interfaces/i-form";
import FormService from "../Services/FormService";
import { successMessage, errorMessage } from "../utils/fetchResponseMessage";
import { showToast } from "../utils/toast";
import Toast from "../Pages/AdminPanel/Admin_Component/Toast";
import Loader from "../modals/Loader";

export default function ContactUs() {
  const { register, handleSubmit, reset } = useForm();

  const createContact = async (data: FieldValues) => {
    try {
      const contactPayload: IContactForm = {
        name: data?.name,
        email: data?.email,
        phone: data?.phone,
        subject: data?.subject,
        desc: data?.desc,
        _id: "",
        createdAt: ""
      };
      await FormService.createContact(contactPayload).then(
        (res: AxiosResponse) => {
          const message = successMessage(res.data.details.message);
          showToast({
            message: message,
            type: "success"
          });
          reset();
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

  return (
    <><Loader /><section className="py-3 py-md-5 py-xl-8 text-left cs-mt-1 mb-5">
      <div className="container">
        <div className="row justify-content-md-center text-center">
          <div className="col-12 col-md-10 col-lg-8">
            <h5 className="card-header cs-title-style  bg-transparent border-0 mb-3 mt-2">
              <span>
                <img
                  className="mx-1"
                  src={ilogo}
                  alt=""
                  width={8}
                  style={{ rotate: "0deg" }} />
              </span>
              CONTACT
            </h5>
            <p className="mb-5 text-center">
              Our team is available to provide prompt and helpful responses to
              all inquiries. You can reach us via phone, email, or by filling
              out the contact form below.
            </p>
            <hr className="w-50 mx-auto mb-2 mb-xl-9 border-dark-subtle" />
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <div className="card border border-dark rounded shadow-sm overflow-hidden">
              <div className="card-body p-0">
                <div className="row gy-3 gy-md-4 gy-lg-0">
                  <div className="col-12 col-lg-6 bsb-overlay background-position-center background-size-cover bg-black">
                    <div className="row align-items-lg-center justify-content-center h-100">
                      <div className="col-11 col-xl-10">
                        <div className="contact-info-wrapper py-4 py-xl-5">
                          <h2 className="h1 mb-2 fs-4 text-light">Get in touch</h2>
                          <p className="lead fs-5 text-light opacity-75 mb-4 mb-xxl-5">
                            We're always on the lookout to work with new
                            clients. If you're interested in working with us,
                            please get in touch in one of the following ways.
                          </p>
                          <div className="d-flex mb-4 mb-xxl-5">
                            <div className="me-4 text-primary">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi text-danger bi-geo"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="mb-3 text-light fs-5">Address</h4>
                              <address className="mb-0 fs-6 text-light opacity-75">
                              Plot no 9, SMR ENCLAVE, NEAR HIMAYAT SAGAR, BANDLAGUDA, HYDERABAD, 500091
                              </address>
                            </div>
                          </div>
                          <div className="row mb-4 mb-xxl-5">
                            <div className="col-12 col-xxl-6 p-0">
                              <div className="d-flex mb-4 mb-xxl-0">
                                <div className="me-4 text-primary">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="bi text-danger bi-telephone-outbound"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                                  </svg>
                                </div>
                                <div>
                                  <h4 className="mb-3 text-light fs-5">Phone</h4>
                                  <p className="mb-0 fs-6">
                                    <a
                                      className="link-light link-opacity-75 link-opacity-100-hover text-decoration-none"
                                      href="tel:+91-40-29702989"
                                    >
                                      +91-40-29702989
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-xxl-6">
                              <div className="d-flex mb-0">
                                <div className="me-4 text-primary">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="bi text-danger bi-envelope-at"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                                    <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                                  </svg>
                                </div>
                                <div>
                                  <h4 className="mb-3 text-light fs-5">E-Mail</h4>
                                  <p className="mb-0 fs-6">
                                    <a
                                      className="link-light link-opacity-75 link-opacity-100-hover text-decoration-none"
                                      href="mailto:info@ogivetechnology.com"
                                    >
                                      info@ogivetechnology.com
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex">
                            <div className="me-4 text-primary">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi text-danger bi-alarm"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="mb-3 text-light fs-5">Opening Hours</h4>
                              <div className="d-flex mb-1">
                                <p className="text-light fw-bold mb-0 me-5 fs-6">
                                  Mon - Fri
                                </p>
                                <p className="text-light opacity-75 mb-0 fs-6">
                                  9am - 5pm
                                </p>
                              </div>
                              <div className="d-flex">
                                <p className="text-light fw-bold mb-0 me-5 fs-6">
                                  Sat - Sun
                                </p>
                                <p className="text-light opacity-75 mb-0 fs-6">
                                  9am - 2pm
                                </p>
                              </div>
                            </div>
                          </div>
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
                            style={{ rotate: "0deg" }} />
                        </span>
                        NEED HELP
                      </h5>
                      <div className="col-12 mt-2">
                        <form onSubmit={handleSubmit(createContact)}>
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
                                required />
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
                                  required />
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
                                  {...register("phone")} />
                              </div>
                            </div>
                            <div className="col-12 mt-2">
                              <label
                                htmlFor="subject"
                                className="form-label d-flex"
                              >
                                Subject <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="subject"
                                {...register("subject")}
                                required />
                            </div>
                            <div className="col-12 mt-2">
                              <label
                                htmlFor="message"
                                className="form-label d-flex"
                              >
                                Message <span className="text-danger">*</span>
                              </label>
                              <textarea
                                className="form-control"
                                id="message"
                                {...register("desc")}
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
                                  Send Message
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
      <Toast />
    </section></>
  );
}
