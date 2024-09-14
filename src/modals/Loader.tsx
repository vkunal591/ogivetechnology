import { useEffect, useState } from "react";
import "../Component/Css/loader.css";
import logo from "../assets/ogive logo.png"

export default function Loader() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    
    <div className={`loading-screen ${isLoading?"":"d-none"}`}>
        <img src={logo} width={150} loading="lazy" className="position-relative " alt="Ogive Technology"style={{top:"40%"}}/>
      <div className="loader">
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>
    </div>
  );
}
