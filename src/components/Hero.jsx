import React, { useState } from 'react';

function Hero() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const triggerMobileNavItem = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenu(false);
    }
  };

  return (
    <>
      <div
        className={`pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 transition-opacity lg:hidden ${mobileMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
          <button
            className="absolute top-0 right-0 mt-4 mr-4"
            onClick={() => setMobileMenu(false)}
          >
            <img src="/assets/img/icon-close.svg" className="h-10 w-auto" alt="Close menu" />
          </button>

          <ul className="mt-8 flex flex-col">
            <li className="py-2">
              <span
                onClick={() => triggerMobileNavItem('#about')}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                About
              </span>
            </li>
            <li className="py-2">
              <span
                onClick={() => triggerMobileNavItem('#services')}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Services
              </span>
            </li>
            <li className="py-2">
              <span
                onClick={() => triggerMobileNavItem('#portfolio')}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Portfolio
              </span>
            </li>
            <li className="py-2">
              <span
                onClick={() => triggerMobileNavItem('#clients')}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Clients
              </span>
            </li>
            <li className="py-2">
              <span
                onClick={() => triggerMobileNavItem('#work')}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Work
              </span>
            </li>
            <li className="py-2">
              <span
                onClick={() => triggerMobileNavItem('#statistics')}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Statistics
              </span>
            </li>
            <li className="py-2">
              <span
                onClick={() => triggerMobileNavItem('#blog')}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Blog
              </span>
            </li>
            <li className="py-2">
              <span
                onClick={() => triggerMobileNavItem('#contact')}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Contact
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Hero;
