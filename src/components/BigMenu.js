import React from "react";

const BigMenu = (props) => {
  const handleClick = () => {
    console.log("click");
    return props.onClick();
  };
  return (
    <div className="big-menu">
      <div className="big-X">
        <h1 className="x" onClick={handleClick}>
          X
        </h1>
      </div>
      <div className="big-items">
        <div className="big-items-container">
          <h3 className="big-item">Home</h3>
          <h3 className="big-item">New</h3>
          <h3 className="big-item">Popular</h3>
          <h3 className="big-item">Trending</h3>
          <h3 className="big-item">Categories</h3>
        </div>
      </div>
    </div>
  );
};

export default BigMenu;
