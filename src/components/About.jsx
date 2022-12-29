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
    const BlockPairs = document.querySelectorAll(".block-pair");

    document.addEventListener("scroll", _ => {
      BlockPairs.forEach(pair => {
        const scrollProgress = window.scrollY;
        const windowHeight = window.innerHeight;
        const topOffset = pair.offsetParent.offsetTop + pair.offsetTop;
        const pairHeight = pair.offsetHeight;

        const pairStyles = window.getComputedStyle(pair);

        const offset = +pairStyles.getPropertyValue("--offset");
        const factor = +pairStyles.getPropertyValue("--factor");

        const ratio =
          (scrollProgress + windowHeight - (topOffset + offset)) / (pairHeight * factor);

        const a = +pairStyles.getPropertyValue("--a");
        const b = +pairStyles.getPropertyValue("--b");

        window.requestAnimationFrame(x => {
          pair.style.setProperty("--open-progress", ease(clamp(ratio, 0, 1), a, b));
          pair.style.setProperty("--extension", ratio > 0.5 ? 1 : 0);
        });
      });
    });

    return () => {
      document.removeEventListener("scroll", _ => {});
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
