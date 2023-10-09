import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../../utils/Carousel";
import { ArchivesIcon, TeamIcon, EventsIcon, BackIcon, GridIcon } from "../GalleryIcons";

const Gallery = () => {
  const [Open, setOpen] = useState(false);


  const images = [
    // Membership Dirve
    "1gvw-b7I_0bF7Io2OOPhX_zX6tTqSW3CG",
    "1g64ARN5oYI1UZNfU07So2wL_yXja8VoG",
    "1ZKRqpdDX50o17c_UMPoaZuvV6T4q82l_",
    "1GsJjAmowJAI1L5FjA0_nCars_nSlTRKU",

    // Industrial Visit
    "1nMbXRpFmrCDmJoetNpzzs4XaYGUfk0Fm",
    "1-hYXqBFeBweynYov1Z1CFkNix89LVbBc",
    "1Ppg7GWXs98ZhIa3W_E25qHUfkkFDDNyN",
    "1G9fc3xMVBdDKYaQxuehnGIbxcsb-Z8KD",
    "1OPlp4HIynKLMU7KWD25-kpVI1BY_WmQ1",
    "1m1N_qZGAzaOod4jw6WPTvIr5GfGLOvf-",
    "1HmpKWwku7xljBZkTfwGHJYb9oYMn8G9L",
    "1swdsNjWlhf7eiUUefltcu37M1QWADjlY",
    "1i5b46hom1NRWD3akM-1VWfYSKhahsl9N",

    // Hour of Code
    // "100CGM7jqcggMPP_Q423QXz9FfXGCkhdE",
    // "1vpXjxbrQs3MBdCVymUPC5uq-dmXg6BTO",
    // "188vuI70xrEo47YcpCojpj4Dos8kyIJ4y",
    // "1zRfL0Wy6AI621KzeYuk-XvSMFejNeTSn",
    // "11psbrV4-7-RsnPHywrr7Bc23n7bpVewr",
    // "1aa_1jCgpUPRQ0-YsjFk_LxG00KAI60wY",
    // "1soXnydKN-pBk2cuaKK2BkPEmly-6vrBJ",
    // "1nHWmr77alFk2hVGFEkPD9UUwEztejSB9",

    //Digihunt 3.0
    "1J8SZtDrWGoEZYzBYmLtVgCsdbIH4QAmT",
    // "1XAiGb8PXLwuzASAi8s1GCoh2Wg-_cdWt",
    // "1bAtgnhP5pH9Eh7j_VC-GnfGA26ml1pQR",
    "11Fu3uDwXf4thz_jiJKuqpL3p-ME21V0k",
    "16WtWKcuw2NB5h6M5tUn_oMiDK5Y6BKuo",

    //Codebash 3.0

    //ACM 101's roadmap to CP
    "1QF6vuRf4striA9X8iLQaiFMRvq7BtuQ2",
    "13Kfo3oxm2Oo3FoLoy-z9Y_BzUfWcCu4x",
    // "1r1lRCoqfzxTTrf6hMRS9WZeaMsO5vNX0",
    // "197dIrNTA-WRvaObTOneBuAtDAd9Nzquw",
  ];
  const Gallery = useRef(null);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const openGallery = () => {
    Gallery.current.classList.add("gallery-open");
    Gallery.current.scrollIntoView();
    setOpen(true);
  };
  const closeGallery = () => {
    Gallery.current.classList.remove("gallery-open");
    Gallery.current.scrollIntoView();
    setOpen(false);
  };

  return (
    <section className='home-gallery' id='gallery' ref={Gallery}>
      <Carousel className='gallery-carousel' disablehover={!Open} onClick={openGallery}>
        {images.map(image => (
          <img
            src={`https://drive.google.com/uc?export=download&id=${image}`}
            key={image}
            className='gallery-carousel-img'
            alt='Event Image'
          />
        ))}
      </Carousel>

      <Link className='gallery-btn team-btn' to="/team" role='button'>
        <TeamIcon />
        <span>Team</span>
      </Link>
      <Link className='gallery-btn events-btn' to='/events' role='button'>
        <EventsIcon />
        <span>Events</span>
      </Link>
      <div
        className={`gallery-btn archive-container ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="archive-content">
          <ArchivesIcon />
          <span>Archives</span>
        </div>
        <div className="archive-overlay">
          <div className="archive-btn"> <a href="https://drive.google.com/file/d/1QqR0ljFu9SpZDoNHN-V9Sjl11GssVTQ8/view?usp=drive_link" target="_blank">20-21</a></div>
          <div className="archive-btn"> <a href="https://drive.google.com/file/d/1g7kTL2OkoqjZ0D85K4kE-uGZg3yXC9kL/view?usp=drive_link" target="_blank">21-22</a></div>
          <div className="archive-btn"> <a href="https://drive.google.com/file/d/1FbgpX2FbokjtdyhE1HzFe0P4b3HiGeLv/view?usp=drive_link" target="_blank">22-23</a></div>
        </div>
      </div>

      <a className='gallery-open-btn back-btn' onClick={closeGallery} role='button'>
        <BackIcon />
      </a>
      <Link className='gallery-open-btn grid-btn' to='/gallery'>
        <GridIcon />
      </Link>
    </section>
  );
};
export default Gallery;
