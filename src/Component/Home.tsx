import { Link } from "react-router-dom";
import vHome from "../assets/video/ogiveintro.b4f4a757.mp4";
import { ILandingPagePayload } from "../interfaces/i-landingpage";

export default function Home(porps:{homeSectionData:ILandingPagePayload | undefined}) {

  
  return (
    <div className="playe">
      <video src={porps?.homeSectionData?porps?.homeSectionData.homeVideo:vHome} className="player" loop muted autoPlay />
      <section className="inner-content" >
        <div className="intro-text text-left">
          <h1>
            <span
              className="hear border-bottom-3border-danger"
              style={{ borderBottom: "5px solid red" }}
            >
              {" "}
              {porps?.homeSectionData?porps?.homeSectionData?.homeTitle:"Ideas Coupled with Action"}{" "}
            </span>{" "}
            <br />
            <span className="connecting">
              {porps?.homeSectionData?porps?.homeSectionData?.homeDesc:
              "We Design," +
              <br /> +
              "Develop Intelligent Systems and Simulate them too."}
            </span>
          </h1>
          <Link
            className="btn"
            to="about"
            style={{ color: "red" }}
          >
            Read More...
          </Link>
          {/* <a className="btn blue" href="#">Subscribe</a> */}
        </div>
        {/* <div className="i-frame">
      <video
        className="intro-video"
        width="560"
        height="315"
        src={vHome}
        title="Ogive Technology"
        loop={true}
        muted={true}
        autoPlay={true}
      ></video>
      <div className="stand-1"></div>
      <div className="stand-2"></div>
      <div className="stand-3"></div>
    </div> */}
      </section>
    </div>
  );
}
// <video
//   className="row flex-nowrap color-effect mobile-home w-100 "
//   style={{ minHeight: "550px"}}
//   src={vHome}
// >
//   <section className="hero" >
//     <div className="intro-text text-left" >
//       <h1>
//         <span className="hear border-bottom-3 border-danger" style={{borderBottom:"5px solid red"}}>
//           {" "}
//           Ideas Coupled with Action{" "}
//         </span>{" "}
//         <br />
//         <span className="connecting">
//           {" "}
//           We Design,
//           <br />
//           Develop Intelligent Systems and Simulate them too.{" "}
//         </span>
//       </h1>
//       <Link
//         className="btn text-black"
//         to="about"
//         style={{ color: "black" }}
//       >
//         Read More...
//       </Link>
//       {/* <a className="btn blue" href="#">Subscribe</a> */}
//     </div>
//     {/* <div className="i-frame">
//       <video
//         className="intro-video"
//         width="560"
//         height="315"
//         src={vHome}
//         title="Ogive Technology"
//         loop={true}
//         muted={true}
//         autoPlay={true}
//       ></video>
//       <div className="stand-1"></div>
//       <div className="stand-2"></div>
//       <div className="stand-3"></div>
//     </div> */}
//   </section>
// </video>
