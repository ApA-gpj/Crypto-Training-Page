import React from "react";
import "./Coin.css";
import Coins from "./Coins/Coins";

import BTCimage from "../../Assets/Images/BTC.png";
import ETHimage from "../../Assets/Images/ETH.png";
import LTCimage from "../../Assets/Images/LTC.png";
import LINKimage from "../../Assets/Images/LINK.png";
import BCHimage from "../../Assets/Images/BCH.png";
import XLMimage from "../../Assets/Images/XLM.png";
import DOGEimage from "../../Assets/Images/DOGE.png";
import UNIimage from "../../Assets/Images/UNI.png";
import XTZimage from "../../Assets/Images/XTZ.png";
import GRTimage from "../../Assets/Images/GRT.png";

const Coin = () => {
  return (
    <div className="coin">
      <Coins
        name="Bitcoin"
        abbr="BTC"
        alt="coin icon"
        src={BTCimage}
        price="$57,660.35"
        change="+2.84%"
        cap="$1.2T"
        className="change"
      />
      <Coins
        name="Ethereum"
        abbr="ETH"
        alt="coin icon"
        src={ETHimage}
        price="$2,692.98"
        change="+1.26%"
        cap="$420.1B"
        className="change"
      />
      <Coins
        name="Litecoin"
        abbr="LTC"
        alt="coin icon"
        src={LTCimage}
        price="$357.82"
        change="+3.76%"
        cap="$37.2B"
        className="change"
      />
      <Coins
        name="Chainlink"
        abbr="LINK"
        alt="coin icon"
        src={LINKimage}
        price="$34.14"
        change="-4.21%"
        cap="$23.4B"
        className="red"
      />
      <Coins
        name="Bitcoin Cash"
        abbr="BCH"
        alt="coin icon"
        src={BCHimage}
        price="$627.65"
        change="+1.72%"
        cap="$16.3B"
        className="change"
      />
      <Coins
        name="Stellar"
        abbr="XLM"
        alt="coin icon"
        src={XLMimage}
        price="$0.51"
        change="+2.47%"
        cap="$14.2B"
        className="change"
      />
      <Coins
        name="Dogecoin"
        abbr="DOGE"
        alt="coin icon"
        src={DOGEimage}
        price="$0.1284"
        change="+4.20%"
        cap="$13.4B"
        className="change"
      />
      <Coins
        name="Uniswap"
        abbr="UNI"
        alt="coin icon"
        src={UNIimage}
        price="$24.79"
        change="-14.87%"
        cap="$9.4B"
        className="red"
      />
      <Coins
        name="Tezos"
        abbr="XTZ"
        alt="coin icon"
        src={XTZimage}
        price="$6.32"
        change="+5.77%"
        cap="$5.6B"
        className="change"
      />
      <Coins
        name="THE Graph"
        abbr="GRT"
        alt="coin icon"
        src={GRTimage}
        price="$1.76"
        change="-3.12%"
        cap="$3.2B"
        className="red"
      />
    </div>
  );
};

export default Coin;
