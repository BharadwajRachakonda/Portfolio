import "./App.css";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import BgAnimation from "./components/BgAnimation";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Projects from "./components/Projects";
import AchievementsAndContact from "./components/AchivementsandContact";
import { useState, useEffect, useRef } from "react";
import SkillState from "./context/skills/skillState";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [mode, setMode] = useState("dark");
  const [showPopup, setShowPopup] = useState(false); // Popup state
  const firstLoad = useRef(true); // Use useRef for first-load tracking
  const [isMobile, setIsMobile] = useState(false); // State for mobile detection

  /* In Development or Not */
  const inDevelopment = true;

  const handlePopup = () => {
    setShowPopup(true); // Show popup
  };

  const closePopup = () => {
    setShowPopup(false); // Close popup
  };

  // Check if the device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // 768px is commonly used for mobile breakpoint
    };

    checkIfMobile(); // Run on mount
    window.addEventListener("resize", checkIfMobile); // Listen for window resize

    return () => {
      window.removeEventListener("resize", checkIfMobile); // Clean up event listener
    };
  }, []);

  useEffect(() => {
    if (firstLoad.current) {
      // For the first load
      if (window.innerWidth > 768) {
        toast.custom(() => (
          <div
            style={{
              marginTop: "40px",
              backgroundColor: mode === "dark" ? "#333" : "#fff",
              color: mode === "light" ? "#333" : "#fff",
              padding: "1rem",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p className="inline-block">
              Welcome! Check out the Lighthouse Score:
            </p>
            <button
              onClick={handlePopup}
              style={{
                backgroundColor: "#007BFF",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                marginLeft: "1rem",
                display: "inline-block",
              }}
            >
              View Score
            </button>
          </div>
        ));
      }
      firstLoad.current = false; // Update first load to false
    } else {
      // For subsequent mode changes
      toast.success(`Moving to ${mode} Mode`, {
        style: {
          marginTop: "40px",
          background: mode === "dark" ? "#333" : "#fff",
          color: mode === "light" ? "#333" : "#fff",
        },
      });
    }
  }, [mode, isMobile]);

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
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <meta
        name="theme-color"
        content={mode === "dark" ? "#14255c" : "#e1e8fd"}
      />
      <div>
        <Toaster />
        {showPopup &&
          !isMobile && ( // Only show the popup if it's not a mobile device
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: mode === "dark" ? "#333" : "#fff", // Dynamic background color
                color: mode === "dark" ? "#fff" : "#333", // Dynamic text color
                padding: "2rem",
                borderRadius: "8px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                zIndex: 1000,
              }}
            >
              <h3 style={{ marginBottom: "1rem" }}>Lighthouse Score</h3>
              <img
                src="./image.png"
                alt="Lighthouse Score"
                style={{ width: "100%", borderRadius: "5px" }}
              />
              <button
                onClick={closePopup}
                style={{
                  marginTop: "1rem",
                  backgroundColor: "#FF0000", // Close button background
                  color: "white", // Close button text color
                  padding: "0.5rem 1rem",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          )}

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
    </>
  );
}
