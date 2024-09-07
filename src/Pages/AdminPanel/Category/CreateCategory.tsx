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
import PaginationComponent from "../../../modals/Pagination";
import TableRowsLoader from "../../../modals/TableRowsLoader";

export default function CreateCategory() {
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [currentpage, setCurrentpage] = useState(1);
  const [totalPage, setTotalPage] = useState<number | null>(null);
  const [categoryList, setCategoryList] = useState<ICategoryResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [updateData, setUpdateData] = useState({
    title: "",
    desc: ""
  });
  const [id, setId] = useState("");
  const [buttonName, setButtonName] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const createCategory = async (data: FieldValues) => {
    try {
      const categoryPayload: ICategoryPayload = {
        title: data?.title,
        desc: data?.description
      };
      let updateId = "";
      if (buttonName === "Update") {
        updateId = id;
      }
      await CategoryService.createCategory(updateId, categoryPayload).then(
        (res: AxiosResponse) => {
          getCategory("");
          reset();
          if (buttonName === "Update") {
            setUpdateData({
              title: "",
              desc: ""
            });
            setButtonName("");
          }
          const message = successMessage(res.data.message);
          showToast({
            message: message,
            type: "success"
          });
          setId("");
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

  const getCategory = async (id: string) => {
    try {
      setIsLoading(true);
      await CategoryService.getCategory(id, rowsPerPage, currentpage).then(
        (res) => {
          if (buttonName === "Update") {
            const data = res.data.details.category;
            setUpdateData({
              title: data?.title,
              desc: data?.desc
            });
            reset({
              title: data?.title,
              desc: data?.desc
            });
          } else {
            setTotalPage(res.data.details.pages);
            setCategoryList(res.data.details.categories);
          }
        }
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteCategory = async (id: string) => {
    try {
      await CategoryService.deleteCategory(id).then((res: AxiosResponse) => {
        getCategory("");
        const message = successMessage(res.data.message);
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
  const handleOpen = (id: string, name: string) => {
    setButtonName(name);
    setIsOpen(true);
    setId(id);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };
  const handleOk = () => {
    if (buttonName === "Update") {
      getCategory(id);
    } else {
      deleteCategory(id);
    }
    setIsOpen(false);
  };

  // Pagination
  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setCurrentpage(newPage + 1); // +1 because newPage is zero-based
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentpage(1); // Reset to page 1 when rows per page change
  };

  useEffect(() => {
    getCategory("");
  }, [rowsPerPage, currentpage]);

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
                            defaultValue={updateData?.title}
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
                            defaultValue={updateData?.desc}
                            placeholder="Description"
                            {...register("description")}
                          />
                        </div>
                      </div>
                    </div>
                    {/* <!-- /.card-body --> */}

                    <div className="card-footer text-center">
                      <button
                        type="submit"
                        className="btn btn-primary m-0 p-2 fs-6"
                      >
                        {buttonName === "Update" ? "Update" : "Add"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Total Categories</h3>
                </div>
                {/* <!-- /.card-header --> */}
                <div className="card-body p-0">
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th >S. No.</th>
                        <th>Blog Title</th>
                        <th>Created Date</th>
                        {/* <th>Status</th> */}
                        <th style={{ width: "40px" }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {isLoading ? (
                        <TableRowsLoader rowsNum={5} cellsNum={4} />
                      ) : categoryList?.length === 0 ? (
                        <tr>NO Data Found</tr>
                      ) : (
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
                                  <button
                                    className="btn btn-primary m-0 p-0 mx-1"
                                    title="Update"
                                    onClick={() =>
                                      handleOpen(category?._id, "Update")
                                    }
                                  >
                                    <i className="fa fa-edit"></i>
                                  </button>
                                  <button
                                    className="btn btn-danger m-0 p-0 disabled"
                                    title="Delete"
                                    onClick={() =>
                                      handleOpen(category?._id, "Delete")
                                    }
                                  >
                                    <i className="fa fa-trash"></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                  <PaginationComponent
                    count={(totalPage && totalPage * rowsPerPage) || 0} // Total number of records
                    page={currentpage - 1} // -1 because PaginationComponent is zero-based
                    rowsPerPage={rowsPerPage}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
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
        text={`Are you sure want to ${buttonName.toLowerCase()}?`}
        okText="Yes"
        heading={`${buttonName} Category`}
        messageType="error"
      />
      <Toast />
    </div>
  );
}
