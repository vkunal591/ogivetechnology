const SERVICE_ID = import.meta.env.VITE_API_SERVICE_ID;

import "./Css/service.css";
import { AxiosError, AxiosResponse } from "axios";
import animaOne from "../assets/video/ogiveintro1.7e16f8fc.mp4";
// import iAi from "../assets/images/microchip.png";
// import iCyberSecurity from "../assets/images/cyber-security.png";
// import iComputer from "../assets/images/computer.png";
// import iServer from "../assets/images/server.png";
// import iDigitalMarketing from "../assets/images/transformation.png";
// import iBlockChain from "../assets/images/blockchain.png";
// import iInternet from "../assets/images/internet-access.png";
// import iQuantum from "../assets/images/quantum-computing.png";
// import iIR from "../assets/images/virtual-reality-glasses.png";
// import iRobotics from "../assets/images/Robotics.png";
import ilogo from "../assets/iLogo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { IErrorMessageResponse } from "../interfaces/i-authentication";
import { IBlogResponse } from "../interfaces/i-blog";
import BlogService from "../Services/BlogService";
import { errorMessage } from "../utils/fetchResponseMessage";
import { showToast } from "../utils/toast";
import Loader from "../modals/Loader";
import { ILandingPagePayload } from "../interfaces/i-landingpage";

export default function Service(porps:{serviceSectionData:ILandingPagePayload | undefined}) {
  const [serviceData, setServiceData] = useState<IBlogResponse[]>();
  const getBlog = async (
    id: string,
    size: string,
    page: string,
    q: string,
    categoryId: string
  ) => {
    try {
      await BlogService.getLocalBlog(id, size, page, q, categoryId).then(
        (res: AxiosResponse) => {
          setServiceData(res.data.details.posts);
          console.log(res.data.details.posts);
        }
      );
    } catch (error) {
      const message = errorMessage(error as AxiosError<IErrorMessageResponse>);
      showToast({
        message: message,
        type: "error"
      });
    }
  };
  useEffect(() => {
  

    // const location = window.location.href.split("/");
    // const id = location[3].split("?")[1];
    // // const category = location[3].split("?")[0];
    // console.log(location[3].split("?")[1]);
    const categoryId = SERVICE_ID;
    getBlog("", "", "", "", categoryId);
  }, []);

  return (
    <>
      <Loader />
      <div className="row head mobile-head ">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8">
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
                Our Services
              </h5>
              <p className="mb-5 text-center">
                {porps?.serviceSectionData?.serviceDesc}
              </p>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>
        <div className="col-6 ">
          <video
            className="w-100 border rounded"
            src={porps?.serviceSectionData?porps?.serviceSectionData.serviceVideo:animaOne}
            muted
            loop
            autoPlay={true}
            style={{ filter: "brightness(1.04)" }}
          ></video>
        </div>
        <div className="col-6">
          <div
            className="card bg-transparent m-auto text-left border-0 text-dark mb-3"
            style={{ maxWidth: "100%", boxShadow: "none" }}
          >
            <div className="card-body py-0">
              <h5 className="card-title">Our Service | Ogive</h5>
              <p className="card-text">
                {/* Our services make the everyday life of our customers easier by
                offering solutions in the fields of transportation, healthcare,
                finance , defense and manufacturing. Our customers get to focus
                on their core competence, our service experts take care of the
                rest.In order to build long-term customer relationships, */}
              </p>
            </div>
          </div>
          <div id="softwareContent" className="section-content mt-3">
            <div className="container">
              <div className="row justify-content-center service-box">
                {serviceData &&
                  serviceData?.map((service, index) => {
                    return (
                      <Link
                        className=""
                        key={index}
                        to={`/service${`?${service?._id}`}`}
                      >
                        <div className="col border grid-image-box border-3 rounded-3">
                          <img
                            className="grid-image"
                            src={service?.icon}
                            alt="Artificial Intelligence "
                            title="Artificial Intelligence"
                          />
                        </div>
                      </Link>
                    );
                  })}
                {/* <Link className="" to={`/service${"?1"}`}>
      <div className="col border grid-image-box border-3 rounded-3">
        <img
          className="grid-image"
          src={iAi}
          alt="Artificial Intelligence "
          title="Artificial Intelligence"
        />
      </div>
    </Link>
    <Link className="" to={`/service${"?2"}`}>
      <div className="col border grid-image-box border-3 rounded-3">
        <img
          className="grid-image"
          src={iBlockChain}
          alt="Blockchain"
          title="Blockchain"
        />
      </div>
    </Link>
    <Link className="" to={`/service${"?3"}`}>
      <div className="col border grid-image-box border-3 rounded-3">
        <img
          className="grid-image"
          src={iComputer}
          alt="Embedded Systems"
          title="Embedded Systems"
        />
      </div>
    </Link>
    <Link to="/projects/software/lyle-and-scott-software">
      <div className="col border grid-image-box border-3 rounded-3">
        <img
          className="grid-image"
          src={iCyberSecurity}
          alt="Cybersecurity"
          title="Cybersecurity"
        />
      </div>
    </Link>
    <Link className="" to={`/service${"?4"}`}>
      <div className="col border grid-image-box border-3 rounded-3">
        <img
          className="grid-image"
          src={iInternet}
          alt="Internet Of Things"
          title="Internet Of Things"
        />
      </div>
    </Link>
    <Link className="" to={`/service${"?5"}`}>
      <div className="col border grid-image-box border-3 rounded-3">
        <img
          className="grid-image"
          src={iDigitalMarketing}
          alt="Digital Twinning"
          title="Digital Twinning"
        />
      </div>
    </Link>
    <Link className="" to={`/service${"?6"}`}>
      <div className="col border grid-image-box border-3 rounded-3">
        <img
          className="grid-image"
          src={iRobotics}
          alt=" Robotics"
          title="Robotics"
        />
      </div>
    </Link>
    <Link className="" to={`/service${"?7"}`}>
      <div className="col border grid-image-box border-3 rounded-3">
        <img
          className="grid-image"
          src={iQuantum}
          alt="Quantum Computing"
          title="Quantum Computing"
        />
      </div>
    </Link>
    <Link className="" to={`/service${"?8"}`}>
      <div className="col border grid-image-box border-3 rounded-3">
        <img
          className="grid-image"
          src={iServer}
          alt="Cloud Computing"
          title="Cloud Computing"
        />
      </div>
    </Link>
    <Link className="" to={`/service${"?9"}`}>
      <div className="col border grid-image-box border-3 rounded-3">
        <img
          className="grid-image"
          src={iIR}
          alt="Immersive Reality"
          title="Immersive Reality"
        />
      </div>
    </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
