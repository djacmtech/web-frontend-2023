import { useEffect } from "react";

const Header = () => {
  const mainHead = "Association for Computing Machinery";
  const subHead = "Dwarkadas Jivanlal Sanghvi College of Engineering";

  useEffect(() => {
    const Page = document.querySelector(".page");
    const header = document.querySelector(".header");

    header.scrollIntoView();
  }, []);

  return (
    <section className='header'>
      <div className='main-header'>
        <h1 className='heading main-heading '>{mainHead}</h1>
        <h2 className='heading sub-heading'>{subHead}</h2>
      </div>
    </section>
  );
};

export default Header;
