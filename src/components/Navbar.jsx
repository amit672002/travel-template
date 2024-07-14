import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [button, setButton] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", showButton);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  let lastScrollTop = 0;
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > lastScrollTop && currentScrollPos > 100) {
      // Scroll down
      setShowNavbar(false);
    } else {
      // Scroll up
      setShowNavbar(true);
    }
    lastScrollTop = currentScrollPos <= 0 ? 0 : currentScrollPos;
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`text-white bg-black fixed top-0 left-0 w-full flex justify-between px-10 py-4 items-center z-10 transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } z-20`}
    >
      <div>
        <span>Logo</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FontAwesomeIcon icon={!isMenuOpen ? faBars : faXmark} />
        </div>
        <ul
          className={`flex gap-8 max-sm:absolute max-sm:top-[56px] max-sm:left-0 max-sm:w-full max-sm:h-[38vh] max-sm:bg-black max-sm:transition-all max-sm:duration-500 max-sm:ease-in-out ${
            isMenuOpen
              ? "max-sm:opacity-100 max-sm:translate-y-0"
              : "max-sm:opacity-0 max-sm:translate-y-[-20px]"
          } max-sm:flex-col max-sm:items-center max-sm:pt-8 max-sm:text-xl`}
        >
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
          {!button && (
            <li>
              <Link to="/signup" onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          )}
        </ul>
        {button && (
          <Button
            title={`Sign Up`}
            btnStyle={`primary`}
            btnSize={`small`}
            onClick={() => {
              navigate("/signup");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
