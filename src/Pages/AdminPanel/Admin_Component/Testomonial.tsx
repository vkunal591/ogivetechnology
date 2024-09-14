const MEMBERS_ID = import.meta.env.VITE_API_MEMBERS_ID;

import "./Css/testomonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AxiosError, AxiosResponse } from "axios";
import logo from "../../../assets/logo-footer.43e2938c.png";
import ilogo from "../../../assets/iLogo.png";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { IErrorMessageResponse } from "../../../interfaces/i-authentication";
import { IBlogResponse } from "../../../interfaces/i-blog";
import BlogService from "../../../Services/BlogService";
import { errorMessage } from "../../../utils/fetchResponseMessage";
import { showToast } from "../../../utils/toast";
import { ILandingPagePayload } from "../../../interfaces/i-landingpage";

export default function Testomonial(porps:{memberSectionData:ILandingPagePayload | undefined}) {
  const [membersData, setMembersData] = useState<IBlogResponse[]>();
  const settings = {
    arrows: false,
    // autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnDotsHover: true
  };

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
          setMembersData(res.data.details.posts);
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
    const categoryId = MEMBERS_ID;
    getBlog("", "", "", "", categoryId);
  }, []);
  return (
    <div className="container px-5 mobile-testomonial cs-mt-5 mb-5">
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
            style={{ rotate: "0deg"}}
          />
        </span>
        Our Expert Team
      </h5>
      <p className="mb-5 text-center">
       {porps?.memberSectionData?.expertTeamDesc}
      </p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
          </div>
        </div>
      </div>
      <section  className="m-5">
      <Slider {...settings}>
        {membersData &&
          membersData?.map((member) => {
            return (
              <figure className="snip1390">
                <span className="bg-box-style"></span>
                <span className="circle1"></span>
                <span className="circle2">
                  <img src={member?.file} className="profile" />
                </span>
                <span className="squar"></span>

                <figcaption>
                  {/* <h2>Eleanor Crisp</h2> */}
                  <h2
                    className="d-flex align-items-center mobile-testo-heading font-weihgt-bold"
                    style={{ paddingLeft: "115px" }}
                  >
                    <img
                      src={logo}
                      width={85}
                      alt="Ogive"
                      className="teso-img"
                      style={{ margin: "0px 4px",zIndex:"500" }}
                    />
                    <sub>Technology</sub>
                  </h2>
                  <blockquote>
                    <h1 className="testo-title">{member?.title}</h1>
                    <h4 className="testo-desc">{member?.shortDesc}</h4>
                  </blockquote>
                </figcaption>
              </figure>
            );
          })}
      </Slider>
      </section>
    </div>
  );
}
