import { useEffect, useState } from "react";
import iRakshak from "../assets/p-4.e51ae303.png";
import iSangrah from "../assets/p-6.6f097e91.png";
import iTruck from "../assets/p-3.26f01dd2.png";
import iPehchan from "../assets/p-2.cbbb8164.png";
import iGarud from "../assets/p-1.79519766.png";
import iSugam from "../assets/p-7.8c99d4bb.png";
import iEklavya from "../assets/p-5.8714d8a1.png";
import iSwayam from "../assets/p-8.6c562d80.png";
import productsData from "../../ProductData.json";
import { Link } from "react-router-dom";
interface IBlog {
  title: string;
  desc: string;
  img?: string;
}

export default function ViewBlog() {
  const [blogData, setBlogData] = useState<IBlog[]>([]);
  const location = window.location.href.split("/");
  const category = location[3]?.split("?")[0];
  const id = (Number(location[3]?.split("?")[1]) - 1) | 0;

  const img = [
    iRakshak,
    iSangrah,
    iTruck,
    iPehchan,
    iGarud,
    iSugam,
    iEklavya,
    iSwayam
  ];

  useEffect(() => {
    if (category === "product") setBlogData([productsData?.Products[id]]);
    if (category === "service") setBlogData([productsData?.Services[id]]);
    if (category === "industry") setBlogData([productsData?.Industries[id]]);
    if (category === "product") console.log([productsData?.Products[id]]);
    if (category === "service") console.log([productsData?.Services[id]]);
    if (category === "industry") console.log([productsData?.Industries[id]]);
    console.log(id)

    const element: HTMLElement | null = document.getElementById("content");
    if (element)
      element.innerHTML = JSON.parse(
        JSON.stringify(productsData?.Products[id]?.desc)
      );
    // }
  }, []);

  return (
    <main className="container text-left">
      <div className="p-0 p-md-0 mb-4 rounded-3 overflow-hidden text-body-emphasis bg-secondary">
        <img src={img[id]} style={{ width: "100%" }} alt="" />
        <div className="col-lg-6 px-0">
          {/* <h1 className="display-4 fst-italic">
            Title of a longer featured blog post
          </h1>
          <p className="lead my-3">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what’s most interesting in this post’s
            contents.
          </p>
          <p className="lead mb-0">
            <a href="" className="text-body-emphasis fw-bold">
              Continue reading...
            </a>
          </p> */}
        </div>
      </div>

      <div className="row g-5">
        <div className="col-md-8">
          <h2 className="display-5 link-body-emphasis mb-1">
            {blogData && blogData[0]?.title}
          </h2>
          <p className="blog-post-meta">
            January 1, 2021 by <a href="">Mark</a>
          </p>

          <article id="content" className="blog-post">
            <hr />
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
