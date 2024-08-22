import vHome from "../assets/video/ogiveintro.b4f4a757.mp4";

export default function Home() {
  return (
    <div className="row ">
      <video
        className="cs-w-70 cs-mt-8 pl-0"
        src={vHome}
        muted
        autoPlay={true}
        loop
      ></video>
      <div className="col w-100 cs-mt-8 home-content-text-box d-flex ">
        <div
          className="card  bg-transparent text-left cs-mt-8 border-0 text-dark bg-light mb-3"
          style={{ maxWidth: "32rem", height: "100px" }}
        >
          <div className="card-body">
            <h5 className="card-title cs-title">Ideas Coupled with Action</h5>
            <p className="card-text">
              We Design, Develop Intelligent Systems and Simulate them too.
            </p>
          </div>
          <div className="card-header border-0 fs-4 bg-transparent">
            get Ready...
          </div>
        </div>
      </div>
    </div>
  );
}
