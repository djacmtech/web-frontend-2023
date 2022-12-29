import "../styles/homepage.css";
import Header from "../components/Header";
import About from "../components/About";
import TextBlock from "../utils/TextBlock";
import Debug from "../utils/Debug";

// import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className='homepage page'>
      <Debug />

      <Header />
      <About />
      <TextBlock />
    </div>
  );
};

export default Home;
