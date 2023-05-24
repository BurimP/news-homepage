import React, { useState, useEffect } from "react";

const Heading = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      console.log("Window width:", window.innerWidth);
      setIsMobile(window.innerWidth <= 375);
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
          <button className="dropdown-button" onClick={handleToggleDropdown}>
            Menu
          </button>

          {isDropdownOpen && (
            <div className="dropdown-menu">
              <h3 className="dropdown-item">Home</h3>
              <h3 className="dropdown-item">New</h3>
              <h3 className="dropdown-item">Popular</h3>
              <h3 className="dropdown-item">Trending</h3>
              <h3 className="dropdown-item">Categories</h3>
            </div>
          )}
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

// import React from "react";

// const Heading = () => {
//   return (
//     <div className="heading">
//       <h1 className="w">W.</h1>
//       <div className="header-tags">
//         <h3 className="home">Home</h3>
//         <h3 className="new">New</h3>
//         <h3 className="popular">Popular</h3>
//         <h3 className="trending">Trending</h3>
//         <h3 className="categories">Categories</h3>
//       </div>
//     </div>
//   );
// };

// export default Heading;
