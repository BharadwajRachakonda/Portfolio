import "./App.css";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import BgAnimation from "./components/BgAnimation";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Projects from "./components/Projects";
import AchievementsAndContact from "./components/AchivementsandContact";
import { useState, useEffect } from "react";
import SkillState from "./context/skills/skillState";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        setMode(event.matches ? "dark" : "light");
      });
    return () =>
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", (event) => {
          setMode(event.matches ? "dark" : "light");
        });
  }, []);
  /* In Development or Not */
  const inDevelopment = /*true;*/ false;

  // useEffect(() => {

  // }, [mode]);

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
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    toast.dismiss();
    toast.success(`Moving to ${newMode} Mode`, {
      style: {
        marginTop: "40px",
        background: newMode === "dark" ? "#333" : "#fff",
        color: newMode === "light" ? "#333" : "#fff",
      },
    });
  };

  return (
    <div
      className={`${
        mode === "dark"
          ? "selection:bg-[#7a5eec] selection:text-white"
          : "selection:bg-sky-900 selection:text-white"
      }`}
    >
      <meta
        name="theme-color"
        content={mode === "dark" ? "#14255c" : "#e1e8fd"}
      />
      <div>
        <Toaster />

        <div
          className={`${
            mode === "light"
              ? "text-black font-normal"
              : "text-white font-light"
          } overflow-x-hidden overflow-y-visible tracking-wider`}
        >
          <Navbar />
          <button
            className="w-12 h-12 rounded-full bg-white opacity-75 flex items-center transition duration-300 focus:outline-none shadow top-20 right-5 md:right-20 z-50 fixed"
            onClick={handleClick}
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
          <SkillState>
            <CustomCursor clr={mode} />
            <BgAnimation clr={mode} />
            {inDevelopment && (
              <div className="absolute top-16 w-full h-5 bg-yellow-300 opacity-50 text-black text-center">
                Under Development
              </div>
            )}
            <Dashboard clr={mode} />
            <About clr={mode} />
            <Projects clr={mode} />
            <AchievementsAndContact clr={mode} />
          </SkillState>
        </div>
      </div>
    </div>
  );
}
