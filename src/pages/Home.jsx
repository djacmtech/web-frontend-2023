import React from "react";
import "../styles/homepage.css";
import Header from "../components/Header";
import About from "../components/About";

const Home = () => {
  return (
    <div className='homepage page'>
      <Header />
      <About />
    </div>
  );
};

export default Home;
