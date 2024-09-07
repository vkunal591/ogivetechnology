import { Link } from "react-router-dom";
import { IBlogResponse } from "../interfaces/i-blog";

export default function ViewBlog(blogData: {
 blogData: IBlogResponse 
}) {

  console.log(blogData);
  const element: HTMLElement | null = document.getElementById("content");
  if (element)
    element.innerHTML = JSON.parse(
      JSON.stringify(blogData && blogData.blogData?.desc)
    );

  return (
    <main className="container text-left">
      <div className="p-0 p-md-0 mb-4 rounded-3 overflow-hidden text-body-emphasis bg-transparent">
        <img
          src={blogData && blogData?.blogData.file}
          style={{ width: "100%", maxHeight: "500px" }}
          alt=""
        />
      </div>

      <div className="row g-5">
        <div className="col-md-8">
          <h2 className="display-5 link-body-emphasis mb-1">
            {blogData && blogData?.blogData.title}
          </h2>
          <p className="blog-post-meta">
            January 1, 2021 by <a href="">Mark</a>
          </p>

          <hr />
          <article id="content" className="blog-post">
           
          </article>
        </div>

        <div className="col-md-4">
          <div className="position-sticky" style={{ top: "2rem" }}>
            <div className="p-4 mb-3 bg-body-tertiary rounded">
              <h4 className="fst-italic">About</h4>
              <p className="mb-0">
                Ogive Technology is a product engineering services company
                helping clients in realising their ideas in Embedded Systems,
                Internet of Things, BlockChain, Artificial Intelligence, Digital
                Twining, and Immersive Technologies. Individual technology stack
                or amalgamating various technologies to deliver an integrated
                intelligent product.
              </p>
            </div>

            <div>
              <h4 className="fst-italic">Recent posts</h4>
              <ul className="list-unstyled">
                <li>
                  <Link
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    to="product?2"
                  >
                    <svg
                      className="bd-placeholder-img"
                      width="100%"
                      height="96"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <rect width="100%" height="100%" fill="777" />
                    </svg>
                    <div className="col-lg-8">
                      <h6 className="mb-0">Sangrah</h6>
                      <small className="text-body-secondary">
                        {/* January 15, 2024 */}
                      </small>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    to="product?4"
                  >
                    <svg
                      className="bd-placeholder-img"
                      width="100%"
                      height="96"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <rect width="100%" height="100%" fill="777" />
                    </svg>
                    <div className="col-lg-8">
                      <h6 className="mb-0">Pehchan</h6>
                      <small className="text-body-secondary">
                        {/* January 14, 2024 */}
                      </small>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    to="product?2"
                  >
                    <svg
                      className="bd-placeholder-img"
                      width="100%"
                      height="96"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <rect width="100%" height="100%" fill="777" />
                    </svg>
                    <div className="col-lg-8">
                      <h6 className="mb-0">Chalak</h6>
                      <small className="text-body-secondary">
                        {/* January 13, 2024 */}
                      </small>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="p-4">
              <h4 className="fst-italic">Elsewhere</h4>
              <ol className="list-unstyled">
                <li>
                  <a href="https://www.facebook.com/Ogive-Technology-485725495104947/">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/OgiveTechnology">Twitter</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company-beta/13356002/">
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/ogivetech/">Instagram</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
