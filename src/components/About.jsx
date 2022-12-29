import { useEffect } from "react";

const About = () => {
  const cards = [
    {
      title: "Our Mission",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae vel necessitatibus deserunt dolor nulla soluta dignissimos iure enim cupiditate officia esse tempora veritatis, obcaecati in dolorum laboriosam eveniet recusandae quae!",
    },
    {
      title: "Our Vision",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae vel necessitatibus deserunt dolor nulla soluta dignissimos iure enim cupiditate officia esse tempora veritatis, obcaecati in dolorum laboriosam eveniet recusandae quae!",
    },
    {
      title: "What We Do",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae vel necessitatibus deserunt dolor nulla soluta dignissimos iure enim cupiditate officia esse tempora veritatis, obcaecati in dolorum laboriosam eveniet recusandae quae!",
    },
  ];

  const clamp = (x, a, b) => (x >= b ? b : x <= a ? a : x);
  const ease = (x, a, b) => 3 * b * (1 - x) ** 2 * x + 3 * a * (1 - x) * x ** 2 + x ** 3;
  useEffect(() => {
    // const Page = document.querySelector(".page");
    const AboutSection = document.querySelector(".about");
    const BlockPairs = document.querySelectorAll(".block-pair");

    BlockPairs.forEach((pair, i) => {
      pair.childNodes.forEach(x => {
        x.style.setProperty("transition-delay", 150 * (i + 1) + "ms");
      });
    });

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.lastChild.classList.add("open");
          } else {
            entry.target.lastChild.classList.remove("open");
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(AboutSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className='about'>
      <h1 className='about-header'>About Us</h1>
      <div className='blocks'>
        {cards.map(x => (
          <div className='block-pair' key={x.title} aria-label={x.title}>
            <div className='block-text block'>{x.text}</div>
            <div className='block-title block'>{x.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
