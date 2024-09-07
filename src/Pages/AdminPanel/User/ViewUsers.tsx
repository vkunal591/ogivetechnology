import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Pageheader from "../../../Component/Pageheader";
import { IErrorMessageResponse } from "../../../interfaces/i-authentication";
import { errorMessage } from "../../../utils/fetchResponseMessage";
import { showToast } from "../../../utils/toast";
import Toast from "../Admin_Component/Toast";
import { IUserResponse } from "../../../interfaces/i-user";
import AuthServices from "../../../Services/AuthServices";
import PaginationComponent from "../../../modals/Pagination";
import TableRowsLoader from "../../../modals/TableRowsLoader";
export default function ViewUsers() {
  const [usersList, setUsersList] = useState<IUserResponse[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [currentpage, setCurrentpage] = useState(1);
  const [totalPage, setTotalPage] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const getAllUsers = async () => {
    try {
      setIsLoading(true);
      await AuthServices.getAllUsers().then((res: AxiosResponse) => {
        setUsersList(res.data.details.users);
        setTotalPage(res.data.details.pages);
      });
    } catch (error) {
      const message = errorMessage(error as AxiosError<IErrorMessageResponse>);
      showToast({
        message: message,
        type: "error"
      });
    } finally {
      setIsLoading(false);
    }
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
    getAllUsers();
  }, [currentpage, rowsPerPage]);

  return (
    <div>
      <Pageheader Title="View Users" />

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="card">
              <div className="card-header bg-white">
                <h3 className="card-title">View Users</h3>
              </div>
              {/* <!-- /.card-header --> */}
              <div className="card-body p-0">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>S. No.</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Created Date</th>
                      <th>Role Verified</th>
                      <th style={{ width: "40px" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? (
                      <TableRowsLoader rowsNum={5} cellsNum={6} />
                    ) : usersList?.length === 0 ? (
                      <tr>Data Not Found</tr>
                    ) : (
                      usersList?.map((blog, index) => {
                        return (
                          <tr>
                            <td>{index + 1 + "."}</td>
                            <td>{blog?.name}</td>
                            <td>{blog?.email}</td>
                            <td>{blog?.createdAt}</td>
                            <td>
                              <span
                                className={`badge ${
                                  blog?.isVerified ? "bg-success" : "bg-danger"
                                }`}
                              >
                                {blog?.role === 1
                                  ? "Admin"
                                  : blog?.role === 2
                                  ? "Manager"
                                  : "User"}
                              </span>
                            </td>
                            <td>
                              <div className="d-flex">
                                {/* <button className="btn btn-outline-primary mr-1">
                                  <i className="fa fa-edit"></i>
                                </button> */}
                                <button className="btn btn-danger mr-1 m-0 p-0">
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
      </section>
      <Toast />
    </div>
  );
}
