import ParticleBg from "../utils/ParticleBg";

const Header = () => {
  const mainHead = "Association for Computing Machinery";
  const subHead = "Dwarkadas Jivanlal Sanghvi College of Engineering";

  return (
    <section className='header'>
      <ParticleBg />
      <div className='main-header'>
        <h1 className='heading main-heading '>{mainHead}</h1>
        <h2 className='heading sub-heading'>{subHead}</h2>
      </div>
    </section>
  );
};

export default Header;
