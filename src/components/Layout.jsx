import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Socials from "./Socials";
import Content from "./Content";
import ParticleBg from "../utils/ParticleBg";

const Layout = () => {
  return (
    <Router>
      <ParticleBg />
      <Navbar />
      <Socials />
      <Content />
    </Router>
  );
};

export default Layout;
