import React from "react";
import BigImage from "../assets/images/image-web-3-desktop.jpg";

const MiddleContent = () => {
  return (
    <div className="middle-content">
      <div className="left-content">
        <div className="left-top-content">
          <img alt="" src={BigImage} className="main-img" />
        </div>
        <div className="left-bottom-content">
          <p className="lbc-paragraph">
            The Bright <br></br>Future of<br></br> Web 3.0?
          </p>
          <div className="lbc-div-content">
            <p className="lbc-small-paragraph">
              We dive into the next evolution of the web that<br></br> claims to
              put the power of the platforms back<br></br> into the hands of the
              people. But is it really<br></br>fulfilling its promise?
            </p>
            <button className="btn">READ MORE</button>
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="shrink">
          <h1 className="rc-new">New</h1>
          <p className="rc-firstP">Hydrogen VS Electric Cars</p>
          <p className="rc-secondP">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
          <hr className="straight-line"></hr>
          <p className="rc-thirdP">The Downsides of AI Artistry</p>
          <p className="rc-fourthP">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
          <hr className="straight-line"></hr>
          <p className="rc-fifthP">Is VC Funding Drying Up?</p>
          <p className="rc-sixthP">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiddleContent;
