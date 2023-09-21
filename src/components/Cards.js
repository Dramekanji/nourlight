import React from "react";
import CardItem from "./CardItem";
import "../styles/Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Decouvrez nos plats</h1>
      <div className="cardContainer">
        <div className="cardWrapper">
          <ul className="cardItem">
            <CardItem
              src={require("../assets/special1.png")}
              text="Plat Special 1"
              label="Special"
              path="/"
            />
            <CardItem
              src={require("../assets/special2.png")}
              text="Plat Special 1"
              label="Special"
              path="/"
            />
            <CardItem
              src={require("../assets/special3.png")}
              text="Plat Special 1"
              label="Special"
              path="/"
            />
          </ul>
          <ul className="cardItem">
            <CardItem
              src={require("../assets/special1.png")}
              text="Plat Special 1"
              label="Special"
              path="/"
            />
            <CardItem
              src={require("../assets/special2.png")}
              text="Plat Special 1"
              label="Special"
              path="/"
            />
            <CardItem
              src={require("../assets/special3.png")}
              text="Plat Special 1"
              label="Special"
              path="/"
            />
          </ul>
          <ul className="cardItem">
            <CardItem
              src={require("../assets/special1.png")}
              text="Plat Special 1"
              label="Special"
              path="/"
            />
            <CardItem
              src={require("../assets/special2.png")}
              text="Plat Special 1"
              label="Special"
              path="/"
            />
            <CardItem
              src={require("../assets/special3.png")}
              text="Plat Special 1"
              label="Special"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
