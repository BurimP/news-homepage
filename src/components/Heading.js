import React, { useState, useEffect } from "react";
import Icon from "../assets/images/icon-menu.svg";
import BigMenu from "./BigMenu";

const Heading = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleToggleClose = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      console.log("Window width:", window.innerWidth);
      setIsMobile(window.innerWidth <= 376);
    };

    // Check on initial component mount
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="heading">
      <h1 className="w">W.</h1>

      {isMobile ? (
        <div className="dropdown">
          <img alt="" src={Icon} onClick={handleToggleDropdown} />

          {isDropdownOpen && <BigMenu onClick={handleToggleClose} />}
        </div>
      ) : (
        <div className="header-tags">
          <h3 className="home">Home</h3>
          <h3 className="new">New</h3>
          <h3 className="popular">Popular</h3>
          <h3 className="trending">Trending</h3>
          <h3 className="categories">Categories</h3>
        </div>
      )}
    </div>
  );
};

export default Heading;
