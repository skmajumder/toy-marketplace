import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import toy1 from "../../assets/toy1.jpg";
import toy2 from "../../assets/toy2.jpg";
import toy3 from "../../assets/toy3.jpg";
import toy4 from "../../assets/toy4.jpg";
import toy5 from "../../assets/toy5.jpg";
import toy6 from "../../assets/toy6.jpg";
import toy7 from "../../assets/toy7.jpg";
import toy8 from "../../assets/toy8.jpg";
import toy9 from "../../assets/toy9.jpg";
import toy10 from "../../assets/toy10.jpg";
import toy11 from "../../assets/toy11.jpg";
import toy12 from "../../assets/toy12.jpg";
import toy13 from "../../assets/toy13.jpg";
import toy14 from "../../assets/toy14.jpg";
import toy15 from "../../assets/toy15.jpg";
import toy16 from "../../assets/toy16.jpg";
import toy17 from "../../assets/toy17.jpg";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const GallerySection = () => {
  AOS.init();
  const images = [
    toy1,
    toy2,
    toy3,
    toy4,
    toy5,
    toy6,
    toy7,
    toy8,
    toy9,
    toy10,
    toy11,
    toy12,
    toy13,
    toy14,
    toy15,
  ];
  return (
    <section
      className="section-gallery"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="container px-10 py-16">
        <h3 className="text-3xl font-bold mb-12 text-center">Gallery</h3>
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {images.map((image, index) => (
            <a
              key={index}
              href={image}
              className="relative rounded-lg overflow-hidden"
            >
              <img src={image} alt={`Image ${index}`} className="w-full" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-500 opacity-30"></div>
            </a>
          ))}
        </LightGallery>
      </div>
    </section>
  );
};

export default GallerySection;
