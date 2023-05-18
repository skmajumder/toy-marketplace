import React, { useState } from "react";
import Logo from "../../../public/img/logo.png";
import User from "../../../public/img/user-avatar.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white-900 p-4 px-10">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="w-3/12">
            <img src={Logo} alt="Logo" className="h-14" />
          </div>
          <nav className="w-6/12 hidden md:block">
            {/* Navigation menu */}
            <ul className="flex justify-center space-x-4 text-[18px] text-[#02224d] font-bold leading-6">
              <li>
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">Services</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="w-3/12 flex justify-end gap-3">
            <div className="tooltip" data-tip="hello">
              <img src={User} alt="User Avatar" className="h-8 rounded-full" />
            </div>
            <button className="btn btn-sm">Logout</button>
          </div>
          <button
            className="block md:hidden"
            onClick={handleToggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6 fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M3 5h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 6h18a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 6h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
        {isMobileMenuOpen && (
          <nav className="mt-2">
            <ul className="flex flex-col items-center space-y-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
