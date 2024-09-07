import { Link } from "react-router-dom";
import vHome from "../assets/video/ogiveintro.b4f4a757.mp4";

export default function Home() {
  return (
    <div
      className="row flex-nowrap color-effect w-100 "
      style={{ minHeight: "550px" }}
    >
      {/* <div
        className="h-100 cs-w-50 px-0 "
        style={{
          width: "0",
          height: "0",
          borderTop: "100px solid white",
          borderRight: "100px solid transparent",
          borderBottom: "100px solid white",
          borderLeft: "100px solid transparent"
        }}
      ></div>
      <video
        className="h-100 cs-w-70 px-0 d-none"
        style={{
          // width: "0",
          // height: "0",
          // borderTop: "100px solid white",
          // borderRight: "100px solid transparent"
          borderBottomRightRadius: "500px"
        }}
        muted
        autoPlay={true}
        loop
      >
        <source src={vHome} type="video/mp4" />
        <source src={vHome} type="video/ogg" />
      </video>
      <div
        className="cs-w-30 h-auto px-0 d-flex "
        style={
          {
            
            // width: "0",
            // height: "0",
            // borderBottom: "100px solid white",
            // borderLeft: "100px solid transparent",
            // borderTop: "100px solid white",
            // borderRight: "100px solid transparent"
          }
        }
      >
        <div
          className="card w-100 text-white bg-transparent text-left my-auto border-0 text-dark my-5"
          style={{ maxHeight: "180px" }}
        >
          <div className="card-body">
            <h3 className="card-title fs-3 cs-title ">
              Ideas Coupled with Action
            </h3>
            <p className="card-text cs-desc">
              We Design, Develop Intelligent Systems and Simulate them too.
            </p>
          </div>
          <div className="btn btn-outline-danger cs-desc text-left ml-1 border-0  bg-transparent">
            Reach Us...
          </div>
        </div>

      </div> */}

      <section className="hero">
        <div className="intro-text text-left">
          <h1>
            <span className="hear border-bottom-3 border-danger" style={{borderBottom:"5px solid red"}}>
              {" "}
              Ideas Coupled with Action{" "}
            </span>{" "}
            <br />
            <span className="connecting ">
              {" "}
              We Design,
              <br />
              Develop Intelligent Systems and Simulate them too.{" "}
            </span>
          </h1>
          <Link
            className="btn text-black"
            to="about"
            style={{ color: "black" }}
          >
            Read More...
          </Link>
          {/* <a className="btn blue" href="#">Subscribe</a> */}
        </div>
        <div className="i-frame">
          <video
            className="intro-video"
            width="560"
            height="315"
            src={vHome}
            title="Ogive Technology"
            loop
            autoPlay
          ></video>
          <div className="stand-1"></div>
          <div className="stand-2"></div>
          <div className="stand-3"></div>
        </div>
      </section>
    </div>
  );
}
