const CERTIFICATION_ID = import.meta.env.VITE_API_CERTIFICATION_ID;
const membershipId = import.meta.env.VITE_API_MEMBERSHIP_ID;
import mily from "../assets/mily.bacb347d.jpg";
import aboutus from "../assets/about-us.28e710cf.png";
import ilogo from "../assets/iLogo.png";
import { AxiosError, AxiosResponse } from "axios";
import styled, { keyframes, css } from "styled-components";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { IErrorMessageResponse } from "../interfaces/i-authentication";
import { IBlogResponse } from "../interfaces/i-blog";
import BlogService from "../Services/BlogService";
import { errorMessage } from "../utils/fetchResponseMessage";
import { showToast } from "../utils/toast";
import Loader from "../modals/Loader";

export default function AboutUs() {
  const settings = {
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnDotsHover: true
  };

  const [certificateData, setCertificateData] = useState<IBlogResponse[]>();
  const [membershipData, setMembershipData] = useState<IBlogResponse[]>();

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
          setCertificateData(res.data.details.posts);
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
  const getMembership = async (
    id: string,
    size: string,
    page: string,
    q: string,
    categoryId: string
  ) => {
    try {
      await BlogService.getLocalBlog(id, size, page, q, categoryId).then(
        (res: AxiosResponse) => {
          setMembershipData(res.data.details.posts);
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
    const categoryId = CERTIFICATION_ID;
    getBlog("", "", "", "", categoryId);
    const membershipCategoryId = membershipId;

    getMembership("", "", "", "", membershipCategoryId);
  }, []);
  return (
    <>
      <Loader />
      <section className="py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8">
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
                About Us
              </h5>
              <p className="mb-5 text-center">
                We believe in the power of teamwork and collaboration. Our
                diverse experts work tirelessly to deliver innovative solutions
                tailored to our clients' needs.
              </p>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row gy-4 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6">
              <img
                className="img-fluid rounded "
                loading="lazy"
                src={aboutus}
                alt="About Us"
              />
            </div>
            <div className="col-12 col-lg-6 col-xxl-6">
              <div className="row justify-content-lg-end">
                <div className="col-12 col-lg-11">
                  <div className="about-wrapper text-left">
                    <h6>
                      <strong>Mission Statement</strong>
                    </h6>
                    <p className="mb-5 text-left">
                      We believe that “Every problem has a solution”. A solution
                      that builds growth and business for our customers, helps
                      our employees grow and helps in creating excellent
                      products that simplifies day to day tasks.
                    </p>
                    <h6>
                      <strong>Who We Are</strong>
                    </h6>
                    <p className="mb-5">
                      Ogive Technology is a product engineering services company
                      helping clients in realising their ideas in Embedded
                      Systems, Internet of Things, BlockChain, Artificial
                      Intelligence, Digital Twining, and Immersive Technologies.
                      Individual technology stack or amalgamating various
                      technologies to deliver an integrated intelligent product.
                    </p>
                    <h6>
                      <strong>What We Do</strong>
                    </h6>
                    <p className="mb-5">
                      We design and develop Intelligent systems and processes,
                      upgrade existing systems and processes to be intelligent.
                      Owning capability to simulate the systems and processes
                      for the ease of operation for users aids value to the
                      offerings. Working on legacy systems and data is our
                      expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="w-75 mx-auto mb-5" />
        <div className="container">
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
            Leadership
          </h5>
          <div className="row gy-4 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6">
              <img
                className="img-fluid rounded  w-75 "
                loading="lazy"
                src={mily}
                alt="About Us"
              />
              <figcaption className="fs-6 text-center m-2 mx-auto ">
                <strong>
                  Entrepreneur | Researcher | Founder | Technologist | Start-up
                  mentor | Innovator | Revenue Growth Expert | Strategist
                </strong>
              </figcaption>
            </div>
            <div className="col-12 col-lg-6 col-xxl-6">
              <div className="row justify-content-lg-end text-left">
                <div className="col-12 col-lg-11">
                  <div className="about-wrapper">
                    <h4>
                      <strong>Mily Saxena</strong>
                    </h4>
                    <h6>
                      CMD Ogive Technology, AuSiRo Labs, Pancha Hara & Jijivisha
                    </h6>
                    <p className="mb-5 text-left">
                      As a socially responsible entity, we are deeply committed
                      to positively impacting the communities we serve and the
                      world at large. Through various initiatives and
                      partnerships, we actively contribute to environmental
                      sustainability, social welfare, and educational
                      advancement.
                    </p>
                    <div className="row gy-4 mb-4 mb-md-5">
                      <Slider {...settings}>
                        <div className="col-12 col-md-12">
                          <div className="card border border-dark">
                            <div className="card-body p-4">
                              {/* <h3 className="display-5 fw-bold text-primary text-center mb-2">
      370+
    </h3> */}
                              <p className="fw-bold text-center m-0">
                                Served across Public and Private sector, carry
                                functional expertise in multiple segments
                                .Excellence in understanding the cutting edge
                                technologies independently and amalgamating the
                                technologies to deliver the desired intelligent
                                output.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-12">
                          <div className="card border border-dark">
                            <div className="card-body p-4">
                              {/* <h3 className="display-5 fw-bold text-primary text-center mb-2">
      18k+
    </h3> */}
                              <p className="fw-bold text-center m-0">
                                Global leader with 18 years of experience.
                                Founded three companies Ogive Technology, AuSiRo
                                Labs, providing leading real-world Automation &
                                Simulation products with an additive of
                                Robotics, and Jijivisha is an eCommerce
                                platform.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-12">
                          <div className="card border border-dark">
                            <div className="card-body p-4">
                              {/* <h3 className="display-5 fw-bold text-primary text-center mb-2">
      18k+
    </h3> */}
                              <p className="fw-bold text-center m-0">
                                With Product As A Service being the delivery
                                guideline bridging the gap between executive and
                                technical stakeholders is proven. Serving as a
                                growth catalyst and infuse productive energy
                                into the workplace. Developed a framework for
                                developing fast-growing businesses.
                              </p>
                            </div>
                          </div>
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-75 mx-auto mb-5" />
        <div className="container">
          <h5 className="card-header fs-4 cs-title-style  bg-transparent border-0 mb-5 mt-3">
            <span></span>
            Certificates & Publications
          </h5>

          <div className="row gy-4 mb-4 mb-md-5">
            <Slider {...settings}>
              {certificateData &&
                certificateData.map((certificate) => {
                  return (
                    <div className="col-6 col-md-6 mx-auto">
                      <img
                        src={certificate?.file}
                        height={300}
                        className="mx-auto"
                        alt=""
                      />
                    </div>
                  );
                })}
            </Slider>
          </div>
        </div>

        <AppContainer>
          <Wrapper>
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col-12 col-md-10 col-lg-8">
                  <h6 className="card-header fs-4 cs-title-style  bg-transparent border-0 mb-2 mt-3">
                    <span></span>
                    Memberships
                  </h6>
                </div>
              </div>
            </div>
            <Marquee>
              <MarqueeGroup>
                {membershipData?.map((el) => (
                  <ImageGroup>
                    <Image src={el?.file} />
                  </ImageGroup>
                ))}
              </MarqueeGroup>
              <MarqueeGroup>
                {membershipData?.map((el) => (
                  <ImageGroup>
                    <Image src={el?.file} />
                  </ImageGroup>
                ))}
              </MarqueeGroup>
            </Marquee>
          </Wrapper>
        </AppContainer>
      </section>
    </>
  );
}

const AppContainer = styled.div`
  width: 100vw;
  height: 50vh;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
