import React from "react";
function BgAnimation(props) {
  return (
    <>
      {/* Background change */}
      {/* <div className="main__bg" style={
        {
          backgroundImage: (props.clr === "dark")? "linear-gradient(-60deg, #495273 50%, #14255c 50%)" : "linear-gradient(-60deg, #a0b0e9 50%, #e1e8fd 50%)"
        }
      }></div>
      <div className="main__bg layer1" style={
        {
          backgroundImage: (props.clr === "dark")? "linear-gradient(-60deg, #495273 50%, #14255c 50%)" : "linear-gradient(-60deg, #a0b0e9 50%, #e1e8fd 50%)"
        }
      }></div>
      <div className="main__bg layer2" style={
        {
          backgroundImage: (props.clr === "dark")? "linear-gradient(-60deg, #495273 50%, #14255c 50%)" : "linear-gradient(-60deg, #a0b0e9 50%, #e1e8fd 50%)"
        }
      }></div> */}

      {/* Background change */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100vw"
        height="100vh"
        opacity="0.79"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 100,
          pointerEvents: "none", // Ensures the SVG doesn't block clicks or hover
        }}
      >
        <defs>
          <filter
            id="nnnoise-filter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="linearRGB"
          >
            <feTurbulence
              type="turbulence"
              baseFrequency="0.5"
              numOctaves="4"
              seed="15"
              stitchTiles="stitch"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="turbulence"
            ></feTurbulence>
            <feSpecularLighting
              surfaceScale="6"
              specularConstant="0.4"
              specularExponent="20"
              lightingColor={props.clr == "dark" ? `#e5e5e5` : `#00d0fc`} // White grain for dark mode
              in="turbulence"
              result="specularLighting"
            >
              <feDistantLight azimuth="3" elevation="36"></feDistantLight>
            </feSpecularLighting>
          </filter>
        </defs>
        <rect width="100vw" height="100vh" fill="transparent"></rect>
        <rect
          width="100vw"
          height="100vh"
          fill="transparent" // Transparent fill
          filter="url(#nnnoise-filter)"
        ></rect>
      </svg>

      {props.clr == "dark" ? (
        <div className="fixed top-0 left-0 inset-0 -z-10 h-lvh w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      ) : (
        <div className="fixed top-0 left-0 inset-0 -z-10 h-lvh w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="fixed bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
        </div>
      )}
    </>
  );
}

export default BgAnimation;
