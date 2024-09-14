import { AxiosError, AxiosResponse } from "axios";
import { useState, useEffect, useMemo, useRef } from "react";
import Pageheader from "../../../Component/Pageheader";
import { ICategoryResponse } from "../../../interfaces/i-category";
import CategoryService from "../../../Services/CategoryService";
import { FieldValues, useForm } from "react-hook-form";
import BlogService from "../../../Services/BlogService";
import { ICreateBlog } from "../../../interfaces/i-user";
import Toast from "../Admin_Component/Toast";
import { showToast } from "../../../utils/toast";
import {
  errorMessage,
  successMessage
} from "../../../utils/fetchResponseMessage";
import { IErrorMessageResponse } from "../../../interfaces/i-authentication";
import JoditEditor from "jodit-react";
import FileService from "../../../Services/FileService";

export default function CreateBlog() {
  const [categoryDropdownList, setCategoryDropdownList] = useState<
    ICategoryResponse[]
  >([]);
  const [imageName, setImageName] = useState("Choose File");
  const [iconName, setIconName] = useState("Choose File");
  const [imageUrl, setimageUrl] = useState("");
  const [iconUrl, seticonUrl] = useState("");
  const [isIconLoading, setIsIconLoading] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const { register, handleSubmit, reset, resetField } = useForm();
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = useMemo(() => {
    const data = {
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,

      placeholder: "Start typings..."
    };
    return data;
  }, []);
  const getCategory = async () => {
    try {
      await CategoryService.getCategory("", null, null).then(
        (res: AxiosResponse) => {
          setCategoryDropdownList(res.data.details.categories);
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
    const name = event.target.name;
    try {
      if (name === "icon") {
        setIsIconLoading(true);
      } else {
        setIsImageLoading(true);
      }
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      await FileService.uploadDocument(formData).then((res: AxiosResponse) => {
        if (name === "icon") {
          setIconName(res.data.filename);
          seticonUrl(res.data.url);
          resetField("icon");
        } else {
          setImageName(res.data.filename);
          setimageUrl(res.data.url);
          resetField("file");
        }
        const message = successMessage(res);
        showToast({ message: message, type: "success" });
      });
    } catch (error) {
      console.error("Upload Failed");
      const message = errorMessage(error as AxiosError<IErrorMessageResponse>);
      if (name === "icon") {
        setImageName("Choose File");
        resetField("file");
      } else {
        setIconName("Choose File");
        resetField("icon");
      }
      showToast({
        message: message,
        type: "error"
      });
    } finally {
      if (name === "icon") {
        setIsIconLoading(false);
      } else {
        setIsImageLoading(false);
      }
    }
  };

  const createBlog = async (data: FieldValues) => {
    try {
      const blogPayload: ICreateBlog = {
        title: data?.title,
        shortDesc: data?.shortDesc,
        desc: content,
        category: data.category,
        icon: iconUrl,
        file: imageUrl
      };
      await BlogService.createBlog(blogPayload).then((res) => {
        const message = successMessage(res.data.message);
        showToast({
          message: message,
          type: "success"
        });
        reset();
        setContent("");
        setIconName("");
        setImageName("");
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
    getCategory();
  }, []);

  return (
    <div>
      {/* <!-- Content Header (Page header) --> */}

      <Pageheader Title="Create Blog" />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-secondary">
                {/* <div className="card-header">
                  <h3 className="card-title">Create Blog</h3>
                </div> */}

                <form onSubmit={handleSubmit(createBlog)}>
                  <div className="card-body text-left">
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group mb-3">
                          <label htmlFor="title" className="form-label">
                            Category
                          </label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            {...register("category")}
                          >
                            <option selected>Select Category</option>
                            {categoryDropdownList &&
                              categoryDropdownList?.map((category, index) => {
                                return (
                                  <option key={index} value={category?._id}>
                                    {category?.title}
                                  </option>
                                );
                              })}
                          </select>
                        </div>
                      </div>
                      <div className="col-6 d-flex">
                        <div className="form-group col-6 p-0 mr-1">
                          <label htmlFor="exampleInputFile">Icon</label>
                          <div className="">
                            <label htmlFor="upload1" className="form-control">
                              {isIconLoading ? (
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
                                iconName
                              )}
                            </label>

                            <input
                              id={`upload1`}
                              className="form-control col-6"
                              type="file"
                              {...register(`icon`, {
                                onChange: async (e) => {
                                  uploadFile(e);
                                }
                              })}
                              hidden
                            />
                          </div>
                        </div>
                        <div className="form-group col-6 p-0">
                          <label htmlFor="exampleInputFile">Image</label>
                          <div className="">
                            <label htmlFor="upload2" className="form-control">
                              {isImageLoading ? (
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
                                imageName
                              )}
                            </label>

                            <input
                              id={`upload2`}
                              className="form-control col-6"
                              type="file"
                              {...register(`file`, {
                                onChange: async (e) => {
                                  uploadFile(e);
                                }
                              })}
                              hidden
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                          Title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="title"
                          placeholder="Title"
                          {...register("title")}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                          Short Description
                        </label>
                        <textarea
                          className="form-control"
                          {...register("shortDesc")}
                          rows={4}
                        ></textarea>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="content" className="form-label">
                          Description
                        </label>
                        <JoditEditor
                          ref={editor}
                          value={content}
                          config={config}
                          // tabIndex={1} // tabIndex of textarea
                          onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                          onChange={(newContent) => {
                            console.log(newContent);
                          }}
                        />
                      </div>
                    </div>
                    {/* <!-- /.card-body --> */}

                    <div className="card-footer text-center">
                      <button
                        type="submit"
                        className="btn btn-primary m-0 p-1 px-3 fs-6"
                      >
                        Post
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
