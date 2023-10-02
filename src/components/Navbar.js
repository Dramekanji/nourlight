import React, { useState } from "react";
import NourLogo from "../assets/nour-logo.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setClick(false);
  };

  const handleClick = () => {
    // Toggle the click state to open/close the menu
    setClick(!click);
  };

  return (
    <>
      <div className="navBar">
        <div className="navBarContainer Container">
          <Link to="/" className="navBarLogo">
            <img
              src={NourLogo}
              alt="Nour Light tentative Logo"
              className="navBarIcon"
            />
          </Link>
          <div className="menuIcon" onClick={handleClick}>
            {click ? (
              <CloseIcon className="icon" onClick={closeMobileMenu} />
            ) : (
              <MenuIcon className="icon" />
            )}
          </div>
          <ul className={`navMenu ${click ? "active" : "inactive"}`}>
            <li className="navItem">
              <Link to="/" className="navLinks" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link to="/menu" className="navLinks" onClick={closeMobileMenu}>
                Menu
              </Link>
            </li>
            <li className="navItem">
              <Link to="/about" className="navLinks" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="navItem">
              <Link
                to="/contact"
                className="navLinks"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
