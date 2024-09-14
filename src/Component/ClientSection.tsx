const CLIENTS_ID = import.meta.env.VITE_API_CLIENTS_ID;

import ilogo from "../assets/iLogo.png";
import { AxiosError, AxiosResponse } from "axios";
import styled, { keyframes, css } from "styled-components";
import { useState, useEffect } from "react";
import { IErrorMessageResponse } from "../interfaces/i-authentication";
import { IBlogResponse } from "../interfaces/i-blog";
import BlogService from "../Services/BlogService";
import { errorMessage } from "../utils/fetchResponseMessage";
import { showToast } from "../utils/toast";
import { ILandingPagePayload } from "../interfaces/i-landingpage";

export default function ClientSection(porps:{clientSectionData:ILandingPagePayload | undefined}) {
  // const row1 = [
  //   "https://bel-india.in/wp-content/uploads/2022/11/BEL-Logo-PNG.png",
  //   "https://bel-india.in/wp-content/uploads/2022/11/BEL-Logo-PNG.png",
  //   "https://bel-india.in/wp-content/uploads/2022/11/BEL-Logo-PNG.png",
  //   "https://bel-india.in/wp-content/uploads/2022/11/BEL-Logo-PNG.png",
  //   "https://bel-india.in/wp-content/uploads/2022/11/BEL-Logo-PNG.png",
  //   "https://bel-india.in/wp-content/uploads/2022/11/BEL-Logo-PNG.png"
  // ];

  // const row2 = [
  //   "https://bel-india.in/wp-content/uploads/2022/11/BEL-Logo-PNG.png",
  //   "https://bel-india.in/wp-content/uploads/2022/11/BEL-Logo-PNG.png",
  //   "https://bel-india.in/wp-content/uploads/2022/11/BEL-Logo-PNG.png",
  //   "https://bel-india.in/wp-content/uploads/2022/11/BEL-Logo-PNG.png",
  //   "https://bel-india.in/wp-content/uploads/2022/11/BEL-Logo-PNG.png",
  //   "https://bel-india.in/wp-content/uploads/2022/11/BEL-Logo-PNG.png"
  // ];

  const [clientData, setClientData] = useState<IBlogResponse[]>();
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
          setClientData(res.data.details.posts);
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
    const categoryId = CLIENTS_ID;
    getBlog("", "", "", "", categoryId);
  }, []);
  return (
    
    <AppContainer>
      <Wrapper>
            <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8">
          <h5 className="card-header cs-title-style  bg-transparent border-0 mb-5 mt-3">
        <span>
          <img
            className="m-0"
            src={ilogo}
            alt=""
            width={8}
            style={{ rotate: "0deg" }}
          />
        </span>
        With Great Outcomes
      </h5>
      <p className="mb-5 text-center">
   {porps?.clientSectionData?.outcomeDesc}
      </p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
          </div>
        </div>
      </div>
        <Marquee>
          <MarqueeGroup>
            {clientData?.map((el) => (
              <ImageGroup>
                <Image src={el?.file} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {clientData?.map((el) => (
              <ImageGroup>
                <Image src={el?.file} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {clientData?.map((el) => (
              <ImageGroup>
                <Image src={el?.file} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {clientData?.map((el) => (
              <ImageGroup>
                <Image src={el?.file} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
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
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
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
