import { Route } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import Events from "../pages/Events";
import Event from "../pages/Event";
import Gallery from "../pages/GalleryGrid";
import Home from "../pages/Home";
import Team from "../pages/Team";

const Content = () => {
  return (
    <SlideRoutes duration={500} timing='ease-in-out'>
      <Route path='/' element={<Home />} />
      <Route path='/events' element={<Events />} />
      <Route path='/events/:eventKey' element={<Event />} />
      <Route path='/team' element={<Team />} />
      <Route path='/gallery' element={<Gallery />} />
    </SlideRoutes>
  );
};

export default Content;
