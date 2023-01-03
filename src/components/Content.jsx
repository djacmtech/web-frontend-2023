import { Route } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import Events from "../pages/Events";
import Home from "../pages/Home";
import Team from "../pages/Team";

const Content = () => {
  return (
    <SlideRoutes duration={500} timing='ease-in-out'>
      <Route path='/' element={<Home />} />
      <Route path='/events' element={<Events />} />
      <Route path='/team' element={<Team />} />
    </SlideRoutes>
  );
};

export default Content;
