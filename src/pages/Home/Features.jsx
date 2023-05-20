import React from "react";
import { features } from "../../constants/index";
import Feature from "../../components/Feature/Feature";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  AOS.init();

  return (
    <section
      className="section-features bg-[#f5f5f5]"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="container p-10">
        <div className="grid grid-cols-2 md:grid-cols-4 justify-between items-center gap-5">
          {features.map((f) => (
            <Feature key={f.id} feature={f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
