import { useForm } from "react-hook-form";
import Pageheader from "../../../Component/Pageheader";
import Toast from "../Admin_Component/Toast";

export default function SiteEdit() {
  const { register } = useForm();
  return (
    <div>
      {/* <!-- Content Header (Page header) --> */}

      <Pageheader Title="Site Edit" />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="card card-white">
                <div className="card-header">
                  <h3 className="card-title">Basic Details</h3>
                </div>

                <form>
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
                    <div className="row">
                      <div className="col-6">
                        <div className="mb-3">
                          <label htmlFor="title" className="form-label">
                            Font
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
                          <label htmlFor="link">Font Color</label>

                          <input
                            type="color"
                            className="form-control"
                            id="link"
                            placeholder="link"
                            {...register("description")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="mb-3">
                          <label htmlFor="title" className="form-label">
                            Logo
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="title"
                            placeholder="Title"
                            {...register("title")}
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label htmlFor="link">Background Color</label>

                          <input
                            type="color"
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
                        SAVE
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
                      {/* {categoryList &&
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
                            </td> 
                            <td>
                              <div className="d-flex">
                                <button className="btn btn-outline-primary mr-1">
                                  <i className="fa fa-edit"></i>
                                </button>
                                <button className="btn btn-outline-danger">
                                  <i className="fa fa-trash"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })} */}
                    </tbody>
                  </table>
                </div>
                {/* <!-- /.card-body --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Toast />
    </div>
  );
}
