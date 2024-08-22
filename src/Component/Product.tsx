import iAi from "../assets/images/microchip.png";
import iCyberSecurity from "../assets/images/cyber-security.png";
import iComputer from "../assets/images/computer.png";
import iDigitalMarketing from "../assets/images/transformation.png";
import iBlockChain from "../assets/images/blockchain.png";
import iInternet from "../assets/images/internet-access.png";
import iQuantum from "../assets/images/quantum-computing.png";
import ilogo from "../assets/iLogo.png";
import iRobotics from "../assets/images/Robotics.png";

export default function Product() {
  return (
    <div className="row cs-mt-8">
      <h5 className="card-header bg-transparent border-0 mb-3">
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
          <div className="container">
            <div className="row row-cols-4">
              <a
                className="nav-link text-secondary"
                href="/projects/software/samsung-software"
              >
                <div className="col border product-grid-image-box border-3 rounded-3">
                  <div>
                    <img
                      className="product-grid-image"
                      src={iAi}
                      alt="Artificial Intelligence "
                      title="Artificial Intelligence"
                    />
                  </div>
                  <div className="card-body py-0">
                    <h5 className="card-title">Rakshak</h5>
                    <p className="card-text">
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
                <div className="col border product-grid-image-box border-3 rounded-3">
                  <div>
                    <img
                      className="product-grid-image"
                      src={iBlockChain}
                      alt="Blockchain"
                      title="Blockchain"
                    />
                  </div>
                  <div className="card-body py-0">
                    <h5 className="card-title">Rakshak</h5>
                    <p className="card-text">
                      AI enabled Predictive Maintenance suite for Equipment
                      health monitoring.Aided with BOTs for user convenience,
                      existing ERP/SAP customisation and upgradation.{" "}
                    </p>
                  </div>
                </div>
              </a>
              <a
                className="nav-link text-secondary"
                href="/projects/software/funko-webgl"
              >
                <div className="col border product-grid-image-box border-3 rounded-3">
                  <div>
                    <img
                      className="product-grid-image"
                      src={iComputer}
                      alt="Embedded Systems"
                      title="Embedded Systems"
                    />
                  </div>
                  <div className="card-body py-0">
                    <h5 className="card-title">Rakshak</h5>
                    <p className="card-text">
                      AI enabled Predictive Maintenance suite for Equipment
                      health monitoring.Aided with BOTs for user convenience,
                      existing ERP/SAP customisation and upgradation.{" "}
                    </p>
                  </div>
                </div>
              </a>
              <a
                className="nav-link text-secondary"
                href="/projects/software/lyle-and-scott-software"
              >
                <div className="col border product-grid-image-box border-3 rounded-3">
                  <div>
                    <img
                      className="product-grid-image"
                      src={iCyberSecurity}
                      alt="Cybersecurity"
                      title="Cybersecurity"
                    />
                  </div>
                  <div className="card-body py-0">
                    <h5 className="card-title">Rakshak</h5>
                    <p className="card-text">
                      AI enabled Predictive Maintenance suite for Equipment
                      health monitoring.Aided with BOTs for user convenience,
                      existing ERP/SAP customisation and upgradation.{" "}
                    </p>
                  </div>
                </div>
              </a>
              <a
                className="nav-link text-secondary"
                href="/projects/software/reverie-software"
              >
                <div className="col border product-grid-image-box border-3 rounded-3">
                  <div>
                    <img
                      className="product-grid-image"
                      src={iInternet}
                      alt="Internet Of Things"
                      title="Internet Of Things"
                    />
                  </div>
                  <div className="card-body py-0">
                    <h5 className="card-title">Rakshak</h5>
                    <p className="card-text">
                      AI enabled Predictive Maintenance suite for Equipment
                      health monitoring.Aided with BOTs for user convenience,
                      existing ERP/SAP customisation and upgradation.{" "}
                    </p>
                  </div>
                </div>
              </a>
              <a
                className="nav-link text-secondary"
                href="/projects/software/disney-webgl"
              >
                <div className="col border product-grid-image-box border-3 rounded-3">
                  <div>
                    <img
                      className="product-grid-image"
                      src={iDigitalMarketing}
                      alt="Digital Twinning"
                      title="Digital Twinning"
                    />
                  </div>
                  <div className="card-body py-0">
                    <h5 className="card-title">Rakshak</h5>
                    <p className="card-text">
                      AI enabled Predictive Maintenance suite for Equipment
                      health monitoring.Aided with BOTs for user convenience,
                      existing ERP/SAP customisation and upgradation.{" "}
                    </p>
                  </div>
                </div>
              </a>
              <a
                className="nav-link text-secondary"
                href="/projects/software/vero-software"
              >
                <div className="col border product-grid-image-box border-3 rounded-3">
                  <div>
                    <img
                      className="product-grid-image"
                      src={iRobotics}
                      alt=" Robotics"
                      title="Robotics"
                    />
                  </div>
                  <div className="card-body py-0">
                    <h5 className="card-title">Rakshak</h5>
                    <p className="card-text">
                      AI enabled Predictive Maintenance suite for Equipment
                      health monitoring.Aided with BOTs for user convenience,
                      existing ERP/SAP customisation and upgradation.{" "}
                    </p>
                  </div>
                </div>
              </a>
              <a
                className="nav-link text-secondary"
                href="/projects/software/boohooman-software"
              >
                <div className="col border product-grid-image-box border-3 rounded-3">
                  <div>
                    <img
                      className="product-grid-image"
                      src={iQuantum}
                      alt="Quantum Computing"
                      title="Quantum Computing"
                    />
                  </div>
                  <div className="card-body py-0">
                    <h5 className="card-title">Rakshak</h5>
                    <p className="card-text">
                      AI enabled Predictive Maintenance suite for Equipment
                      health monitoring.Aided with BOTs for user convenience,
                      existing ERP/SAP customisation and upgradation.{" "}
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
