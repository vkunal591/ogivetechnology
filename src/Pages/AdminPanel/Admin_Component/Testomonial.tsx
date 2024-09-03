import "./Css/testomonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../../assets/testomonial-img.png";
import logo from "../../../assets/logo-footer.43e2938c.png";
import ilogo from "../../../assets/iLogo.png";
import Slider from "react-slick";

export default function Testomonial() {
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
      <figure className="snip1390">
          <span className="bg-box-style"></span>
          <span className="circle1"></span>
          <span className="circle2">
            <img src={img} className="profile" />
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
              <h1>Mily Saxena</h1>
              <h4>CMD Ogive Technology, AuSiRo Labs</h4>
              Global leader with 18 years of experience. Founded three companies Ogive Technology, AuSiRo Labs, providing leading real-world Automation & Simulation products with an additive of Robotics, and Jijivisha is an eCommerce platform. 
            </blockquote>
          </figcaption>
        </figure>{" "}
        <figure className="snip1390">
          <span className="bg-box-style"></span>
          <span className="circle1"></span>
          <span className="circle2">
            <img src={img} className="profile" />
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
              <h1>Mily Saxena</h1>
              <h4>CMD Ogive Technology, AuSiRo Labs</h4>
              Global leader with 18 years of experience. Founded three companies Ogive Technology, AuSiRo Labs, providing leading real-world Automation & Simulation products with an additive of Robotics, and Jijivisha is an eCommerce platform. 
            </blockquote>
          </figcaption>
        </figure>{" "}
      </Slider>
    </div>
  );
}
