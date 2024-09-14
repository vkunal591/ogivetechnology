import { AxiosError, AxiosResponse } from "axios";
import Pageheader from "../../../Component/Pageheader";
import { FieldValues, useForm } from "react-hook-form";
import { IErrorMessageResponse } from "../../../interfaces/i-authentication";
import {
  successMessage,
  errorMessage
} from "../../../utils/fetchResponseMessage";
import { showToast } from "../../../utils/toast";
import Toast from "../Admin_Component/Toast";
import LandingPageService from "../../../Services/LandingPageService";
import { ILandingPagePayload } from "../../../interfaces/i-landingpage";
import { useState } from "react";
import FileService from "../../../Services/FileService";

export default function LandingPageForm() {
  const { register, handleSubmit, reset, resetField } = useForm();
  const [homeIntroVideo, setHomeIntroVideo] = useState("");
  const [serviceVideo, setServiceVideo] = useState("");
  const [successImage, setSuccessImage] = useState("");
  const [homeVideoUrl, setHomeVideoUrl] = useState("");
  const [serviceVideoUrl, setServiceVideoUrl] = useState("");
  const [successImageUrl, setSuccessImageUrl] = useState("");
  const [isServiceLoading, setIsServiceLoading] = useState(false);
  const [isHomeIntroLoading, setIsHomeIntroLoading] = useState(false);
  const [isSuccessLoading, setIsSuccessLoading] = useState(false);

  const uploadFile = async (event: {
    target: { files: File[]; name: string };
  }) => {
    const name = event.target.name;
    try {
      if (name === "home") {
        setIsHomeIntroLoading(true);
      } else if (name === "service") {
        setIsServiceLoading(true);
      } else {
        setIsSuccessLoading(true);
      }
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      await FileService.uploadDocument(formData).then((res: AxiosResponse) => {
        if (name === "home") {
          setHomeIntroVideo(res.data.filename);
          setHomeVideoUrl(res.data.url);
          resetField("homeIntroVideo");
        } else if (name === "service") {
          setServiceVideo(res.data.filename);
          setServiceVideoUrl(res.data.url);
          resetField("serviceVideoUrl");
        } else {
          setSuccessImage(res.data.filename);
          setSuccessImageUrl(res.data.url);
          resetField("successImage");
        }
        const message = successMessage(res.data.message);
        showToast({ message: message, type: "success" });
      });
    } catch (error) {
      console.error("Upload Failed");
      const message = errorMessage(error as AxiosError<IErrorMessageResponse>);
      if (name === "home") {
        resetField("homeIntroVideo");
      } else if (name === "service") {
        resetField("serviceVideoUrl");
      } else {
        resetField("successImage");
      }
      showToast({
        message: message,
        type: "error"
      });
    } finally {
      if (name === "home") {
        setIsHomeIntroLoading(false);
      } else if (name === "service") {
        setIsServiceLoading(false);
      } else {
        setIsSuccessLoading(false);
      }
    }
  };

  const createLandingPage = async (data: FieldValues) => {
    try {
      const LandingPagePayload: ILandingPagePayload = {
        homeVideo: homeVideoUrl,
        homeTitle: data?.homeTitle,
        homeDesc: data?.homeDesc,
        serviceVideo: serviceVideoUrl,
        serviceDesc: data?.serviceDesc,
        productDesc: data?.productDesc,
        successDesc: data?.successDesc,
        successImage: successImageUrl,
        successFinishProject: data?.successFinishProject,
        successHappyCustomer: data?.successHappyCustomer,
        successIssueResolved: data?.successIssueResolved,
        successAwardes: data?.successAwardes,
        expertTeamDesc: data?.expertTeamDesc,
        outcomeDesc: data?.clientSectionDesc
      };
      await LandingPageService.createLandingPage(LandingPagePayload).then(
        (res: AxiosResponse) => {
          const message = successMessage(res.data.message);
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
    <div>
      {/* <!-- Content Header (Page header) --> */}
      <Pageheader Title="Create LandingPage" />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-secondary">
                {/* <div className="card-header">
                  <h3 className="card-title">Create LandingPage</h3>
                </div> */}

                <form onSubmit={handleSubmit(createLandingPage)}>
                  <div className="card-body text-left">
                    <div className="row">
                      <div className="mb-3">
                        <label htmlFor="homeTitle" className="form-label">
                          Home Intro Title
                        </label>
                        <textarea
                          className="form-control"
                          {...register("homeTitle")}
                        ></textarea>
                      </div>{" "}
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Home Intro Description
                        </label>
                        <textarea
                          className="form-control"
                          {...register("homeDesc")}
                        ></textarea>
                      </div>{" "}
                      <div className="mb-3">
                        <label htmlFor="home" className="form-control">
                          Home Intro Video:{" "}
                          {isHomeIntroLoading ? (
                            <i
                              className="fa  fa-spin border-2 inline-block p-2 "
                              style={{
                                borderRadius: "100%",
                                borderBottom: "none",
                                borderTop: "none",
                                width: "4px"
                              }}
                            />
                          ) : (
                            homeIntroVideo
                          )}
                        </label>
                        <input
                          id={`home`}
                          className="form-control"
                          type="file"
                          {...register(`home`, {
                            onChange: async (e) => {
                              uploadFile(e);
                            }
                          })}
                          hidden
                        />
                      </div>{" "}
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Service Description
                        </label>
                        <textarea
                          className="form-control"
                          {...register("serviceDesc")}
                        ></textarea>
                      </div>{" "}
                      <div className="mb-3">
                        <label htmlFor="service" className="form-control">
                          Service Video:{" "}
                          {isServiceLoading ? (
                            <i
                              className="fa  fa-spin border-2 inline-block p-2 "
                              style={{
                                borderRadius: "100%",
                                borderBottom: "none",
                                borderTop: "none",
                                width: "4px"
                              }}
                            />
                          ) : (
                            serviceVideo
                          )}
                        </label>
                        <input
                          id={`service`}
                          className="form-control"
                          type="file"
                          {...register(`service`, {
                            onChange: async (e) => {
                              uploadFile(e);
                            }
                          })}
                          hidden
                        />
                      </div>{" "}
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Product Description
                        </label>
                        <textarea
                          className="form-control"
                          {...register("productDesc")}
                        ></textarea>
                      </div>{" "}
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Success Description
                        </label>
                        <textarea
                          className="form-control"
                          {...register("successDesc")}
                        ></textarea>
                      </div>{" "}
                      <div className="mb-3">
                        <label htmlFor="success" className="form-control">
                          Success Image:{" "}
                          {isSuccessLoading ? (
                            <i
                              className="fa  fa-spin border-2 inline-block p-2 "
                              style={{
                                borderRadius: "100%",
                                borderBottom: "none",
                                borderTop: "none",
                                width: "4px"
                              }}
                            />
                          ) : (
                            successImage
                          )}
                        </label>
                        <input
                          id={`success`}
                          className="form-control"
                          type="file"
                          {...register(`success`, {
                            onChange: async (e) => {
                              uploadFile(e);
                            }
                          })}
                          hidden
                        />
                      </div>{" "}
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Succes Finish Projects
                        </label>
                        <textarea
                          className="form-control"
                          {...register("successFinishProject")}
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Success Happy Cutomer
                        </label>
                        <textarea
                          className="form-control"
                          {...register("successHappyCustomer")}
                        ></textarea>
                      </div>{" "}
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Success Issue Resolved
                        </label>
                        <textarea
                          className="form-control"
                          {...register("successIssueResolved")}
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Success Awards
                        </label>
                        <textarea
                          className="form-control"
                          {...register("successAwardes")}
                        ></textarea>
                      </div>{" "}
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Expert Team Description
                        </label>
                        <textarea
                          className="form-control"
                          {...register("expertTeamDesc")}
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Client Section Descriptin
                        </label>
                        <textarea
                          className="form-control"
                          {...register("clientSectionDesc")}
                        ></textarea>
                      </div>
                    </div>
                    {/* <!-- /.card-body --> */}
                    <div className="card-footer text-center">
                      <button type="submit" className="btn btn-primary">
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Toast />
    </div>
  );
}
