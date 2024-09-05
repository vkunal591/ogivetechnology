import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Pageheader from "../../../Component/Pageheader";
import BlogService from "../../../Services/BlogService";
import { Link } from "react-router-dom";
import { IBlogResponse } from "../../../interfaces/i-blog";
import { IErrorMessageResponse } from "../../../interfaces/i-authentication";
import {
  successMessage,
  errorMessage
} from "../../../utils/fetchResponseMessage";
import { showToast } from "../../../utils/toast";
import Toast from "../Admin_Component/Toast";
import AlertDialog from "../Admin_Component/AlertDialog";

export default function BlogPage() {
  const [blogList, setBlogList] = useState<IBlogResponse[]>([]);
  const [id, setId] = useState("");
  const getBlog = async (id: string) => {
    try {
      await BlogService.getBlog(id).then((res: AxiosResponse) => {
        setBlogList(res.data.details.posts);
      });
    } catch (error) {
      const message = errorMessage(error as AxiosError<IErrorMessageResponse>);
      showToast({
        message: message,
        type: "error"
      });
    }
  };

  const deleteBlog = async (id: string) => {
    try {
      await BlogService.deleteBlog(id).then((res: AxiosResponse) => {
        getBlog("");
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
    deleteBlog(id);
    setIsOpen(false);
  };

  useEffect(() => {
    getBlog("");
  }, []);

  return (
    <div>
      <Pageheader Title="View Blog" />

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">View Blog</h3>
              </div>
              {/* <!-- /.card-header --> */}
              <div className="card-body p-0">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th style={{ width: "10px" }}></th>
                      <th>Blog Thumbnel</th>
                      <th>Blog Title</th>
                      <th>Category</th>
                      <th>Created By.</th>
                      <th>Created Date</th>
                      <th>Status</th>
                      <th style={{ width: "40px" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogList &&
                      blogList?.map((blog, index) => {
                        return (
                          <tr>
                            <td>{index + 1 + "."}</td>
                            <td>
                              <img src={blog?.file} alt="" width={50} height={40} />
                            </td>
                            <td>{blog?.title}</td>
                            <td>{blog?.category?.title}</td>
                            <td>{blog?.updatedBy?.name}</td>
                            <td>{blog?.createdAt}</td>
                            <td>
                              <span className="badge bg-success">
                                {"Active"}
                              </span>
                            </td>
                            <td>
                              <div className="d-flex">
                                <Link
                                  to={`/admin/blog/updateblog${
                                    "?" + blog?._id
                                  }`}
                                  className="btn btn-outline-primary mr-1"
                                >
                                  <i className="fa fa-edit"></i>
                                </Link>
                                <button
                                  className="btn btn-outline-danger"
                                  onClick={() => handleOpen(blog?._id)}
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
