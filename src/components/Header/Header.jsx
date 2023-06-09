import React, { useContext, useState } from "react";
import Logo from "../../../public/img/logo.png";
import UserAvatar from "../../../public/img/avatar.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { HiOutlineUserCircle } from "react-icons/hi";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  AOS.init();
  const { user, logout } = useContext(AuthContext);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const defaultUserAvatar = user?.photoURL || UserAvatar;

  const navigate = useNavigate();

  const handleRedirectLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <header
        className="bg-white-900 p-4"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="container px-10">
          <div className="flex items-center justify-between">
            <div className="w-3/12">
              <Link to={"/"}>
                <img src={Logo} alt="Logo" className="h-auto md:h-14" />
              </Link>
            </div>
            <nav className="w-6/12 hidden md:block">
              {/* Navigation menu */}
              <ul className="flex justify-center space-x-6 text-[18px] text-[#02224d] font-bold leading-6">
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
            </nav>
            <div className="w-3/12 flex justify-start md:justify-end gap-0 md:gap-3">
              {user ? (
                <>
                  <div className="tooltip" data-tip={user?.displayName}>
                    <img
                      src={defaultUserAvatar}
                      alt="User Avatar"
                      className="h-8 rounded-full"
                    />
                  </div>
                  <button
                    onClick={logout}
                    className="btn btn-sm border-[#02224d] hidden md:block"
                  >
                    SignOut
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleRedirectLogin}
                    className="hidden md:block"
                  >
                    <HiOutlineUserCircle className="w-8 h-8" />
                  </button>
                </>
              )}
            </div>
            <button
              className="block md:hidden"
              onClick={handleToggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6 fill-current text-[#02224d]"
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
              <ul className="flex flex-col items-center space-y-4 text-[18px] text-[#02224d] font-bold leading-6">
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
                {user ? (
                  <>
                    <li>
                      <button onClick={logout} className="btn btn-sm md:hidden">
                        SignOut
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <button
                        onClick={handleRedirectLogin}
                        className="btn btn-sm md:hidden"
                      >
                        Sign In
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
