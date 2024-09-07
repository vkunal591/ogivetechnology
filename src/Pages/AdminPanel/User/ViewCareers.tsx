import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Pageheader from "../../../Component/Pageheader";
import { IErrorMessageResponse } from "../../../interfaces/i-authentication";
import {
  errorMessage,
  successMessage
} from "../../../utils/fetchResponseMessage";
import { showToast } from "../../../utils/toast";
import Toast from "../Admin_Component/Toast";
import PaginationComponent from "../../../modals/Pagination";
import TableRowsLoader from "../../../modals/TableRowsLoader";
import { ICareerForm } from "../../../interfaces/i-form";
import FormService from "../../../Services/FormService";
import dayjs from "dayjs";
import AlertDialog from "../Admin_Component/AlertDialog";
export default function ViewCareers() {
  const [id, setId] = useState("");
  const [careerList, setCareerList] = useState<ICareerForm[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [currentpage, setCurrentpage] = useState(1);
  const [totalPage, setTotalPage] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const getAllCareers = async () => {
    try {
      setIsLoading(true);
      await FormService.getCareers("", rowsPerPage, currentpage, "").then(
        (res: AxiosResponse) => {
          setCareerList(res.data.details.career);
          setTotalPage(res.data.details.pages);
        }
      );
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

  const deleteCareer = async (id: string) => {
    try {
      await FormService.deleteCareer(id).then((res: AxiosResponse) => {
        getAllCareers();
        const message = successMessage(res.data.message);
        console.log(message);
        showToast({
          message: "Deleted Successfully",
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
    deleteCareer(id);
    setIsOpen(false);
  };

  useEffect(() => {
    getAllCareers();
  }, [currentpage, rowsPerPage]);

  return (
    <div>
      <Pageheader Title="View Careers" />

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="card">
              <div className="card-header bg-white">
                <h3 className="card-title">View Careers</h3>
              </div>
              {/* <!-- /.card-header --> */}
              <div className="card-body p-0">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>S. No.</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone No</th>
                      <th>Designation</th>
                      <th>Resume</th>
                      <th>Date</th>

                      <th style={{ width: "40px" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? (
                      <TableRowsLoader rowsNum={5} cellsNum={8} />
                    ) : careerList?.length === 0 ? (
                      <tr>Data Not Found</tr>
                    ) : (
                      careerList?.map((career, index) => {
                        return (
                          <tr>
                            <td>{index + 1 + "."}</td>
                            <td>{career?.name}</td>
                            <td>{career?.email}</td>
                            <td>{career?.phone}</td>
                            <td>{career?.role}</td>
                            <td>
                              <a
                                href={career?.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View Resume
                              </a>
                            </td>
                            <td>
                              {dayjs(career?.createdAt).format("DDMMYYYY")}
                            </td>

                            <td>
                              <div className="d-flex">
                                {/* <button className="btn btn-outline-primary mr-1">
                                  <i className="fa fa-edit"></i>
                                </button> */}
                                <button
                                  className="btn btn-danger mr-1 m-0 p-0"
                                  onClick={() => handleOpen(career?._id)}
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
      </section>
      <AlertDialog
        isOpen={isOpen}
        onCancel={handleCancel}
        onOk={handleOk}
        cancelText="No"
        text={`Are you sure want to delete?`}
        okText="Yes"
        heading={`Delete Category`}
        messageType="error"
      />
      <Toast />
    </div>
  );
}
