import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SmoothScrolling from "./hooks/SmoothScrolling.jsx";
import { BrowserRouter } from "react-router-dom";
// import Navbar from './Components/Navbar.jsx'
import Chilli from "./Components/Chilli.jsx";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import TechStack from "./Sections/skills/TechStack.jsx";
import Loader from "./Components/Loader.jsx";
import Impactfulldesign from "./Sections/about/ImpactfulDesign.jsx";
import LandingHero from "./Sections/home/LandingHero.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SmoothScrolling>
      <BrowserRouter>
        <Loader />
        <Chilli />
        <Header />
        <App />
        <Footer />
      </BrowserRouter>
    </SmoothScrolling>
  </StrictMode>,
);
