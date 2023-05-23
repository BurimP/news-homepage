import React from "react";
import BottomBoxes from "./BottomBoxes";
import PCImage from "../assets/images/image-retro-pcs.jpg";
import LaptopImg from "../assets/images/image-top-laptops.jpg";
import GameImg from "../assets/images/image-gaming-growth.jpg";

const BottomContent = () => {
  return (
    <div className="bottom-container">
      <BottomBoxes
        imgSrc={PCImage}
        number="01"
        title="Reviving Retro PCs"
        text="What happens when old PCs are given modern upgrades?"
        class="first-box"
        textClass="firstText"
      />
      <BottomBoxes
        imgSrc={LaptopImg}
        number="02"
        title="Top 10 Laptops of 2022"
        text="Our best picks for various needs and budgets."
        class="second-box"
        textClass="secondText"
      />
      <BottomBoxes
        imgSrc={GameImg}
        number="03"
        title="The Growth of Gaming"
        text="How the pandemic has sparked fresh opportunities"
        class="third-box"
      />
    </div>
  );
};

export default BottomContent;
