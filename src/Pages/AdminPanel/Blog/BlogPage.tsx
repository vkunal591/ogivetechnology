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
import PaginationComponent from "../../../modals/Pagination";
import TableRowsLoader from "../../../modals/TableRowsLoader";

export default function BlogPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [blogList, setBlogList] = useState<IBlogResponse[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [currentpage, setCurrentpage] = useState(1);
  const [totalPage, setTotalPage] = useState<number | null>(null);
  const [id, setId] = useState("");
  const getBlog = async (id: string) => {
    try {
      setIsLoading(true)
      await BlogService.getBlog(id, rowsPerPage, currentpage).then(
        (res: AxiosResponse) => {
          setBlogList(res.data.details.posts);
          setTotalPage(res.data.details.pages);
        }
      );
    } catch (error) {
      const message = errorMessage(error as AxiosError<IErrorMessageResponse>);
      showToast({
        message: message,
        type: "error"
      });
    }finally{
      setIsLoading(false)
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
  // pagination

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
    getBlog("");
  }, [currentpage, rowsPerPage]);

  return (
    <div>
      <Pageheader Title="View Blog" />

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="card">
    
              <div className="card-header bg-white">
                  <h3 className="card-title">All Blogs List</h3>
                </div>
              <div className="card-body table-responsive p-0">
                <table className="table table-head-fixed text-nowrap text-center table-striped table-valign-middle">
                  <thead>
                    <tr>
                      <th >S. No.</th>
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
                    {isLoading ? (
                    <TableRowsLoader rowsNum={5} cellsNum={8} />
                  ) : blogList.length === 0 ? (
                    <tr>No Data Found</tr>
                  ) : (
                      blogList?.map((blog, index) => {
                        return (
                          <tr>
                            <td>{index + 1 + "."}</td>
                            <td>
                              <img
                                loading="lazy"
                                src={blog?.file}
                                alt=""
                                width={50}
                                height={40}
                              />
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
                                  className="btn btn-primary mx-1 m-0 p-0"
                                >
                                  <i className="fa fa-edit mx-0"></i>
                                </Link>
                                <button
                                  className="btn btn-danger m-0 p-0"
                                  onClick={() => handleOpen(blog?._id)}
                                >
                                  <i className="fa fa-trash mx-0"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      }))}
                  </tbody>
                </table>
                <PaginationComponent
                  count={totalPage && (totalPage* rowsPerPage)|| 0} // Total number of records
                  page={currentpage-1} // -1 because PaginationComponent is zero-based
                  rowsPerPage={rowsPerPage}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
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
