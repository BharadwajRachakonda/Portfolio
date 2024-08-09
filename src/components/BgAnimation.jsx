import React from 'react';
function BgAnimation(props) {
  return (
    <>
      {/* Background change */}
      <div className="main__bg" style={
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
      }></div>
    </>
  );
}

export default BgAnimation;
