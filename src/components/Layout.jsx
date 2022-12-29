import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Events from "../pages/Events";
import Home from "../pages/Home";
import Team from "../pages/Team";
import Navbar from "./Navbar";
import Socials from "./Socials";

const Layout = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Socials />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/team' element={<Team />} />
        </Routes>
      </Router>
    </>
  );
};

export default Layout;
