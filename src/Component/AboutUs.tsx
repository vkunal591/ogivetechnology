import mily from "../assets/mily.bacb347d.jpg";
import aboutus from "../assets/about-us.28e710cf.png";
import ilogo from "../assets/iLogo.png";

import Testomonial from "../Pages/AdminPanel/Admin_Component/Testomonial";
import Slider from "react-slick";

export default function AboutUs() {
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
    <section className="py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
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
            <p className="text-secondary mb-5 text-center lead fs-4">
              We believe in the power of teamwork and collaboration. Our diverse
              experts work tirelessly to deliver innovative solutions tailored
              to our clients' needs.
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
                  <p className="lead fs-6 mb-4 mb-md-5">
                    We believe that “Every problem has a solution”. A solution
                    that builds growth and business for our customers, helps our
                    employees grow and helps in creating excellent products that
                    simplifies day to day tasks.
                  </p>
                  <h6>
                    <strong>Who We Are</strong>
                  </h6>
                  <p className="lead fs-6 mb-4 mb-md-5">
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
                  <p className="lead fs-6 mb-4 mb-md-5">
                    We design and develop Intelligent systems and processes,
                    upgrade existing systems and processes to be intelligent.
                    Owning capability to simulate the systems and processes for
                    the ease of operation for users aids value to the offerings.
                    Working on legacy systems and data is our expertise.
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
              className="img-fluid rounded  w-100"
              loading="lazy"
              src={mily}
              alt="About Us"
            />
          </div>
          <div className="col-12 col-lg-6 col-xxl-6">
            <div className="row justify-content-lg-end text-left">
              <div className="col-12 col-lg-11">
                <div className="about-wrapper">
                  <h4><strong>
                    Mily Saxena
                    </strong>
                    </h4>
                  <h6>
                    CMD Ogive Technology, AuSiRo Labs, Pancha Hara & Jijivisha
                  </h6>
                  <p className="lead mb-4 mb-md-5">
                    As a socially responsible entity, we are deeply committed to
                    positively impacting the communities we serve and the world
                    at large. Through various initiatives and partnerships, we
                    actively contribute to environmental sustainability, social
                    welfare, and educational advancement.
                  </p>
                  <div className="row gy-4 mb-4 mb-md-5">
                    <Slider {...settings}>
                      <div className="col-12 col-md-12">
                        <div className="card border border-dark">
                          <div className="card-body p-4">
                            <h3 className="display-5 fw-bold text-primary text-center mb-2">
                              370+
                            </h3>
                            <p className="fw-bold text-center m-0">
                              Qualified Experts
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-12">
                        <div className="card border border-dark">
                          <div className="card-body p-4">
                            <h3 className="display-5 fw-bold text-primary text-center mb-2">
                              18k+
                            </h3>
                            <p className="fw-bold text-center m-0">
                              Satisfied Clients
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

      <Testomonial />
    </section>
  );
}
