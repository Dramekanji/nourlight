import React from "react";
import { Link } from "react-router-dom";
import HomeImage from "../assets/jollof-bg.png";
import "../styles/Home.css";

function Home() {
  const backgroundImageStyle = {
    backgroundImage: `url(${HomeImage})`,
    backgroundSize: "60%", // Adjust the background size as needed (e.g., 60%)
    backgroundPosition: "center", // Center the background image
  };

  return (
    <div className="home" style={backgroundImageStyle}>
      <div className="headerContainer">
        <h1>NourLight</h1>
        <p>
          Retrouvez de la lumière dans vos assiettes à travers nos mets
          Africains.
        </p>
        <Link to="/menu">
          <button>Commandez Ici</button>
        </Link>
      </div>
      <div className="specialText"></div>
      <div className="foodCardContainer">
        <h1>Nos Specialités</h1>
        <div className="foodCard1"></div>
        <div className="foodCard2"></div>
        <div className="foodCard3"></div>
      </div>
    </div>
  );
}

export default Home;
