import React from "react";
import { FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const SubscribeForm = () => {
  AOS.init();
  return (
    <>
      <section
        className="section-subscribe"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="container px-10">
          <div className="flex justify-center items-center py-20 md:py-0 h-full md:h-[80vh]">
            <div className="text-center">
              <h3 className="text-3xl md:text-6xl font-semibold text-[#02224d] tracking-wide mb-8">
                Subscribe For Offer!
              </h3>
              <p className="text-[#02224db3] text-[22px] leading-[28px] mb-10">
                Join with us for latest Car toy collection and news.
              </p>
              <div className="flex justify-center items-center">
                <input
                  type="email"
                  placeholder="Your Email Address. We send good mail"
                  className="w-full subscribe-form"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubscribeForm;
