import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Narbar";
import Home from "./components/Home";
import Serice from "./components/Service";
import About from "./components/About";
import Product from "./components/Product";
import Blog from "./components/Blog";
import Newsletter from "./components/Newsletter";
import CustomFooter from "./components/Footer";
import AOS from "aos"; // => after innstall aos => npm i --save-dev @types/aos
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <Serice />
      <About />
      <Product />
      <Blog />
      <Newsletter />
      <CustomFooter />
    </>
  );
}

export default App;
