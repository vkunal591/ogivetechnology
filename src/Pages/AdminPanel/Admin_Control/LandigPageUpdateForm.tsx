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
import {
  ILandingPagePayload,
  ILandingPageResponse
} from "../../../interfaces/i-landingpage";
import { useEffect, useState } from "react";
import FileService from "../../../Services/FileService";
import TableRowsLoader from "../../../modals/TableRowsLoader";
import dayjs from "dayjs";
import AlertDialog from "../Admin_Component/AlertDialog";

export default function LandingPageUpdateForm() {
  const { register, handleSubmit, reset, resetField } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [landigpagedetailsList, setLandigpagedetailsList] = useState<
    ILandingPageResponse[]
  >([]);
  const [homeIntroVideo, setHomeIntroVideo] = useState("jhb");
  const [serviceVideo, setServiceVideo] = useState("");
  const [successImage, setSuccessImage] = useState("");
  const [homeVideoUrl, setHomeVideoUrl] = useState("");
  const [serviceVideoUrl, setServiceVideoUrl] = useState("");
  const [successImageUrl, setSuccessImageUrl] = useState("");
  const [isServiceLoading, setIsServiceLoading] = useState(false);
  const [isHomeIntroLoading, setIsHomeIntroLoading] = useState(false);
  const [isSuccessLoading, setIsSuccessLoading] = useState(false);
  const [buttonName, setButtonName] = useState("");
  const [updateId, setUpdateId] = useState("");
  const [updateData, setupdateData] = useState<ILandingPagePayload>();

  const getLandingPageInfo = async (id: string) => {
    try {
      setIsLoading(true);
      await LandingPageService.getLandingPages(id).then((res) => {
        if (!id) {
          setLandigpagedetailsList(res.data.details.landingPage);
        } else {
          const data = res.data.details.landingPage;
          setUpdateId(data?._id);
          setupdateData(data);
          setHomeIntroVideo(data?.homeVideo.split("images")[1]);
          setServiceVideo(data?.serviceVideo.split("images")[1]);
          setSuccessImage(data?.successImage.split("images")[1]);
          setHomeVideoUrl(data?.homeVideo);
          setServiceVideoUrl(data?.serviceVideo);
          setSuccessImageUrl(data?.successImage);
          reset({
            homeVideo: data?.homeVideo,
            homeTitle: data?.homeTitle,
            homeDesc: data?.homeDesc,
            serviceVideo: data?.serviceVideo,
            serviceDesc: data?.serviceDesc,
            productDesc: data?.productDesc,
            successDesc: data?.successDesc,
            successImage: data?.successImage,
            successFinishProject: data?.successFinishProject,
            successHappyCustomer: data?.successHappyCustomer,
            successIssueResolved: data?.successIssueResolved,
            successAwardes: data?.successAwardes,
            expertTeamDesc: data?.expertTeamDesc,
            outcomeDesc: data?.clientSectionDesc
          });
        }
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

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
        const message = successMessage(res);
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
        setIsHomeIntroLoading(true);
      } else if (name === "service") {
        setIsServiceLoading(true);
      } else {
        setIsSuccessLoading(true);
      }
    }
  };

  const updateLandingPage = async (data: FieldValues) => {
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
      await LandingPageService.updateLandingPage(
        updateId,
        LandingPagePayload
      ).then((res: AxiosResponse) => {
        getLandingPageInfo("");
        const message = successMessage(res.data.message);
        showToast({
          message: message,
          type: "success"
        });
        reset();
      });
    } catch (error) {
      const message = errorMessage(error as AxiosError<IErrorMessageResponse>);
      showToast({
        message: message,
        type: "error"
      });
    }
  };

  const deleteLandingPage = async (id: string) => {
    try {
      await LandingPageService.deleteLandingPage(id).then(
        (res: AxiosResponse) => {
          getLandingPageInfo("");
          const message = successMessage(res.data.message);
          showToast({
            message: message,
            type: "success"
          });
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

  // Alert component related code
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = (id: string, name: string) => {
    setIsOpen(true);
    setButtonName(name);
    setUpdateId(id);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };
  const handleOk = () => {
    if (buttonName === "Edit") {
      getLandingPageInfo(updateId);
    } else {
      deleteLandingPage(updateId);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    getLandingPageInfo("");
  }, []);

  return (
    <div>
      {/* <!-- Content Header (Page header) --> */}
      <Pageheader Title="Update LandingPage" />

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="card">
              <div className="card-header bg-white">
                <h3 className="card-title">Landing Pages</h3>
              </div>
              <div className="card-body table-responsive p-0">
                <table className="table table-head-fixed text-nowrap text-center table-striped table-valign-middle">
                  <thead>
                    <tr>
                      <th>S. No.</th>

                      <th>Title</th>
                      <th>Awarded</th>
                      <th>Projects</th>
                      <th>Created Date</th>
                      <th>Status</th>
                      <th style={{ width: "40px" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? (
                      <TableRowsLoader rowsNum={5} cellsNum={8} />
                    ) : landigpagedetailsList.length === 0 ? (
                      <tr>No Data Found</tr>
                    ) : (
                      landigpagedetailsList?.map((landingPage, index) => {
                        return (
                          <tr>
                            <td>{index + 1 + "."}</td>
                            <td>{landingPage?.homeTitle}</td>
                            <td>{landingPage?.successAwardes}</td>
                            <td>{landingPage?.successFinishProject}</td>
                            <td>
                              {dayjs(landingPage?.createdAt).format(
                                "DD/MM/YYYY"
                              )}
                            </td>
                            <td>
                              <span className={`badge bg-${index===0?"success":"danger"}`}>
                                {index===0?"Active":"Inactive"}
                              </span>
                            </td>
                            <td>
                              <div className="d-flex">
                                <button
                                  onClick={() =>
                                    handleOpen(landingPage?._id, "Edit")
                                  }
                                  className="btn btn-primary mx-1 m-0 p-0"
                                >
                                  <i className="fa fa-edit mx-0"></i>
                                </button>
                                <button
                                  className="btn btn-danger m-0 p-0"
                                  onClick={() =>
                                    handleOpen(landingPage?._id, "Delete")
                                  }
                                >
                                  <i className="fa fa-trash mx-0"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
              {/* <!-- /.card-body --> */}
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="card card-secondary">
                {/* <div className="card-header">
                  <h3 className="card-title">Create LandingPage</h3>
                </div> */}

                <form onSubmit={handleSubmit(updateLandingPage)}>
                  <div className="card-body text-left">
                    <div className="row">
                      <div className="mb-3">
                        <label htmlFor="homeTitle" className="form-label">
                          Home Intro Title
                        </label>
                        <textarea
                          defaultValue={updateData?.homeTitle}
                          className="form-control"
                          {...register("homeTitle")}
                        ></textarea>
                      </div>{" "}
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Home Intro Description
                        </label>
                        <textarea
                          defaultValue={updateData?.homeDesc}
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
                          defaultValue={updateData?.serviceDesc}
                          className="form-control"
                          {...register("serviceDesc")}
                        ></textarea>
                      </div>{" "}
                      <div className="mb-3">
                        <label htmlFor="service" className="form-control">
                          Service Video {serviceVideo} Service Video:{" "}
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
                          defaultValue={updateData?.productDesc}
                          className="form-control"
                          {...register("productDesc")}
                        ></textarea>
                      </div>{" "}
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Success Description
                        </label>
                        <textarea
                          defaultValue={updateData?.successDesc}
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
                          defaultValue={updateData?.successFinishProject}
                          {...register("successFinishProject")}
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Success Happy Cutomer
                        </label>
                        <textarea
                          className="form-control"
                          defaultValue={updateData?.successHappyCustomer}
                          {...register("successHappyCustomer")}
                        ></textarea>
                      </div>{" "}
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Success Issue Resolved
                        </label>
                        <textarea
                          className="form-control"
                          defaultValue={updateData?.successIssueResolved}
                          {...register("successIssueResolved")}
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Success Awards
                        </label>
                        <textarea
                          className="form-control"
                          defaultValue={updateData?.successAwardes}
                          {...register("successAwardes")}
                        ></textarea>
                      </div>{" "}
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Expert Team Description
                        </label>
                        <textarea
                          className="form-control"
                          defaultValue={updateData?.expertTeamDesc}
                          {...register("expertTeamDesc")}
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Client Section Descriptin
                        </label>
                        <textarea
                          className="form-control"
                          defaultValue={updateData?.outcomeDesc}
                          {...register("clientSectionDesc")}
                        ></textarea>
                      </div>
                    </div>
                    {/* <!-- /.card-body --> */}
                    <div className="card-footer text-center">
                      <button type="submit" className="btn btn-primary">
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AlertDialog
        isOpen={isOpen}
        onCancel={handleCancel}
        onOk={handleOk}
        cancelText="No"
        text={`Are you sure want to ${buttonName.toLowerCase()}`}
        okText="Yes"
        heading={`${buttonName}`}
        messageType="error"
      />
      <Toast />
    </div>
  );
}
