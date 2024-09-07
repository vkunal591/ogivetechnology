import { AxiosError, AxiosResponse } from "axios";
import Pageheader from "../../../Component/Pageheader";
import { FieldValues, useForm } from "react-hook-form";
import { IErrorMessageResponse } from "../../../interfaces/i-authentication";
import { successMessage, errorMessage } from "../../../utils/fetchResponseMessage";
import { showToast } from "../../../utils/toast";
import Toast from "../Admin_Component/Toast";
import AuthServices from "../../../Services/AuthServices";

export default function CreateUser() {
  const { register, handleSubmit, reset } = useForm();

  const createUser = async (data: FieldValues) => {
    try {
      const userPayload = {
        name: data?.name,
        role: data?.role,
        email: data?.email,
        password: data?.password
      };
      await AuthServices.createUser(userPayload).then((res:AxiosResponse) => {
        const message = successMessage(res.data.details.message);
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

  return (
    <div>
      {/* <!-- Content Header (Page header) --> */}

      <Pageheader Title="Create User" />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-secondary">
                {/* <div className="card-header">
                  <h3 className="card-title">Create User</h3>
                </div> */}

                <form onSubmit={handleSubmit(createUser)}>
                  <div className="card-body text-left">
                    <div className="row">
                      <div className="col-6">
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Name"
                            {...register("name")}
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label htmlFor="exampleInputFile">Role</label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            {...register("role")}
                          >
                            <option selected>Select Category</option>
                            <option value="1">Admin</option>
                            <option value="2">Manager</option>
                            <option value="3">User</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email"
                          {...register("email")}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Password"
                          {...register("password")}
                        />
                      </div>
                    </div>
                    {/* <!-- /.card-body --> */}

                    <div className="card-footer text-center">
                      <button type="submit" className="btn btn-primary">
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
