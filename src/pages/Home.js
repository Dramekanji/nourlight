import React from "react";
import { Link } from "react-router-dom";
import HomeImage from "../assets/fonio.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${HomeImage})` }}>
      <div className="headerContainer">
        <h1>NourLight</h1>
        <p>
          Retrouvez de la lumière dans vos assiètes à travers nos mets
          Africains.
        </p>
        <Link to="/menu">
          <button>Commandez Ici</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
