import ilogo from "../../assets/iLogo.png";
import bgImg from "../../assets/Career_Page-3.webp";
import improvement from "../../assets/improvement.jpg";
import achivement from "../../assets/achivement.webp";
import matrix from "../../assets/matrix.webp";

export default function Quality() {
  return (
    <>
      <div
        className="container text-center"
        style={{
          background: `url(${bgImg})`,
          minWidth: "100%",
          minHeight: "550px",
        //   opacity: "0.80"
        }}
      >
        <h1 className="text-white" style={{ paddingTop: "15rem" }}>
          <strong>Quality And Certifications</strong>
        </h1>
      </div>
      <div className="container">
        <div className="row justify-content-md-center text-center">
          <div className="col-12 col-md-10 col-lg-8">
            <h5 className="card-header cs-title-style  bg-transparent border-0 mb-3 mt-2">
              <span>
                <img
                  className="mx-1"
                  src={ilogo}
                  alt=""
                  width={8}
                  style={{ rotate: "0deg" }}
                />
              </span>
              INTRODUCTIONS
            </h5>
            <p className="mb-5 text-center">
              Cyient has built a culture focused on quality and business
              excellence that allows us to create value for all stakeholders. We
              are committed to institutionalizing practices that conform to
              safety, security, regulatory, sustainability, and statutory
              requirements.
            </p>
            {/* <hr className="w-50 mx-auto mb-2 mb-xl-9 border-dark-subtle" /> */}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-md-center text-center">
          <div className="col-12 col-md-10 col-lg-8">
            <h5 className="card-header cs-title-style  bg-transparent border-0 mb-3 mt-2">
              <span>
                {/* <img
                  className="mx-1"
                  src={ilogo}
                  alt=""
                  width={8}
                  style={{ rotate: "0deg" }}
                /> */}
              </span>
              OUR OBJECTIVES
            </h5>

            <hr className="w-50 mx-auto mb-2 mb-xl-9 border-dark-subtle" />
          </div>
        </div>
        <section className=" text-center" style={{ minHeight: "550px" }}>
          <div className="row ">
            <div
              className="card static m-4 bg-danger col mx-4"
              style={{ width: "18rem;" }}
            >
              <img
                src={improvement}
                height={200}
                width={350}
                className="card-img-to mx-auto my-4"
                alt="..."
              />

              <div className="card-body">
                <h4 className="card-titl">
                  <strong>Improvements</strong>.
                </h4>

                <p className="card-text">
                  Constant improvements of stakeholder engagement scores
                </p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
            <div
              className="card static m-4 bg-danger col mx-4 text-center"
              style={{ width: "20rem;" }}
            >
              <img
                src={matrix}
                width={350}

                height={200}
                className="card-img-to mx-auto my-4"
                alt="..."
              />
              <div className="card-body">
                <h4 className="card-titl">
                  <strong>Skill matrix</strong>.
                </h4>

                <p className="card-text">
                  Continuous building of skill and capabilities in tune with
                  evolving market dynamics
                </p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
            <div
              className="card static m-4 bg-danger col mx-4"
              style={{ width: "18rem;" }}
            >
              <img
                src={achivement}
                height={200}
                width={350}
                className="card-img-to mx-auto my-4"
                alt="..."
              />

              <div className="card-body">
                <h4 className="card-titl">
                  <strong>Achievement</strong>.
                </h4>
                <p className="card-text">
                  Achieving the best performance metrics within the industries
                  we serve
                </p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
