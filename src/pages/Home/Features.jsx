import React from "react";
import { features } from "../../constants/index";
import Feature from "../../components/Feature/Feature";

const Features = () => {
  return (
    <section className="section-features bg-[#f5f5f5]">
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
