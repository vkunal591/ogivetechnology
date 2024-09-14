import bgImg from "../../assets/shutterstock_2198513207.webp";
import ilogo from "../../assets/iLogo.png";
import improvement from "../../assets/improvement.jpg";
import achivement from "../../assets/achivement.webp";
import matrix from "../../assets/matrix.webp";

export default function Automotive() {
  return (
    <>
      {" "}
      <div
        className="container text-center"
        style={{
          background: `url(${bgImg})`,
          backgroundSize:"100% 100%",
          minWidth: "100%",
          minHeight: "550px",
        //   opacity: "0.80"
        }}
      >
        <h1 className="text-white" style={{ paddingTop: "15rem" }}>
          <strong>
            Intelligent Engineering for a Connected, Autonomous and Sustainable
            Mobility.
          </strong>
        </h1>
        <h4 className="text-white">
          Connected Mobility, Connecting LivesFueling the Sustainable
          Software-Defined Vehicles of Tomorrow.
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
              Intelligent Engineering for a Connected, Autonomous and
              Sustainable Mobility.
            </h5>
            <p className="mb-5 text-center">
              Cyient combines decades of expertise in automotive and mobility
              solutions with cutting edge innovations for the next decade to
              enable automotive manufacturers and OEMs to keep pace with a
              rapidly evolving market. The last few years have witnessed a
              dynamic shift in the automotive industry, with mobility taking new
              forms shaped by software-defined vehicles (SDVs), electric
              vehicles (EVs), autonomous driving, and connected cars. Priorities
              have shifted to electrification, connected cockpit experiences and
              improvements in safety measures such as ADAS. Cyient is at the
              forefront of driving this transformation for automotive OEMs and
              manufacturers. Our razor focus on innovation and adaptability is
              reshaping the future of automobiles into intelligent,
              software-defined vehicles primed for a sustainable, connected
              future. Our deep expertise in perception systems for Advanced
              Driver Assistance Systems (ADAS) guarantees real-time monitoring
              and precise control. By harnessing the power of 5G, cloud
              monitoring, and advanced analytics, we help manufacturers
              consistently stay ahead of the curve. Cyient combines intelligent
              engineering with technologies like AI and 5G to create
              sustainable, intuitive solutions that redefine industry standards
              and shape a smarter automotive future.
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
                  <strong>Enhancing Safety and Cybersecurity</strong>.
                </h4>
                <hr />
                <p className="card-text">
                  Enhancing automotive safety and cybersecurity, Cyient ensures
                  robust protection and reliability. Specializing in functional
                  safety and cybersecurity frameworks, we optimize ADAS
                  capabilities with real-time threat monitoring and precise
                  control, safeguarding vehicles and ensuring resilient
                  performance in today's interconnected world.
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
                  <strong>Accelerating Time to Market</strong>
                </h4>
                <hr />
                <p className="card-text">
                  Accelerating time-to-market for OEMs, Cyient leverages
                  cutting-edge technologies such as GEN AI, PLM, and the AUTOSAR
                  reusable framework. These innovations streamline vehicle
                  development processes, enabling faster vehicle launches and
                  ensuring competitive edge in the market.
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
                    Redefining Customer Experience Through Apps Customization
                    and More
                  </strong>
                  .
                </h4>
                <hr />
                <p className="card-text text-wrap">
                  Transforming vehicle infotainment, Cyient enhances customer
                  experiences with unparalleled customization and feature
                  integration. Our expertise in developing advanced apps and
                  tailoring functionalities enriches vehicle-to-vehicle,
                  vehicle-to-human interaction, and V2X connectivity, redefining
                  automotive connectivity and user engagement.
                </p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
        </section>
        <h4 className="mt-5">Engineering Tomorrow Together for a Smarter, Sustainable Future</h4>
        <h6 className="mb-5">
          Cyient brings decades of expertise in Intelligent Engineering, driving
          innovations for a digital, autonomous, and sustainable future. Our
          tailored solutions for next-gen vehicles and Electric Vehicle
          engineering, alongside Industry 4.0 Solutions foster agile operations,
          contributing to a smarter, cleaner transportation landscape.
        </h6>
      </div>
    </>
  );
}
