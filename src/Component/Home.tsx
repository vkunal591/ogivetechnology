import vHome from "../assets/video/ogiveintro.b4f4a757.mp4";


export default function Home() {
  return (
    <div className="row cs-mt-8">
      <video
        className=" cs-w-70 pl-0"
        src={vHome}
        muted
        autoPlay={true}
        loop
      ></video>
      <div className="col-4 home-content-text-box d-flex ">
        <div
          className="card text-white bg-transparent text-left cs-mt-10 border-0 text-dark bg-light m-5"
          style={{ maxWidth: "25rem", maxHeight: "200px" }}
        >
          <div className="card-body">
            <h3 className="card-title cs-title ">Ideas Coupled with Action</h3>
            <p className="card-text fs-6">
              We Design, Develop Intelligent Systems and Simulate them too.
            </p>
          </div>
          <div className="btn btn-outline-danger  text-left ml-1 border-0 w-50 fs-4 bg-transparent">
            Reach Us
          </div>
        </div>
      </div>
    </div>
  );
}
