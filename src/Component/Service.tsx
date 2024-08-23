import animaOne from "../assets/Spark2024_Software_V01_wSFX.mp4";
import iAi from "../assets/images/microchip.png";
import iCyberSecurity from "../assets/images/cyber-security.png";
import iComputer from "../assets/images/computer.png";
import iServer from "../assets/images/server.png";
import iDigitalMarketing from "../assets/images/transformation.png";
import iBlockChain from "../assets/images/blockchain.png";
import iInternet from "../assets/images/internet-access.png";
import iQuantum from "../assets/images/quantum-computing.png";
import iIR from "../assets/images/virtual-reality-glasses.png";
import iRobotics from "../assets/images/Robotics.png";
import ilogo from "../assets/iLogo.png";

export default function Service() {
  return (
    <div className="row cs-mt-3 head">
      <h5 className="card-header cs-title-style  bg-transparent border-0 mb-5">
        <span>
          <img
            className="m-0"
            src={ilogo}
            alt=""
            width={10}
            style={{ rotate: "0deg" }}
          />
        </span>
        SOFTWARE
      </h5>
      <div className="col-7">
        <video
          className="w-100"
          src={animaOne}
          muted
          loop
          autoPlay={true}
          style={{ filter: "brightness(1.04)" }}
        ></video>
      </div>
      <div className="col ">
        <div
          className="card bg-transparent m-auto text-left border-0 text-dark bg-light mb-3"
          style={{ maxWidth: "100%" }}
        >
          <div className="card-body py-0">
            <h5 className="card-title">
              We Are The leading UK software Developers
            </h5>
            <p className="card-text">
              If you are looking for a software development agency, Spark's team
              of expert developers based in our UK studio, offer the highest
              quality solutions for all platforms. Our software developers offer
              world renowned brands native app development solutions for iOS,
              Android and Windows mobile and tablet devices.
            </p>
          </div>
        </div>
        <div id="softwareContent" className="section-content">
          <div className="container">
            <div className="row justify-content-center row-cols-4">
              <a className="" href="/projects/software/samsung-software">
                <div className="col border grid-image-box border-3 rounded-3">
                  <img
                    className="grid-image"
                    src={iAi}
                    alt="Artificial Intelligence "
                    title="Artificial Intelligence"
                  />
                </div>
              </a>
              <a className="" href="/projects/software/o2-cgi">
                <div className="col border grid-image-box border-3 rounded-3">
                  <img
                    className="grid-image"
                    src={iBlockChain}
                    alt="Blockchain"
                    title="Blockchain"
                  />
                </div>
              </a>
              <a className="" href="/projects/software/funko-webgl">
                <div className="col border grid-image-box border-3 rounded-3">
                  <img
                    className="grid-image"
                    src={iComputer}
                    alt="Embedded Systems"
                    title="Embedded Systems"
                  />
                </div>
              </a>
              <a href="/projects/software/lyle-and-scott-software">
                <div className="col border grid-image-box border-3 rounded-3">
                  <img
                    className="grid-image"
                    src={iCyberSecurity}
                    alt="Cybersecurity"
                    title="Cybersecurity"
                  />
                </div>
              </a>
              <a className="" href="/projects/software/reverie-software">
                <div className="col border grid-image-box border-3 rounded-3">
                  <img
                    className="grid-image"
                    src={iInternet}
                    alt="Internet Of Things"
                    title="Internet Of Things"
                  />
                </div>
              </a>
              <a className="" href="/projects/software/disney-webgl">
                <div className="col border grid-image-box border-3 rounded-3">
                  <img
                    className="grid-image"
                    src={iDigitalMarketing}
                    alt="Digital Twinning"
                    title="Digital Twinning"
                  />
                </div>
              </a>
              <a className="" href="/projects/software/vero-software">
                <div className="col border grid-image-box border-3 rounded-3">
                  <img
                    className="grid-image"
                    src={iRobotics}
                    alt=" Robotics"
                    title="Robotics"
                  />
                </div>
              </a>
              <a className="" href="/projects/software/boohooman-software">
                <div className="col border grid-image-box border-3 rounded-3">
                  <img
                    className="grid-image"
                    src={iQuantum}
                    alt="Quantum Computing"
                    title="Quantum Computing"
                  />
                </div>
              </a>
              <a
                className=""
                href="/projects/software/highland-titles-software"
              >
                <div className="col border grid-image-box border-3 rounded-3">
                  <img
                    className="grid-image"
                    src={iServer}
                    alt="Cloud Computing"
                    title="Cloud Computing"
                  />
                </div>
              </a>
              <a className="" href="/projects/software/cw-systems-software">
                <div className="col border grid-image-box border-3 rounded-3">
                  <img
                    className="grid-image"
                    src={iIR}
                    alt="Immersive Reality"
                    title="Immersive Reality"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
