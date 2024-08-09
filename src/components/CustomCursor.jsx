import React from 'react';

function CustomCursor(props) {
  const handleMouseMove = (e) => {
    const cursor = document.querySelector(".newcursor");
    cursor.style.top = (e.pageY - 10) + "px";
    cursor.style.left = (e.pageX - 10) + "px";
  };

  const handleClick = () => {
    const cursor = document.querySelector(".newcursor");
    const cursor2 = document.querySelector(".newcursor2");
    cursor.classList.add('newcursor3');
    cursor2.classList.add('newcursor3');
    setTimeout(() => {
      cursor.classList.remove('newcursor3');
      cursor2.classList.remove('newcursor3');
    }, 500);
  };
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("click", handleClick);
  return (
    <React.Fragment>
      <div style={{
          border: `2px solid ` + ((props.clr === "dark") ? `whitesmoke` : `black`),
          boxShadow:
            (props.clr === "dark")? `rgba(255, 255, 255, 0.25) 0px 54px 55px, rgba(255, 255, 255, 0.12) 0px -12px 30px, rgba(255, 255, 255, 0.12) 0px 4px 6px, rgba(255, 255, 255, 0.17) 0px 12px 13px, rgba(255, 255, 255, 0.09) 0px -3px 5px` : `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`
        
      }} className="newcursor ">
        <div style={{
          border: `2px solid ` + ((props.clr === "dark") ? `whitesmoke` : `black`),
          boxShadow:
            (props.clr === "dark")? `rgba(255, 255, 255, 0.25) 0px 54px 55px, rgba(255, 255, 255, 0.12) 0px -12px 30px, rgba(255, 255, 255, 0.12) 0px 4px 6px, rgba(255, 255, 255, 0.17) 0px 12px 13px, rgba(255, 255, 255, 0.09) 0px -3px 5px` : `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`
        
      }} className="newcursor2 animate-ping ">
          <div style={{
          border: `2px solid ` + ((props.clr === "dark") ? `whitesmoke` : `black`),
          boxShadow:
            (props.clr === "dark")? `rgba(255, 255, 255, 0.25) 0px 54px 55px, rgba(255, 255, 255, 0.12) 0px -12px 30px, rgba(255, 255, 255, 0.12) 0px 4px 6px, rgba(255, 255, 255, 0.17) 0px 12px 13px, rgba(255, 255, 255, 0.09) 0px -3px 5px` : `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`
        
      }} className="newcursor2 animate-ping "></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CustomCursor;