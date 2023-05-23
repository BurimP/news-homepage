import React from "react";
import Heading from "./Heading";
import MiddleContent from "./MiddleContent";
import ForTesting from "./ForTesting";
import BottomContent from "./BottomContent";

const Container = () => {
  return (
    <div className="container">
      <Heading />
      <MiddleContent />
      <BottomContent />
      <ForTesting />
    </div>
  );
};

export default Container;
