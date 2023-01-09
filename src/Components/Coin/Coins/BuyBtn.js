import BtnViewSrc from '../../../Assets/Images/eye.png';
import "./BuyBtn.css"

const BtnView = () => {
    return (
        <div className="buy__section">
        <button className="buy">Buy</button>
        <img alt="view" src={BtnViewSrc} className="view" />
      </div>
    );
} ; 

export default BtnView