import React from "react";
import { Link } from "react-router-dom";
import "../styles/Cards.css";

function CardItem(props) {
  return (
    <>
      <li className="cardItem">
        <Link className="cardItemLink" to={props.path}>
          <figure className="cardItemPicWrap" data-category={props.label}>
            <img src={props.src} alt="Food" className="cardItemImg" />
          </figure>
          <div className="cardItemInfo">
            <h5 className="cardItemText">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
