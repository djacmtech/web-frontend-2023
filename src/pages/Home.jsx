import About from "../components/HomePage/About";
import Header from "../components/HomePage/Header";
import Contact from "../components/HomePage/Contact";
import Gallery from "../components/HomePage/Gallery";

const Home = () => {
  return (
    <div className='homepage page'>
      <Header />
      <Gallery />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
