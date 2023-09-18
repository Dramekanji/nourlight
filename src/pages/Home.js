import React from "react";
import { Link } from "react-router-dom";
import HomeImage from "../assets/jollof-bg.png";
import "../styles/Home.css";
import Special1 from "../assets/special1.png"; // Make sure to provide the correct file extension
import Special2 from "../assets/special2.png"; // Make sure to provide the correct file extension
import Special3 from "../assets/special3.png";

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
      <div className="foodCardContainer">
        <h1>Nos Specialités</h1>
        <div className="foodCard1">
          <img src={Special1} alt="Special1" />
        </div>
        <div className="foodCard2">
          <img src={Special2} alt="Special2" />
        </div>
        <div className="foodCard3">
          <img src={Special3} alt="Special3" />
        </div>
      </div>
    </div>
  );
}

export default Home;
