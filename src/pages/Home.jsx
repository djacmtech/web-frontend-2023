import React from "react";
import "../styles/homepage.css";
import ParticleBg from "../utils/ParticleBg";

const Home = () => {
  const mainHead = "Association for Computing Machinery";
  const subHead = "Dwarkadas Jivanlal Sanghvi College of Engineering";

  return (
    <div className='homepage page'>
      <ParticleBg />
      <div className='home-main'>
        <h1 className='heading main-heading '>{mainHead}</h1>
        <h2 className='heading sub-heading'>{subHead}</h2>
      </div>
    </div>
  );
};

export default Home;
