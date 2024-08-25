import "./Css/product.css";
import iRakshak from "../assets/wrench.7c7d90b6.png";
import iSangrah from "../assets/sangrah.a9945f49.png";
import iTruck from "../assets/trucl.png";
import iPehchan from "../assets/pehchan.png";
import iGarud from "../assets/eagle.20e49177.png";
import iSugam from "../assets/computer.png";
import iEklavya from "../assets/fire.57d8fcb6.png";
import ilogo from "../assets/iLogo.png";
import iSwayam from "../assets/robot.02e39f5f.png";

export default function Product() {
  return (
    <div className="row cs-mt-6 head mobile-head">
      <h5 className="card-header cs-title-style  bg-transparent border-0 mb-5 mt-3">
        <span>
          <img
            className="mx-1"
            src={ilogo}
            alt=""
            width={8}
            style={{ rotate: "0deg" }}
          />
        </span>
        PRODUCTS
      </h5>
      <div className="col">
        <div id="softwareContent" className="section-content">
          <div className="container  mobile-product-container">
            <div className="row items">
              <a
                className="nav-link text-secondary"
                href="/projects/software/samsung-software"
              >
                <div className="col border item item1 product-grid-image-box border-3 rounded-3">
                  <div>
                    <img
                      className="product-grid-image"
                      src={iRakshak}
                      alt="Artificial Intelligence "
                      title="Artificial Intelligence"
                    />
                  </div>
                  <div className="card-body py-0">
                    <h5 className="card-title">Rakshak</h5>
                    <p className="card-text text-justify">
                      AI enabled Predictive Maintenance suite for Equipment
                      health monitoring.Aided with BOTs for user convenience,
                      existing ERP/SAP customisation and upgradation.{" "}
                    </p>
                  </div>
                </div>
              </a>
              <a
                className="nav-link text-secondary"
                href="/projects/software/o2-cgi"
              >
                <div className="col item item2 border product-grid-image-box border-3 rounded-3">
                  <div>
                    <img
                      className="product-grid-image"
                      src={iSangrah}
                      alt="Blockchain"
                      title="Blockchain"
                    />
                  </div>
                  <div className="card-body py-0">
                    <h5 className="card-title">Sangrah</h5>
                    <p className="card-text text-justify">
                      Inventory & warehouse automation solution. Can be
                      configured to work with Rakshak enabling a fully automated
                      end-to-end process automation from maintenance to
                      procurement.{" "}
                    </p>
                  </div>
                </div>
              </a>
              <a
                className="nav-link text-secondary"
                href="/projects/software/funko-webgl"
              >
                <div className="col item item3 border product-grid-image-box border-3 rounded-3">
                  <div>
                    <img
                      className="product-grid-image"
                      src={iTruck}
                      alt="Embedded Systems"
                      title="Embedded Systems"
                    />
                  </div>
                  <div className="card-body py-0">
                    <h5 className="card-title">Chalak</h5>
                    <p className="card-text text-justify">
                      Fleet health monitoring & tracking solution. This product
                      is aided with driver behavior monitoring and fuel
                      consumption features.{" "}
                    </p>
                  </div>
                </div>
              </a>
              <a
                className="nav-link text-secondary"
                href="/projects/software/lyle-and-scott-software"
              >
                <div className="col  item item4 border product-grid-image-box border-3 rounded-3">
                  <div>
                    <img
                      className="product-grid-image"
                      src={iPehchan}
                      alt="Cybersecurity"
                      title="Cybersecurity"
                    />
                  </div>
                  <div className="card-body py-0">
                    <h5 className="card-title">Pehchan</h5>
                    <p className="card-text text-justify">
                      AI based security & surveillance system meant for
                      attendance monitoring, visitor management, intruder
                      detection.{" "}
                    </p>
                  </div>
                </div>
              </a>
              <a
                className="nav-link text-secondary"
                href="/projects/software/reverie-software"
              >
                <div className="col item item5 border product-grid-image-box border-3 rounded-3">
                  <div>
                    <img
                      className="product-grid-image"
                      src={iGarud}
                      alt="Internet Of Things"
                      title="Internet Of Things"
                    />
                  </div>
                  <div className="card-body py-0">
                    <h5 className="card-title">Garud</h5>
                    <p className="card-text text-justify">
                      UAV ( Service / Product ) Customised solution for
                      deploying aerial or under water platform with desired
                      payload and operational specification.SWARM concept is
                      also offered.{" "}
                    </p>
                  </div>
                </div>
              </a>
              <a
                className="nav-link text-secondary"
                href="/projects/software/disney-webgl"
              >
                <div className="col item item6 border product-grid-image-box border-3 rounded-3">
                  <div>
                    <img
                      className="product-grid-image"
                      src={iSugam}
                      alt="Digital Twinning"
                      title="Digital Twinning"
                    />
                  </div>
                  <div className="card-body py-0">
                    <h5 className="card-title">Sugam</h5>
                    <p className="card-text text-justify">
                      Blockchain integrated with AI solution for land records,
                      education & health care automation solution.{" "}
                    </p>
                  </div>
                </div>
              </a>
              <a
                className="nav-link text-secondary"
                href="/projects/software/vero-software"
              >
                <div className="col item item7 border product-grid-image-box border-3 rounded-3">
                  <div>
                    <img
                      className="product-grid-image"
                      src={iEklavya}
                      alt=" Robotics"
                      title="Robotics"
                    />
                  </div>
                  <div className="card-body py-0">
                    <h5 className="card-title">Eklavya</h5>
                    <p className="card-text text-justify">
                      Simulators for various systems we are certified production
                      agency for a specified class of simulators for homeland
                      and defense application{" "}
                    </p>
                  </div>
                </div>
              </a>
              <a
                className="nav-link text-secondary"
                href="/projects/software/boohooman-software"
              >
                <div className="col item item8 border product-grid-image-box border-3 rounded-3">
                  <div>
                    <img
                      className="product-grid-image"
                      src={iSwayam}
                      alt="Quantum Computing"
                      title="Quantum Computing"
                    />
                  </div>
                  <div className="card-body py-0">
                    <h5 className="card-title">Swayam</h5>
                    <p className="card-text text-justify">
                      Robotic solutions for defense and warehouse operations
                      automation{" "}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-7">
        <video className="w-100" src={animaOne} muted loop autoPlay={true}></video>
      </div> */}
    </div>
  );
}
