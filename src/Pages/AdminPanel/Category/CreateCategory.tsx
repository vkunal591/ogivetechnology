import { AxiosError, AxiosResponse } from "axios";
import Pageheader from "../../../Component/Pageheader";
import { FieldValues, useForm } from "react-hook-form";
import CategoryService from "../../../Services/CategoryService";
import {
  ICategoryPayload,
  ICategoryResponse
} from "../../../interfaces/i-category";
import { useState, useEffect } from "react";
import { IErrorMessageResponse } from "../../../interfaces/i-authentication";
import {
  successMessage,
  errorMessage
} from "../../../utils/fetchResponseMessage";
import { showToast } from "../../../utils/toast";
import Toast from "../Admin_Component/Toast";
import AlertDialog from "../Admin_Component/AlertDialog";

export default function CreateCategory() {
  const [categoryList, setCategoryList] = useState<ICategoryResponse[]>([]);
  const [id, setId] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const createCategory = async (data: FieldValues) => {
    try {
      const categoryPayload: ICategoryPayload = {
        title: data?.title,
        desc: data?.description
      };
      await CategoryService.createCategory(categoryPayload).then(
        (res: AxiosResponse) => {
          getCategory();
          reset();
          const message = successMessage(res.data.details.message);
          showToast({
            message: message,
            type: "info"
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

  const getCategory = async () => {
    try {
      await CategoryService.getCategory().then((res) => {
        setCategoryList(res.data.details.categories);
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategory = async (id: string) => {
    try {
      await CategoryService.deleteCategory(id).then((res: AxiosResponse) => {
        getCategory();
        const message = successMessage(res.data.details.message);
        showToast({
          message: message,
          type: "success"
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

  // Alert component related code
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = (id: string) => {
    setIsOpen(true);
    setId(id);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };
  const handleOk = () => {
    deleteCategory(id);
    setIsOpen(false);
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div>
      {/* <!-- Content Header (Page header) --> */}

      <Pageheader Title="Create Category" />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="card card-secondary">
                {/* <div className="card-header">
                <h3 className="card-title">Create Blog</h3>
              </div> */}

                <form onSubmit={handleSubmit(createCategory)}>
                  <div className="card-body text-left">
                    <div className="row">
                      <div className="col-6">
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
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label htmlFor="link">Description</label>

                          <input
                            type="text"
                            className="form-control"
                            id="link"
                            placeholder="link"
                            {...register("description")}
                          />
                        </div>
                      </div>
                    </div>
                    {/* <!-- /.card-body --> */}

                    <div className="card-footer text-center">
                      <button type="submit" className="btn btn-primary">
                        Add
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Condensed Full Width Table</h3>
                </div>
                {/* <!-- /.card-header --> */}
                <div className="card-body p-0">
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th style={{ width: "10px" }}></th>
                        <th>Blog Title</th>
                        <th>Created Date</th>
                        {/* <th>Status</th> */}
                        <th style={{ width: "40px" }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categoryList &&
                        categoryList?.map((category, index) => {
                          return (
                            <tr key={index}>
                              <td>{index + 1 + "."}</td>
                              <td>{category?.title}</td>
                              <td>{category?.createdAt}</td>
                              {/* <td>
                                <span className="badge bg-success">
                                  {category?.status ? "Active" : "Inactive"}
                                </span>
                              </td> */}
                              <td>
                                <div className="d-flex">
                                  <button className="btn btn-outline-primary mr-1">
                                    <i className="fa fa-edit"></i>
                                  </button>
                                  <button
                                    className="btn btn-outline-danger"
                                    onClick={() => handleOpen(category?._id)}
                                  >
                                    <i className="fa fa-trash"></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
                {/* <!-- /.card-body --> */}
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
        text={`Are you sure want to delete?`}
        okText="Yes"
        heading={"Delete Category"}
        messageType="error"
      />
      <Toast />
    </div>
  );
}
