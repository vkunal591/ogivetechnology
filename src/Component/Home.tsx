import vHome from "../assets/video/ogiveintro.b4f4a757.mp4";

export default function Home() {
  return (
    <div className="row flex-nowrap h-75 bg-black w-100 cs-mt-4">
      <video
        className="h-100 cs-w-70 px-0 "
        style={{ borderEndEndRadius: "500px" }}
        muted
        autoPlay={true}
        loop
      >
        <source src={vHome} type="video/mp4" />
        <source src={vHome} type="video/ogg" />
      </video>
      <div className="cs-w-30 h-auto px-0 d-flex ">
        <div
          className="card w-100 text-white bg-transparent text-left my-auto border-0 text-dark bg-light my-5"
          style={{ maxHeight: "180px" }}
        >
          <div className="card-body">
            <h3 className="card-title cs-title ">Ideas Coupled with Action</h3>
            <p className="card-text cs-desc">
              We Design, Develop Intelligent Systems and Simulate them too.
            </p>
          </div>
          <div className="btn btn-outline-danger cs-desc text-left ml-1 border-0  bg-transparent">
            Reach Us...
          </div>
        </div>
      </div>
    </div>
  );
}
