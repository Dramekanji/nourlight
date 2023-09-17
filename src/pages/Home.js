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
    </div>
  );
}

export default Home;
