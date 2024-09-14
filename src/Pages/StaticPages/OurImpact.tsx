import bgImg from "../../assets/who-we-are.webp";

export default function OurImpact() {
  return (
    <>
      <div
        className="container text-center"
        style={{
          background: `url(${bgImg})`,
          minWidth: "100%",
          minHeight: "550px",
          // opacity: "0.80"
        }}
      >
        <h1 className="text-white" style={{paddingTop:"15rem"}}>
          <strong>Who We Are</strong>
        </h1>
      </div>
      <div className="container p-5 text-left" style={{ minHeight: "550px" }}>
        <p>
          Reshaping Work is a foundation headquartered in Amsterdam. It took off
          in 2016 to bring together companies, startups, trade unions,
          researchers, policy makers, and other relevant stakeholders to jointly
          discuss the future of work and find ways to shape it. Achieving
          socially-responsible practices on the economic, social, and
          environmental level is at the heart of what we do.
        </p>

        <h2 className="text-danger">
          <strong>We envision</strong>
        </h2>
        <p>
          a future of work in which digital innovations promote good quality,
          decent, and equitable work and where industry leaders work
          hand-in-hand with other actors to make this future a reality.
        </p>

        <h2 className="text-danger">
          <strong>We strive</strong>
        </h2>
        <p>
          to create a one-stop-shop where those interested in shaping the future
          of work can gain knowledge, forge new collaborations, and develop
          concrete, impactful solutions.
        </p>
      </div>
      <div
        className="container text-center"
        style={{
          background: `url(${bgImg})`,
          minWidth: "100%",
          minHeight: "550px",
          opacity:"0.80"
        }}
      >
        <h1 className="text-white" style={{paddingTop:"15rem"}}>
          <strong>What We Do</strong>
        </h1>
        <h3 className="text-white">
          <strong>We do what we preach, which is work for impact!</strong>
        </h3>
      </div>
      <div className="container p-5 text-center" style={{ minHeight: "550px" }}>
        <div className="row pt-5 mt-4">
          <div className="card static m-4 bg-danger col mx-4" style={{ width: "18rem;" }}>
            <img
              src={bgImg}
              width={80}
              className="card-img-to mx-auto my-4"
              alt="..."
            />

            <div className="card-body">
              <h4 className="card-titl">
                <strong>We educate and inspire.</strong>.
              </h4>

              <p className="card-text">
                We organise inspiring events, record videos, and publish blogs
                on the future of work to engage opinion leaders and
                practitioners across the sectors.
              </p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
          <div
            className="card static m-4 bg-danger col mx-4 text-center"
            style={{ width: "20rem;" }}
          >
            <img
              src={bgImg}
              width={80}
              className="card-img-to mx-auto my-4"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-titl">
                <strong>We convene and train.</strong>.
              </h4>

              <p className="card-text">
                We rely on our extensive network of experts to provide courses,
                workshops, and other capacity building activities for companies,
                unions, and national authorities.
              </p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
          <div className="card static m-4 bg-danger col mx-4" style={{ width: "18rem;" }}>
            <img
              src={bgImg}
              width={80}
              className="card-img-to mx-auto my-4"
              alt="..."
            />

            <div className="card-body">
              <h4 className="card-titl">
                <strong>We solve</strong>.
              </h4>
              <p className="card-text">
                We collect insights and conduct independent research to provide
                recommendations for policy and businesses in the form of
                practical guides and toolboxes.
              </p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>
      </div>
      <div
        className="container text-center"
        style={{
          background: `url(${bgImg})`,
          minWidth: "100%",
          minHeight: "550px",
          opacity: "0.80"
        }}
      >
        <h1 className="text-white" style={{paddingTop:"15rem"}}>
          <strong className="mt-5" >How We Do It</strong>
        </h1>
      </div>
      <div className="container p-5 text-left" style={{ minHeight: "550px" }}>
        <h2 className="text-danger">
          <strong>We are inclusive</strong>
        </h2>
        <p>
          We welcome big and small, starters and established organisations,
          ranging from leading corporates and startups, to unions, grassroot
          worker organisations, research institutions and advocacy groups. To
          create a safe space for everyone to express their stance and needs, we
          need all of our partners to respect one another. We do not fear
          disagreement; we welcome different views and opinions. We do our best
          to translate disagreement into impactful actions that uphold common
          objectives.
        </p>

        <h2 className="text-danger">
          <strong>We are independent</strong>
        </h2>
        <p>
          While we value everyone’s position, we stand behind our own – work for
          impact. We engage in partnerships with different actors with a stake
          in the debate on the future of work to capture the variety of
          positions, objectively report on the state of affairs, and propose
          recommendations based on our own insights and expertise.
        </p>

        <h2 className="text-danger">
          <strong>We are community-oriented</strong>
        </h2>
        <p>
          There is only so much you can achieve on your own. Our global network
          consisting of future-of-work enthusiasts, renowned experts, academics,
          and business leaders has a lot to offer. We create with them and for
          them – everyone with valuable insights or a story to share can find a
          place in our organisation.
        </p>
        <h2 className="text-danger">
          <strong>We are proactive</strong>
        </h2>
        <p>
          We believe in long-term solutions vs short term problem fixers.
          However, we also believe that certain challenges need to be addressed
          with urgency; we build workable solutions that can improve people’s
          lives now, while closely following the appropriate policy cycles and
          working with policy-makers to come to long-term solutions.
        </p>
      </div>
    </>
  );
}
