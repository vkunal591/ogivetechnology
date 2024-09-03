import Service from "../Component/Service";
import Product from "../Component/Product";
import Home from "../Component/Home";
import Testomonial from "./AdminPanel/Admin_Component/Testomonial";
import ClientSection from "./AdminPanel/Admin_Component/ClientSection";
import Achivement from "./AdminPanel/Admin_Component/Achivement";

export default function LandingPage() {
  return (
    <>
      <Home />
      <Service />
      <Product />
      <Achivement />
      <Testomonial />
      <ClientSection />
    </>
  );
}
