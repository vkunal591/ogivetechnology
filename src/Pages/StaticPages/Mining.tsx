import bgImg from "../../assets/mining banner opacity-1.webp";
import ilogo from "../../assets/iLogo.png";
import improvement from "../../assets/improvement.jpg";
import achivement from "../../assets/achivement.webp";
import matrix from "../../assets/matrix.webp";

export default function Mining() {
  return (
    <>
      {" "}
      <div
        className="container text-center"
        style={{
          background: `url(${bgImg})`,
          minWidth: "100%",
          minHeight: "550px",
          // opacity: "0.80"
        }}
      >
        <h1 className="text-white" style={{ paddingTop: "15rem" }}>
          <strong>Intelligent Engineering for Mining</strong>
        </h1>
        <h4 className="text-white">
          Building a Sustainable and Energy-Efficient Digital Solutions for
          Mining Industry
        </h4>
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
              Pioneering the Future of Mining
            </h5>
            <p className="mb-5 text-center">
              Driving Innovation and Sustainability with Technology Enabled
              Solutions
              <br />
              The mining sector is experiencing robust growth, driven by
              technological advancements and the global shift from fossil fuels
              to renewable energy sources. From exploration... Read More
            </p>
            {/* <hr className="w-50 mx-auto mb-2 mb-xl-9 border-dark-subtle" /> */}
          </div>
        </div>

        <section className=" text-left" style={{ minHeight: "550px" }}>
          <div className="row ">
            <div
              className="card bg-danger static m-4 col mx-4"
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
                <h4 className="card-titl" style={{ height: "4.5rem" }}>
                  <strong>
                    Integrated Engineering and Operational Support
                  </strong>
                  .
                </h4>
                <hr />
                <p className="card-text">
                  Cyient engages with top-tier mining companies and OEMs to
                  deliver comprehensive services that span the entire mining
                  process. From engineering design and procurement to plant
                  sustenance and asset management, our solutions are tailored to
                  enhance operational efficiency and extend the lifespan of
                  mining assets.
                </p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
            <div
              className="card bg-danger static m-4 col mx-4 "
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
                <h4 className="card-titl" style={{ height: "4.5rem" }}>
                  <strong>Data-Driven Mining Excellence</strong>
                </h4>
                <hr />
                <p className="card-text">
                  Cyient brings strong capabilities in traditional engineering
                  with advanced digital technologies. From Exploration Data
                  Management to integrating Spatial Intelligence, Cyient offers
                  a breadth of services, empowering mining operations with
                  actionable insights and improved network communications.
                </p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
            <div
              className="card bg-danger static m-4 col mx-4"
              style={{ width: "18rem;" }}
            >
              <img
                src={achivement}
                height={200}
                width={350}
                className="card-img-to mx-auto my-4"
                alt="..."
              />

              <div className="card-body text-left">
                <h4 className="card-titl" style={{ height: "4.5rem" }}>
                  <strong>
                    Consultative Partnership for Strategic Advancements
                  </strong>
                  .
                </h4>
                <hr />
                <p className="card-text text-wrap">
                  At Cyient, our consulting practice possesses in-depth
                  expertise across the mining value chain. We work closely with
                  our partners to identify and implement the most impactful
                  technological solutions and operating models, directly
                  aligning with your strategic priorities and optimizing overall
                  performance.
                </p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
        </section>
        <h4 className="mt-5">Intelligent Engineering for Mining</h4>
        <h6 className="mb-5">
          Our end-to-end capabilities for mining are designed to empower
          enterprises to navigate current and future challenges effectively. We
          are committed to delivering safer practices, smarter operations, and
          sustainable enterprise strategies to our mining customers.
        </h6>
      </div>
    </>
  );
}
