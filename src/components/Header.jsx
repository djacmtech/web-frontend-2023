import ParticleBg from "../utils/ParticleBg";

const Header = () => {
  const mainHead = "Association for Computing Machinery";
  const subHead = "Dwarkadas Jivanlal Sanghvi College of Engineering";

  return (
    <div>
      <ParticleBg />
      <div className='home-main'>
        <h1 className='heading main-heading '>{mainHead}</h1>
        <h2 className='heading sub-heading'>{subHead}</h2>
      </div>
    </div>
  );
};

export default Header;
