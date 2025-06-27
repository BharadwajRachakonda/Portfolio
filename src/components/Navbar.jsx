import React, { useState, useEffect } from "react";
import self from "./self.png";
import { useLocation } from "react-router-dom";

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  let location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <nav className="absolute md:fixed top-0 right-0 left-0 backdrop-blur-md z-50 drop-shadow-xl">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`block h-6 w-6 ${isOpen ? "hidden" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`block h-6 w-6 ${isOpen ? "" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <h3
                className={`text-lg font-medium ${
                  window.innerWidth < 768 ? "text-transparent" : ""
                }`}
              >
                Student
              </h3>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* Navigation links */}
                <a
                  href="#Dashboard"
                  className={`hover:bg-gray-700 rounded-md px-3 py-2 text-sm hover:text-white ${
                    location.hash === "#Dashboard" || location.hash === ""
                      ? "bg-gray-900 text-white"
                      : ""
                  }`}
                  aria-current="page"
                >
                  Dashboard
                </a>
                <a
                  href="#About"
                  className={`hover:bg-gray-700 rounded-md px-3 py-2 text-sm hover:text-white ${
                    location.hash === "#About" ? "bg-gray-900 text-white" : ""
                  }`}
                >
                  About
                </a>
                <a
                  href="#Projects"
                  className={`hover:bg-gray-700 rounded-md px-3 py-2 text-sm hover:text-white ${
                    location.hash === "#Projects"
                      ? "bg-gray-900 text-white"
                      : ""
                  }`}
                >
                  Projects
                </a>
                <a
                  href="#Certifications"
                  className={`hover:bg-gray-700 rounded-md px-3 py-2 text-sm hover:text-white ${
                    location.hash === "#Certifications"
                      ? "bg-gray-900 text-white"
                      : ""
                  }`}
                >
                  Certifications
                </a>
                <a
                  href="#Achievements"
                  className={`hover:bg-gray-700 rounded-md px-3 py-2 text-sm hover:text-white ${
                    location.hash === "#Achievements"
                      ? "bg-gray-900 text-white"
                      : ""
                  }`}
                >
                  Achievements
                </a>
                <a
                  href="mailto:rbharadwaj022@gmail.com"
                  className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 text-sm hover:bg-indigo-500 duration-300 p-2 rounded-md text-white"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Profile dropdown */}
          <div className="relative ml-3">
            <div>
              <button
                type="button"
                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span className="sr-only">Open user menu</span>
                <img className="h-8 w-8 rounded-full" src={self} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isOpen ? "" : "hidden"}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* Navigation links */}
          <a
            href="#Dashboard"
            className={`block rounded-md px-3 py-2 text-base text-white ${
              location.hash === "#Dashboard" || location.pathname === "/"
                ? "bg-gray-900"
                : "hover:bg-gray-700 hover:text-white"
            }`}
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="#About"
            className={`block rounded-md px-3 py-2 text-base ${
              location.hash === "#About"
                ? "bg-gray-900 text-white"
                : "hover:bg-gray-700 hover:text-white"
            }`}
          >
            About
          </a>
          <a
            href="#Projects"
            className={`block rounded-md px-3 py-2 text-base ${
              location.hash === "#Projects"
                ? "bg-gray-900 text-white"
                : "hover:bg-gray-700 hover:text-white"
            }`}
          >
            Projects
          </a>
          <a
            href="#Certifications"
            className={`block rounded-md px-3 py-2 text-base ${
              location.hash === "#Certifications"
                ? "bg-gray-900 text-white"
                : "hover:bg-gray-700 hover:text-white"
            }`}
          >
            Certifications
          </a>
          <a
            href="#Achievements"
            className={`block rounded-md px-3 py-2 text-base ${
              location.hash === "#Achievements"
                ? "bg-gray-900 text-white"
                : "hover:bg-gray-700 hover:text-white"
            }`}
          >
            Achievements
          </a>
          <a
            href="mailto:rbharadwaj022@gmail.com"
            className="block rounded-md px-3 py-2 text-base text-white hover:bg-gray-700 hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
