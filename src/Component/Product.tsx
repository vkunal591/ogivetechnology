const PRODUCT_ID = import.meta.env.VITE_API_PRODUCT_ID;
import "./Css/product.css";
import { AxiosError, AxiosResponse } from "axios";
// import iSangrah from "../assets/sangrah.a9945f49.png";
// import iTruck from "../assets/trucl.png";
// import iPehchan from "../assets/pehchan.png";
// import iGarud from "../assets/eagle.20e49177.png";
// import iSugam from "../assets/computer.png";
// import iEklavya from "../assets/fire.57d8fcb6.png";
import ilogo from "../assets/iLogo.png";
// import iSwayam from "../assets/robot.02e39f5f.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { IErrorMessageResponse } from "../interfaces/i-authentication";
import { IBlogResponse } from "../interfaces/i-blog";
import BlogService from "../Services/BlogService";
import { errorMessage } from "../utils/fetchResponseMessage";
import { showToast } from "../utils/toast";
import Loader from "../modals/Loader";
import { ILandingPagePayload } from "../interfaces/i-landingpage";

export default function Product(porps:{productSectionData:ILandingPagePayload | undefined}) {
  const [productData, setProductData] = useState<IBlogResponse[]>();
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
          setProductData(res.data.details.posts);
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
    const categoryId = PRODUCT_ID;
    getBlog("", "", "", "", categoryId);
  }, []);

  return (
    <><Loader /><div className="row cs-mt-4 head mobile-head">
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
                  style={{ rotate: "0deg" }} />
              </span>
              Products
            </h5>
            <p className="mb-5 text-center">
             {porps?.productSectionData?.productDesc}

            </p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </div>
        </div>
      </div>
      <div className="col">
        <div id="softwareContent" className="section-content">
          <div className="container  mobile-product-container">
            <div className="row items">
              {productData &&
                productData?.map((product, index) => {
                  return (
                    <Link
                      className="nav-link text-secondary"
                      to={`/product${`?${product?._id}`}`}
                    >
                      <div
                        className="col border item item1 product-grid-image-box border-3 rounded-3"
                        style={{ backgroundImage: `url(${product?.file})` }}
                      >
                        <div>
                          <img
                            className="product-grid-image"
                            src={product?.icon}
                            alt="Artificial Intelligence "
                            title="Artificial Intelligence" />
                        </div>
                        <div className="card-body py-0 px-2">
                          <h5 className="card-title">{product?.title}</h5>
                          <p
                            className="card-text text-justify"
                            id={`proDesc${index}`}
                          >
                            {product?.shortDesc}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              {/* <Link className="nav-link text-secondary" to={`/product${"?2"}`}>
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
    </Link>
    <Link className="nav-link text-secondary" to={`/product${"?3"}`}>
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
    </Link>
    <Link className="nav-link text-secondary" to={`/product${"?4"}`}>
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
    </Link>
    <Link className="nav-link text-secondary" to={`/product${"?5"}`}>
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
    </Link>
    <Link className="nav-link text-secondary" to={`/product${"?6"}`}>
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
    </Link>
    <Link className="nav-link text-secondary" to={`/product${"?7"}`}>
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
    </Link>
    <Link className="nav-link text-secondary" to={`/product${"?8"}`}>
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
    </Link> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-7">
      <video className="w-100" src={animaOne} muted loop autoPlay={true}></video>
    </div> */}
    </div></>
  );
}
