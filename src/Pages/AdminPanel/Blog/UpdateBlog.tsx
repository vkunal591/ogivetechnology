import { AxiosError, AxiosResponse } from "axios";
import { useState, useEffect, useMemo, useRef } from "react";
import Pageheader from "../../../Component/Pageheader";
import { FieldValues, useForm } from "react-hook-form";
import BlogService from "../../../Services/BlogService";
import { ICreateBlog } from "../../../interfaces/i-user";
import { ICategoryResponse } from "../../../interfaces/i-category";
import CategoryService from "../../../Services/CategoryService";
import { IBlogResponse } from "../../../interfaces/i-blog";
import { IErrorMessageResponse } from "../../../interfaces/i-authentication";
import {
  successMessage,
  errorMessage
} from "../../../utils/fetchResponseMessage";
import { showToast } from "../../../utils/toast";
import Toast from "../Admin_Component/Toast";
import JoditEditor from "jodit-react";
import FileService from "../../../Services/FileService";

export default function UpdateBlog() {
  const [blogData, setBlogData] = useState<IBlogResponse>();
  const [id, setid] = useState("");
  const { register, handleSubmit, resetField, reset } = useForm();
  const [categoryDropdownList, setCategoryDropdownList] = useState<
    ICategoryResponse[]
  >([]);
  const [imageName, setImageName] = useState("Choose File");
  const [iconName, setIconName] = useState("Choose File");
  const [imageUrl, setimageUrl] = useState("");
  const [iconUrl, seticonUrl] = useState("");
  const [isIconLoading, setIsIconLoading] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = useMemo(() => {
    const data = {
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,

      placeholder: ""
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

  const getBlog = async (id: string) => {
    try {
      await BlogService.getBlog(id, null, null).then((res) => {
        const data = res.data.details.post;
        setBlogData(res.data.details.post);
        setContent(data?.desc);
        setimageUrl(data?.file);
        setImageName(data?.file.split("images/")[1]);
        setIconName(data?.icon.split("images/")[1]);
        seticonUrl(data?.icon);
        reset({
          title: data?.title,
          description: data?.desc,
          category: data?.category._id,
          image: data?.file,
          icon: data?.icon,
          shortDesc: data?.shortDesc
        });
      });
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
      setImageName("Choose File");
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
  const updateBlog = async (data: FieldValues) => {
    try {
      const updatePayload: ICreateBlog = {
        title: data?.title,
        desc: content,
        category: data.category,
        file: imageUrl,
        shortDesc: data?.shortDesc,
        icon: iconUrl
      };
      await BlogService.updateBlog(id, updatePayload).then((res) => {
        const message = successMessage(res.data.details.message);
        getBlog(window.location.href.split("?")[1]);
        showToast({
          message: message,
          type: "success"
        });
        // reset();
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
    getBlog(window.location.href.split("?")[1]);
    setid(window.location.href.split("?")[1]);
  }, []);

  return (
    <div>
      {/* <!-- Content Header (Page header) --> */}

      <Pageheader Title="Update Blog" />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-secondary">
                {/* <div className="card-header">
                  <h3 className="card-title">Create Blog</h3>
                </div> */}

                <form onSubmit={handleSubmit(updateBlog)}>
                  <div className="card-body text-left">
                    <div className="row">
                      <div className="col-6">
                        <div className="mb-3">
                          <label htmlFor="title" className="form-label">
                            Category
                          </label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            {...register("category")}
                            defaultValue={blogData?.category._id}
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
                            <label
                              htmlFor="upload1"
                              className="form-control overflow-hidden w-100"
                            >
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
                          <div className="d-flex">
                            <label
                              htmlFor="upload"
                              className="form-control overflow-hidden"
                            >
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
                              id={`upload`}
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
                        className="btn btn-primary p-0 m-0 "
                      >
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
      <Toast />
    </div>
  );
}
