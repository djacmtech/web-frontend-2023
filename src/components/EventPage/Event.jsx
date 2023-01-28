import ImageSlider from "./ImageSlider";

const Event = () => {
  const slides = [
    {
      url: "https://th.bing.com/th/id/R.7cdf60c7cd8b2b14995694dcd7c99e06?rik=3obl%2fhI6QdNIMA&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2ffree-beautiful-place-wallpaper-hd-173.jpg&ehk=92RRpT4hrYheMDBZkK0HhLLXx9%2fGDjnafeDmbgjE1K8%3d&risl=1&pid=ImgRaw&r=0",
    },
    {
      url: "https://th.bing.com/th/id/R.c6e9e0e269417ef511dd12b38e7458d8?rik=JvqjDCfPocchLg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fimages-of-nature-4.jpg&ehk=%2b1REJDS0cEPD0z2IP%2fddCyP9IgFz6xVpp8fyQr78SJ0%3d&risl=&pid=ImgRaw&r=0",
    },
    { url: "https://th.bing.com/th/id/OIP.ts14J2Z7Q8DYNohIc6ndJQAAAA?pid=ImgDet&w=450&h=311&rs=1" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <section className='events'>
      <div className='events-carousel' style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>

      <div className='events-list'>
        {/* Routes AFTER DESIGN */}
        <h1>EVENTS</h1>
        <p>●Digihunt 3.0</p>
        <p>●CODEBASH</p>
        <p>●ACM 101</p>
        <p>●DIGIHUNT 2.0</p>
        <p>●FUTURES 101</p>
        <p>●LOC 3.0</p>
        <p>●GIT WORKSHOP</p>
        <p>●PLACEMENTS 101</p>
        <p>●HOC</p>
        <p>●INDUSTRIAL VISIT</p>
      </div>
    </section>
  );
};

export default Event;
