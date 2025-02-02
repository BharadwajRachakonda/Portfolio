import React from "react";
import self from "./self.png";

function Dashboard(props) {
  return (
    <div id="Dashboard" className="h-screen flex justify-center items-center">
      <br />
      <br />
      <br />
      {/* The Whole Main Page starts Here */}
      {/* Text Goes Here */}
      <div className="flex flex-col gap-y-8 justify-center items-center z-10">
        <div className="myimageParent">
          <img
            src={self}
            alt="My Image"
            className={
              `delay-150 h-0 md:visible md:h-36 md:w-36 cursor-pointer myimage hover:scale-110 ease-in-out transition md:border-2` +
              (props.clr === "dark" ? `border-white` : `border-transparent`)
            }
            style={{
              boxShadow:
                props.clr === "dark"
                  ? `rgba(255, 255, 255, 0.25) 0px 54px 55px, rgba(255, 255, 255, 0.12) 0px -12px 30px, rgba(255, 255, 255, 0.12) 0px 4px 6px, rgba(255, 255, 255, 0.17) 0px 12px 13px, rgba(255, 255, 255, 0.09) 0px -3px 5px`
                  : `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px
              `,
            }}
          />
        </div>
        <h1
          className={
            `relative text-5xl max-[768px]:text-3xl bg-clip-text text-transparent bg-gradient-to-r font-serif ` +
            (props.clr === "dark"
              ? `from-white to-gray-400`
              : `from-slate-900 to-indigo-600`) +
            // Applying normal font on mobile
            " max-[768px]:font-normal"
          }
          style={{
            fontFamily:
              window.innerWidth > 768
                ? "'Cinzel', serif"
                : "'Roboto', sans-serif", // Normal font for mobile, Cinzel for others
          }}
        >
          <hr
            className={
              `hidden md:block w-full border-t-2 border-dashed animate-line ` +
              (props.clr == `light` ? `border-gray-600` : `border-gray-400`)
            }
          />
          <span
            className={
              `relative inline-block ` +
              (props.clr === "dark" ? `text-white` : `text-slate-900`)
            }
          >
            Bharadwaj
            {window.innerWidth <= 337 && (
              <svg
                className="absolute left-0 bottom-[-10px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 20"
                width="100%"
                height="20"
                preserveAspectRatio="none"
              >
                <path
                  d="M10 10 Q 100 30 190 10"
                  fill="transparent"
                  stroke="red"
                  strokeWidth="3"
                />
              </svg>
            )}
          </span>{" "}
          {window.innerWidth >= 337 && <>Rachakonda</>}
          <hr
            className={
              `hidden md:block w-full border-t-2 border-dashed animate-line-back ` +
              (props.clr == `light` ? `border-gray-600` : `border-gray-400`)
            }
          />
        </h1>

        {window.innerWidth > 760 && (
          <div className="flex gap-10 justify-center items-center">
            <a
              href="https://BharadwajRachakonda.github.io/Portfolio/Resume.pdf"
              target="_blank"
            >
              <p className="transition-all rounded-md duration-150 ease-in p-2 md:w-auto w-full flex justify-center items-center gap-2 bg-neutral-500 hover:scale-105 hover:tracking-widest group text-white">
                Resume
              </p>
            </a>
            <a
              href="https://drive.google.com/drive/folders/18TjnxUndk-zkWh3GVeAZL69oRu-cRPwC?usp=sharing"
              target="_blank"
            >
              <p className="transition-all rounded-md duration-150 ease-in p-2 md:w-auto w-full flex justify-center items-center gap-2 bg-neutral-500 hover:scale-105 hover:tracking-widest group text-white">
                Certificates
              </p>
            </a>
          </div>
        )}
        <p className="text-justify md:w-[50vw] mx-5 md:m-0">
          I am Bharadwaj Rachakonda, a B.Tech student specializing in Artificial
          Intelligence and Machine Learning at Velagapudi Ramakrishna Siddhartha
          Engineering College. With a passion for innovation, I combine
          technical skills in programming, full-stack development, and
          user-centric design to create impactful solutions. I thrive on
          problem-solving, competitive programming, and continuous learning to
          shape a meaningful contribution to the tech world. Let’s build
          something amazing together!
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
