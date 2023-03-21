import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BackIcon } from "../components/GalleryIcons";

const Gallery = () => {
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

    //ACM 101's roadmap to CP
    // "1QF6vuRf4striA9X8iLQaiFMRvq7BtuQ2",
    "13Kfo3oxm2Oo3FoLoy-z9Y_BzUfWcCu4x",
    // "1r1lRCoqfzxTTrf6hMRS9WZeaMsO5vNX0",
    // "197dIrNTA-WRvaObTOneBuAtDAd9Nzquw",

    //Digihunt 3.0
    "1J8SZtDrWGoEZYzBYmLtVgCsdbIH4QAmT",
    // "1XAiGb8PXLwuzASAi8s1GCoh2Wg-_cdWt",
    // "1bAtgnhP5pH9Eh7j_VC-GnfGA26ml1pQR",
    "11Fu3uDwXf4thz_jiJKuqpL3p-ME21V0k",
    "16WtWKcuw2NB5h6M5tUn_oMiDK5Y6BKuo",

    //Codebash 3.0
  ];

  useEffect(() => {
    const GalleryGrid = document.querySelector(".gallery-grid");
    GalleryGrid.childNodes.forEach(x => {
      console.log(x.naturalWidth / x.naturalHeight);
      if (x.naturalWidth / x.naturalHeight < 1) x.style.gridRow = "auto / span 2";
    });

    return () => {
      GalleryGrid.childNodes.forEach(x => {
        x.style.gridRow = "auto";
      });
    };
  }, []);

  return (
    <div className='page gallerypage'>
      <section className='gallery'>
        <div className='gallery-grid '>
          {images.map(image => (
            <img
              src={`https://drive.google.com/uc?export=download&id=${image}`}
              key={image}
              className='gallery-carousel-img'
              alt='Event Image'
            />
          ))}
        </div>
        <Link className='gallery-open-btn back-btn' to='/#gallery'>
          <BackIcon />
        </Link>
      </section>
    </div>
  );
};
export default Gallery;
