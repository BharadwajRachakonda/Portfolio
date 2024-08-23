import "./App.css";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import BgAnimation from "./components/BgAnimation";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Projects from "./components/Projects";
import AchievementsAndContact from "./components/AchivementsandContact";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    alert(`Moving to ${mode} Mode`);
  }, [mode]);

  const darkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );

  const lightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );

  const handleClick = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  return (
    <div className="">
      <div
        className={
          (mode === "light"
            ? `text-black font-normal`
            : `text-white font-light`) +
          ` overflow-x-hidden overflow-y-visible tracking-wider`
        }
      >
        <Navbar />
        <button
          className="w-12 h-12 rounded-full bg-white opacity-75 flex items-center transition duration-300 focus:outline-none shadow top-20 right-5 md:right-20 z-50 fixed"
          onClick={() => {
            handleClick();
          }}
        >
          <div
            id="switch-toggle"
            className={`w-8 h-8 relative rounded-full transition duration-500 transform ${
              mode === "dark"
                ? "bg-gray-700 opacity-75 translate-x-full"
                : "bg-yellow-500 opacity-75 -translate-x-2"
            } p-1 text-white`}
          >
            {mode === "dark" ? darkIcon : lightIcon}
          </div>
        </button>
        <CustomCursor clr={mode} />
        <BgAnimation clr={mode} />
        <Dashboard clr={mode} />
        <About clr={mode} />
        <Projects clr={mode} />
        <br />
        <br />
        <AchievementsAndContact clr={mode} />
      </div>
    </div>
  );
}
