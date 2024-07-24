import React, { useState } from "react";
import Logo from "../img/logo.svg";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const triggerNavItem = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMobileMenuToggle = () => {
    setMobileMenu((prev) => !prev);
  };

  const handleNavItemClick = (id) => {
    setMobileMenu(false);
    triggerNavItem(id);
  };

  return (
    <div
      className={`relative w-full z-50 top-0 py-3 sm:py-5 bg-primary ${
        mobileMenu ? "overflow-hidden max-h-screen" : ""
      }`}
    >
      <div className="container flex items-center justify-between">
        <div>
          <a href="/">
            <img src={Logo} alt="logo" className="w-24 lg:w-48" />
          </a>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center">
            <li className="group pl-6">
              <span
                onClick={() => handleNavItemClick("#about")}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                About Me
              </span>
              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
            </li>
            <li className="group pl-6">
              <span
                onClick={() => handleNavItemClick("#projects")}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Why Me
              </span>
              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
            </li>
            <li className="group pl-6">
              <span
                onClick={() => handleNavItemClick("#portfolio")}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Projects
              </span>
              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
            </li>
            <li className="group pl-6">
              <span
                onClick={() => handleNavItemClick("#work")}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Work Experience
              </span>
              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
            </li>
            <li className="group pl-6">
              <span
                onClick={() => handleNavItemClick("#statistics")}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Statistics
              </span>
              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
            </li>
          </ul>
        </div>
        <div className="block lg:hidden">
          <button onClick={handleMobileMenuToggle}>
            <i
              className={`bx ${
                mobileMenu ? "bx-x" : "bx-menu"
              } text-4xl text-white`}
            ></i>
          </button>
        </div>
      </div>
      {mobileMenu && (
        <div className="lg:hidden mt-4">
          <ul className="flex flex-col items-center">
            <li className="py-2">
              <span
                onClick={() => handleNavItemClick("#about")}
                className="cursor-pointer font-header font-semibold uppercase text-white"
              >
                About
              </span>
            </li>
            <li className="py-2">
              <span
                onClick={() => handleNavItemClick("#services")}
                className="cursor-pointer font-header font-semibold uppercase text-white"
              >
                Projects
              </span>
            </li>

            <li className="py-2">
              <span
                onClick={() => handleNavItemClick("#work")}
                className="cursor-pointer font-header font-semibold uppercase text-white"
              >
                Work Experience
              </span>
            </li>
            <li className="py-2">
              <span
                onClick={() => handleNavItemClick("#statistics")}
                className="cursor-pointer font-header font-semibold uppercase text-white"
              >
                Statistics
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
