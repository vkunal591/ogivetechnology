import React from "react";
import Pageheader from "../../../Component/Pageheader";

export default function ViewBlog() {
  const blogList = [
    { title: "Blog 1", createdDate: "25/4/2024", status: true },
    { title: "Blog 2", createdDate: "25/4/2024", status: true },
    { title: "Blog 3", createdDate: "25/4/2024", status: true },
    { title: "Blog 4", createdDate: "25/4/2024", status: true }
  ];

  return (
    <div>
      <Pageheader Title="View Blog" />

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Condensed Full Width Table</h3>
              </div>
              {/* <!-- /.card-header --> */}
              <div className="card-body p-0">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th style={{ width: "10px" }}>#</th>
                      <th>Blog Title</th>
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
                            <td>{blog?.title}</td>
                            <td>{blog?.createdDate}</td>
                            <td>
                              <span className="badge bg-success">
                                {blog?.status ? "Active" : "Inactive"}
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
                      })}
                  </tbody>
                </table>
              </div>
              {/* <!-- /.card-body --> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
