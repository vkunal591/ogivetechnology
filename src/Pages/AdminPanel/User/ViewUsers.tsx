import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Pageheader from "../../../Component/Pageheader";
import { IErrorMessageResponse } from "../../../interfaces/i-authentication";
import { errorMessage } from "../../../utils/fetchResponseMessage";
import { showToast } from "../../../utils/toast";
import Toast from "../Admin_Component/Toast";
import AuthServices from "../../../Services/AuthServices";
import { IUserResponse } from "../../../interfaces/i-user";
export default function ViewUsers() {
  const [usersList, setUsersList] = useState<IUserResponse[]>([]);

  const getAllUsers = async () => {
    try {
      await AuthServices.getAllUsers().then((res:AxiosResponse) => {
        setUsersList(res.data.details.users);
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
    getAllUsers();
  
  }, [])
  

  return (
    <div>
      <Pageheader Title="View Blog" />

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">View Users</h3>
              </div>
              {/* <!-- /.card-header --> */}
              <div className="card-body p-0">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th style={{ width: "10px" }}></th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Created Date</th>
                      <th>Role Verified</th>
                      <th style={{ width: "40px" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersList &&
                      usersList?.map((blog, index) => {
                        return (
                          <tr>
                            <td>{index + 1 + "."}</td>
                            <td>{blog?.name}</td>
                            <td>{blog?.email}</td>
                            <td>{blog?.createdAt}</td>
                            <td>
                              <span className={`badge ${blog?.isVerified?"bg-success":"bg-danger"}`}>
                                {blog?.role === 1? "Admin" : blog?.role===2?"Manager":"User"}
                              </span>
                            </td>
                            <td>
                              <div className="d-flex">
                                {/* <button className="btn btn-outline-primary mr-1">
                                  <i className="fa fa-edit"></i>
                                </button> */}
                                <button className="btn btn-outline-danger">
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
      <Toast />
    </div>
  );
}
