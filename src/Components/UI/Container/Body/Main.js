import React from "react";
import "./Main.css"
import Coin from "../../../Coin/Coin"
import Titles from "./Titles/Titles";
import Sort from "./Sort/Sort";
import Footer from "../Footer/Footer"


const Main = (props) => {
    return (
        <main className="main">
            <Sort/>
            <Titles/>
            <Coin>{props.children}</Coin>
            <Footer />
        </main>
    );
};

export default Main;