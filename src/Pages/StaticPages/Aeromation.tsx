import bgImg from "../../assets/aerospace-banner.jpg";
import ilogo from "../../assets/iLogo.png";
import improvement from "../../assets/improvement.jpg";
import achivement from "../../assets/achivement.webp";
import matrix from "../../assets/matrix.webp";

export default function Aeromation() {
  return (
    <>
      {" "}
      <div
        className="container text-center"
        style={{
          background: `url(${bgImg})`,
          backgroundSize: "100% 100%",
          minWidth: "100%",
          minHeight: "550px"
          // opacity: "0.80"
        }}
      >
        <h1 className="text-white" style={{ paddingTop: "15rem" }}>
          <strong>
            Pioneering Intelligent Engineering in Aerospace & Defense
          </strong>
        </h1>
        {/* <h4 className="text-white">
          Building a Sustainable and Energy-Efficient Digital Solutions for
          Mining Industry
        </h4> */}
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
              Aerospace and defense
            </h5>
            <p className="mb-5 text-center">
              The aerospace and defense industry is rapidly evolving with
              advancements in digital, autonomous flights, integrated aircraft
              health management, and urban air mobility, emphasizing
              decarbonization, operational efficiency, and enhanced passenger
              experiences. Cyient takes pride in partnering with leading a&d
              companies of the world, to deliver value based intelligent
              engineering solutions. We undertake system-level design ownership
              of complex sub-systems, modules and components by enabling our
              customers to sustain a competitive advantage. Our global technical
              smes, investment into digital technologies, labs, coes,
              partnership and risk-sharing business models, make us a trusted
              partner
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
              />

              <div className="card-body">
                <h4 className="card-titl" style={{ height: "4.5rem" }}>
                  <strong>
                    Lower your Engineering Spend by Digitalizing the Engineering
                    processes.
                  </strong>
                </h4>
                <hr />
                <p className="card-text">
                  Cyient helps OEMs and Tier 1 suppliers slash NRE/RE costs and
                  develop leading A&D products. We digitalize and streamline
                  processes, reducing costs and boosting efficiency in the
                  aerospace & defense industry.
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
                  <strong>
                    Reduce your Time-to-Market through Hyperautomation
                  </strong>
                </h4>
                <hr />
                <p className="card-text">
                  We accelerate product-to-market speeds using advanced
                  hyperautomation tools. This strategy ensures rapid delivery
                  while maintaining the highest quality and performance
                  standards.
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
                    Transforming Customer Journey through Aftermarket
                    Servitization
                  </strong>
                </h4>
                <hr />
                <p className="card-text text-wrap">
                  As a leader in Intelligent Engineering, Cyient helps in
                  transforming customer journeys with cutting-edge solutions
                  tailored to aftermarket needs by reducing downtime and
                  improving customer satisfaction with streamlined operations.
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
