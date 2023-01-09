import "./Titles.css";
import img from "../../../../../Assets/Images/Vector.png";

const Titles = () => {
  return (
    <div className="titles">
      <div className="names">
        <p className="head">Name</p>
      </div>
      <div className="heads">
        <span className="head">Price</span>
        <span className="head">Change</span>
        <span className="head">Cap</span>
        <img src={img} alt="sort by" className="img" />
      </div>
    </div>
  );
};

export default Titles;
