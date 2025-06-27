import React from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

const Certifications = ({ clr }) => {
  const arr = [
    {
      name: "ServiceNow Certified Application Developer – ServiceNow",
      link: "https://drive.google.com/file/d/1pr0eokF6uIxbjVfd9kzdYsu9emLcxgqB/view",
    },
    {
      name: "ServiceNow Certified System Administrator – ServiceNow",
      link: "https://drive.google.com/file/d/17i5b5YANo8x4Fj37UvFkCpMud8wFpazG/view",
    },
    {
      name: "Postman API Fundamentals Student Expert – Postman",
      link: "https://drive.google.com/file/d/1myD3WDfN62du_O-VolBw0mXOqa0MIlWl/view",
    },
    {
      name: "MongoDB Developer’s Toolkit – Geeks for Geeks & MongoDB",
      link: "https://drive.google.com/file/d/1-wFq2eGS4YR1CQikxa9mAC5KGhcBlFYj/view",
    },
    {
      name: "Development of Frontend Apps with React – IBM & edX",
      link: "https://drive.google.com/file/d/1lDqszMRCzJ_v-8FGaGU-Blg5EbjFBJge/view",
    },
    {
      name: "Foundations of R Software – NPTEL",
      link: "https://drive.google.com/file/d/1djNHpZs6f55EWymFCT1EAL3RZh1ajc27/view",
    },
    {
      name: "Programming in Modern C++ – NPTEL",
      link: "https://drive.google.com/file/d/1FsNmMqdJtrs4JGB-kBY1bjYgFF-eSy5d/view",
    },
    {
      name: "Joy of Computing Using Python – NPTEL",
      link: "https://drive.google.com/file/d/144n6z6JI3n7kS-Znd6Kci-DtVF4Q_ySD/view",
    },
  ];

  const repeatedArr = [...arr, ...arr]; // duplicate content
  const x = useMotionValue(0);
  const speedRef = React.useRef(50); // px/sec
  const isHovering = React.useRef(false);

  const containerRef = React.useRef();
  const contentRef = React.useRef();

  useAnimationFrame((_, delta) => {
    const moveBy = (speedRef.current * delta) / 1000;
    const current = x.get();

    if (!isHovering.current) {
      const contentWidth = contentRef.current?.offsetWidth || 0;
      x.set(current - moveBy <= -contentWidth / 2 ? 0 : current - moveBy);
    }
  });

  return (
    <div
      id="Certifications"
      className="flex justify-center items-center w-full overflow-hidden"
    >
      <div className="flex flex-col gap-y-14 justify-center items-center w-full px-4">
        <h1 className="text-3xl max-[768px]:text-xl">
          Certifications
          <motion.hr
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={`hidden md:block w-full border-t-2 border-dashed ${
              clr === "light" ? "border-gray-600" : "border-gray-400"
            }`}
          />
        </h1>

        <div
          ref={containerRef}
          className="w-full overflow-hidden"
          style={{
            transformStyle: "preserve-3d",
            perspective: "1200px",
            perspectiveOrigin: "left",
            transform: "rotateX(10deg) rotateY(-10deg)",
          }}
        >
          <motion.div
            className="whitespace-nowrap inline-block cursor-pointer"
            style={{
              x,
              transformStyle: "preserve-3d",
              transform: "rotateY(25deg)",
            }}
            onMouseEnter={() => {
              isHovering.current = true;
            }}
            onMouseLeave={() => {
              isHovering.current = false;
            }}
            ref={contentRef}
          >
            <hr
              className={`border-t-2 border-dashed m-1 ${
                clr === "light" ? "border-gray-600" : "border-gray-400"
              }`}
            />
            {[...repeatedArr, ...repeatedArr].map((certification, index) => (
              <a
                target="_blank"
                href={certification.link || "#"}
                key={index}
                style={{
                  display: "inline-block",
                  margin: "0 12px",
                  padding: "8px 16px",
                  borderRadius: "9999px",
                  border: "2px solid",
                  borderColor: clr === "light" ? "#4B5563" : "#9CA3AF",
                  background: clr === "light" ? "#F9FAFB" : "#1F2937",
                  color: clr === "light" ? "#111827" : "#F3F4F6",
                  transform: `scale(${1 - (index % arr.length) * 0.015})`,
                }}
              >
                {certification.name} 🔗
              </a>
            ))}
            <hr
              className={`border-t-2 border-dashed m-1 ${
                clr === "light" ? "border-gray-600" : "border-gray-400"
              }`}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
