import React, { useState } from "react";
import { Link } from "react-router-dom";
import Special1 from "../assets/special1.png";
import Special2 from "../assets/special2.png";
import Special3 from "../assets/special3.png";
import InitialCentralImage from "../assets/fonio.jpeg";
import "../styles/Home.css";

function Home() {
  const [centralImage, setCentralImage] = useState(InitialCentralImage);

  const handleCardClick = (newImage) => {
    setCentralImage(newImage);
  };

  return (
    <div className="home">
      <div className="headerContainer">
        <div className="headerContent">
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
      <div className="centralImageContainer">
        <img src={centralImage} alt="Central" className="centralImage" />
      </div>
      <div className="foodCardContainer">
        <h1>Nos Specialités</h1>
        <div className="foodCard1" onClick={() => handleCardClick(Special1)}>
          <img src={Special1} alt="Special1" />
          <p>Special 1</p>
        </div>
        <div className="foodCard2" onClick={() => handleCardClick(Special2)}>
          <img src={Special2} alt="Special2" />
          <p>Special 2</p>
        </div>
        <div className="foodCard3" onClick={() => handleCardClick(Special3)}>
          <img src={Special3} alt="Special3" />
          <p>Special 3</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
