import React, { useContext } from "react";
import Logo from "../../../public/img/logo.png";
import {
  FaEnvelopeOpen,
  FaFacebookF,
  FaInstagram,
  FaMapMarked,
  FaPhoneVolume,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Footer = () => {
  const { user } = useContext(AuthContext);
  return (
    <footer className="footer bg-[#f5f5f5]">
      <div className="container px-10 py-16">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 items-start md:grid-cols-5 md:gap-0">
          <div className="about col-span-2 md:col-span-2 flex flex-col gap-2">
            <div className="footer-logo">
              <img src={Logo} alt="Logo" className="h-16" />
            </div>
            <p className="text-[#333333] w-[75%] mb-5 text-[17px] leading-[28px]">
              <strong>Monstar toy shop</strong> is a store that specializes in
              selling toys specifically for children.
            </p>
            <address className="space-y-2">
              <p className="flex justify-start items-center gap-3 text-[#333333] text-[17px] leading-[28px]">
                <span>
                  <FaMapMarked />
                </span>
                4252 Asylum Avenue, Brookfield, CT
              </p>
              <p className="flex justify-start items-center gap-3 text-[#333333] text-[17px] leading-[28px]">
                <span>
                  <FaEnvelopeOpen />
                </span>
                <a href="mailto:contact-monstartoy@gmail.com">
                  contact-monstartoy@gmail.com
                </a>
              </p>
              <p className="flex justify-start items-center gap-3 text-[#333333] text-[17px] leading-[28px]">
                <span>
                  <FaPhoneVolume />
                </span>
                <a href="tel:(012) 345 6789">(012) 345 6789</a>
              </p>
            </address>
          </div>
          <div className="footer-menu">
            <h3 className="text-[28px] text-[#02224d] font-bold leading-6 mb-7">
              Quick Link
            </h3>
            <ul className="text-[#333333] text-[17px] space-y-5">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/all-toys"}>All Toys</Link>
              </li>
              {user && (
                <li>
                  <Link to={"/my-toys"}>My Toys</Link>
                </li>
              )}
              {user && (
                <li>
                  <Link to={"/add-toy"}>Add A Toy</Link>
                </li>
              )}
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <h3 className="text-[28px] text-[#02224d] font-bold leading-6 mb-7">
              Information
            </h3>
            <ul className="text-[#333333] text-[17px] space-y-5">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/"}>About</Link>
              </li>
              <li>
                <Link to={"/"}>Services</Link>
              </li>
              <li>
                <Link to={"/"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <h3 className="text-[28px] text-[#02224d] font-bold leading-6 mb-7">
              Social
            </h3>
            <ul className="text-[#333333] text-[17px] space-y-5">
              <li>
                <Link
                  to={"/"}
                  className="flex justify-start items-center gap-2"
                >
                  <span>
                    <FaFacebookF />
                  </span>
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="flex justify-start items-center gap-2"
                >
                  <span>
                    <FaTwitter />
                  </span>
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="flex justify-start items-center gap-2"
                >
                  <span>
                    <FaInstagram />
                  </span>
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="flex justify-start items-center gap-2"
                >
                  <span>
                    <FaPinterest />
                  </span>
                  Pinterest
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-[#02224d] border-[.7px] w-full my-5"></div>
        <div className="copyright">
          <p>Monstar toy shop © 2023. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
