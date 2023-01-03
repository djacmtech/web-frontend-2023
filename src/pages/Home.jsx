import About from "../components/HomePage/About";
import Header from "../components/HomePage/Header";
import Contact from "../components/HomePage/Contact";
import TextBlock from "../utils/TextBlock";
// import Debug from "../utils/Debug";

const Home = () => {
  return (
    <div className='homepage page'>
      <Header />
      <About />
      {/* <TextBlock /> */}
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
