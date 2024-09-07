import  { useState } from 'react';
import PropTypes from "prop-types";
import { Link, useLocation } from 'react-router-dom';
import Button from '../shared/Button'; // Adjust the path as per your file structure
import './Navbar.css'; // Import the CSS file for styling
import Menu from "../../assets/Menu.png";


const Navbar = ({ logoText, logoImage, links, buttonProps }) => {
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling menu
  const location = useLocation();
  const isFixed = location.pathname === "/"; // Change "/" to the path where you want the navbar to overlay

  // Function to toggle menu visibility
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen); // Corrected the capitalization here
  };

  return (
    <nav className={`navbar ${isFixed ? 'overlay-navbar' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          {logoImage && <img src={logoImage} alt="Logo" className="logo-image" />} {/* Logo Image */}
          <Link to="/" className="logo-link">{logoText}</Link>
        </div>
        {/* Replace FaBars with your image */}
        <div className="menu-icon" onClick={handleMenuToggle}>
          <img src={Menu} alt="Menu" className="menu-image" /> {/* Image for Menu Toggle */}
        </div>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}> {/* Corrected menuOpen usage here */}
          {links.map((link, index) => (
            <li key={index} className="nav-item">
              <Link to={link.path} className="nav-link" onClick={handleMenuToggle}>{link.label}</Link>
            </li>
          ))}
          <li className="nav-item button-item">
            <Link to="/signin" onClick={handleMenuToggle}>
              <Button {...buttonProps} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logoText: PropTypes.string.isRequired,
  logoImage: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  buttonProps: PropTypes.shape({
    btnClass: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string,
    bgColor: PropTypes.string,
    txColor: PropTypes.string,
    btnBorder: PropTypes.string,
    borderRadius: PropTypes.string,
    padding: PropTypes.string,
    fontSize: PropTypes.string,
    cursor: PropTypes.string,
    transition: PropTypes.string,
  }).isRequired,
};

export default Navbar;
