import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Product from "./Component/Product";
import Service from "./Component/Service";

function App() {
  return (
    <div className="container-fluid ">
      <div
        className="row border border-1 border-black thm-env-color fixed-top"
        style={{ height: "10px" }}
      ></div>
      <nav className="row">
        <div className="col ">
          <Header />
        </div>
      </nav>
      <Home />
      <Service />
      <Product />
   <Footer />
    </div>
  );
}

export default App;
