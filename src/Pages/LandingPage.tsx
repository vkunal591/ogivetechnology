import Service from "../Component/Service";
import Product from "../Component/Product";
import Home from "../Component/Home";
import Testomonial from "./AdminPanel/Admin_Component/Testomonial";
import Achivement from "../Component/Achivement";
import ClientSection from "../Component/ClientSection";
import Loader from "../modals/Loader";
import { useEffect, useState } from "react";
import LandingPageService from "../Services/LandingPageService";
import { ILandingPagePayload } from "../interfaces/i-landingpage";

export default function LandingPage() {
  // const [homeSectionData, setHomeSectionData] = useState();
  // const [serviceSectionData, setServiceSectionData] = useState();
  // const [successSectionData, setSuccessSectionData] = useState();
  // const [expertSectionData, setexpertSectionData] = useState();
  // const [clientSectionData, setClientSectionData] = useState();
  const [landingPageData, setLandingPageData] = useState<ILandingPagePayload | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const getLandingPageInfo = async (id: string) => {
    try {
      setIsLoading(true);
      await LandingPageService.getLandingPages(id).then((res) => {
        const data = res.data.details.landingPage[0];
        console.log(data);
        setLandingPageData(data);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLandingPageInfo("");
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Home homeSectionData={landingPageData} />
          <Service serviceSectionData={landingPageData} />
          <Product productSectionData={landingPageData} />
          <Achivement achivemenSectiontData={landingPageData} />
          <Testomonial memberSectionData={landingPageData} />
          <ClientSection clientSectionData={landingPageData} />
        </>
      )}
    </>
  );
}
