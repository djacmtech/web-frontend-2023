import About from "../components/HomePage/About";
import Header from "../components/HomePage/Header";
import Contact from "../components/HomePage/Contact";

const Home = () => {
  return (
    <div className='homepage page'>
      <Header />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
