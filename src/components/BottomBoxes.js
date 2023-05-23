import React from "react";

const BottomBoxes = (props) => {
  return (
    <div className={props.class}>
      <img alt="" src={props.imgSrc} className="pc-img"></img>
      <div className="fb-content">
        <p className="fb-number">{props.number}</p>
        <p className="fb-title">{props.title}</p>
        <p className={props.textClass}>{props.text}</p>
      </div>
    </div>
  );
};

export default BottomBoxes;
