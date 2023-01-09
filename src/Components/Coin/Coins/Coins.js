import React  from "react";
import BtnView from "./BuyBtn";
import NameSection from "./NameSection";
import PriceSection from "./PriceSection";
import "./Coins.css";




const Coins = (props ) => {
  return (
    <div className="coins">
      <NameSection alt={props.alt} src={props.src} name={props.name} abbr={props.abbr}/>
      <PriceSection price={props.price} change={props.change} cap={props.cap} className={props.className}/>
      <BtnView />
    </div>
  );
};

export default Coins;
