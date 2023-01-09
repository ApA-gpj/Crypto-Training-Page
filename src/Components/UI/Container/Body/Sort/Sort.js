import "./Sort.css"
import Column from "../../../../../Assets/Images/4linemenu.png"
import Tiles from "../../../../../Assets/Images/sort.png"


const Sort = () => {
return (
    <div className="sort">
        <div className="view">
            <img src={Column} alt="column" className="column"/>
            <img src={Tiles} alt="tiles" className="tiles"/>
        </div>
        <div className="time">
            <span className="times">1H</span>
            <span className="times active">24H</span>
            <span className="times">1W</span>
            <span className="times">1Y</span>
            <span className="times">ALL</span>
        </div>
    </div>
);
};

export default Sort;