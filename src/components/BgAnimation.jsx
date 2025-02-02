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
      {props.clr == "dark" ? (
        <div class="fixed top-0 left-0 inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      ) : (
        <div class="fixed top-0 left-0 inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div class="fixed bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
        </div>
      )}
    </>
  );
}

export default BgAnimation;
