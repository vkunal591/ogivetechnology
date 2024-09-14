import achivement from "../assets/achivement.webp";
import ilogo from "../assets/iLogo.png";
import { ILandingPagePayload } from "../interfaces/i-landingpage";

export default function Achivement(porps:{achivemenSectiontData:ILandingPagePayload | undefined}) {
  return (
    <section className="bg-light py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h5 className="card-header cs-title-style  bg-transparent border-0 mb-5 mt-3">
              <span>
                <img
                  className="m-0"
                  src={ilogo}
                  alt=""
                  width={8}
                  style={{ rotate: "0deg" }}
                />
              </span>
              Our Success
            </h5>
            <p className="mb-5 text-center">
              {porps?.achivemenSectiontData?.successDesc}
            </p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row gy-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6">
            <img
              className="img-fluid rounded"
              loading="lazy"
              src={porps?.achivemenSectiontData?porps?.achivemenSectiontData.successImage:achivement}
              alt="Our Success"
            />
          </div>
          <div className="col-12 col-lg-6">
            <div className="row justify-content-xl-end">
              <div className="col-12 col-xl-11">
                <div className="row gy-4 gy-sm-0 overflow-hidden">
                  <div className="col-12 col-sm-6">
                    <div className="card border-0 border-bottom border-primary shadow-sm mb-4">
                      <div className="card-body text-center p-4 p-xxl-5">
                        <h3 className="display-2 fw-bold mb-2">
                          {" "}
                          {porps?.achivemenSectiontData?.successFinishProject}
                        </h3>
                        <p className="fs-5 mb-0 text-secondary">
                          Finished Projects
                        </p>
                      </div>
                    </div>
                    <div className="card border-0 border-bottom border-primary shadow-sm">
                      <div className="card-body text-center p-4 p-xxl-5">
                        <h3 className="display-2 fw-bold mb-2">
                          {porps?.achivemenSectiontData?.successIssueResolved }
                        </h3>
                        <p className="fs-5 mb-0 text-secondary">
                          Issues Solved
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="card stati border-0 border-bottom border-primary shadow-sm mt-lg-6 mt-xxl-8 mb-4">
                      <div className="card-body text-center p-4 p-xxl-5">
                        <h3 className="display-2 fw-bold mb-2">
                          {porps?.achivemenSectiontData?.successHappyCustomer }
                        </h3>
                        <p className="fs-5 mb-0 text-secondary">
                          Happy Customers
                        </p>
                      </div>
                    </div>
                    <div className="card border-0 border-bottom border-primary shadow-sm">
                      <div className="card-body text-center p-4 p-xxl-5">
                        <h3 className="display-2 fw-bold mb-2">
                          {porps?.achivemenSectiontData?.successAwardes}
                        </h3>
                        <p className="fs-5 mb-0 text-secondary">Awwwards</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
