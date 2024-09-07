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

export default function Testomonial() {
  const [membersData, setMembersData] = useState<IBlogResponse[]>();
  const settings = {
    arrows: true,
    autoplay: true,
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
    const categoryId = "66dc065e65cf3e3890e3619f";
    getBlog("", "", "", "", categoryId);
  }, []);
  return (
    <div className="container px-5 cs-mt-5">
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
        Our Teams
      </h5>
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
                    className="d-flex align-items-center font-weihgt-bold"
                    style={{ paddingLeft: "115px" }}
                  >
                    <img
                      src={logo}
                      width={85}
                      alt="Ogive"
                      style={{ margin: "0px 4px" }}
                    />
                    <sub>Technology</sub>
                  </h2>
                  <blockquote>
                    <h1>{member?.title}</h1>
                    <h4>{member?.shortDesc}</h4>
                  </blockquote>
                </figcaption>
              </figure>
            );
          })}
      </Slider>
    </div>
  );
}
