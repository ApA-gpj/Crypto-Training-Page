import arrowDown from "../../../../Assets/Images/Vector.png";
import arrowLeft from "../../../../Assets/Images/arrowleft.png";
import arrowRight from "../../../../Assets/Images/arrowRight.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left"></div>
      <div className="right">
        <div className="right__text">
          <div className="static__text">
            <span className="text">item per page</span>
          </div>
          <div className="pages">
            <span className="text">10</span>
            <img src={arrowDown} alt="arrow down" className="size arrow" />
          </div>
        </div>
        <div className="right__page">
          <div className="numbers">
            <span className="text">1-10</span>
            <span className="text">of</span>
            <span className="text">413</span>
          </div>
          <div className="arrows">
            <img src={arrowLeft} alt="arrow left" className="arrow"/>
            <img src={arrowRight} alt="arrow  right" className="arrow"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
