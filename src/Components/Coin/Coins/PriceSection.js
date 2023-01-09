import "./PriceSection.css";

const PriceSection = (props) => {
  return (
    <div className="price__section">
      <span className="price">{props.price}</span>
      <span className={props.className}>{props.change}</span>
      <span className="cap">{props.cap}</span>
    </div>
  );
};

export default PriceSection;
