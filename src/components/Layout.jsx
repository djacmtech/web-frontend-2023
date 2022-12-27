import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Events from "../pages/Events";
import Team from "../pages/Team";
import Socials from "./Socials";

const Layout = () => {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Socials />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/events' element={<Events />} />
            <Route path='/team' element={<Team />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Layout;
