import { useState } from 'react';
import PropTypes from "prop-types";
import { Link, useLocation } from 'react-router-dom';
import Button from '../shared/Button'; 
import './Navbar.css'; 
import Menu from "../../assets/Menu.png"; // Menu icon
import Close from "../../assets/Close.png"; // Close icon

const Navbar = ({ logoText, logoImage, links, buttonProps }) => {
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling menu
  const location = useLocation();
  const isFixed = location.pathname === "/"; // Change "/" to the path where you want the navbar to overlay

  // Function to toggle menu visibility
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${isFixed ? 'overlay-navbar' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          {logoImage && <img src={logoImage} alt="Logo" className="logo-image" />} {/* Logo Image */}
          <Link to="/" className="logo-link">{logoText}</Link>
        </div>
        {/* Show Menu or Close icon based on menu state */}
        <div className="menu-icon" onClick={handleMenuToggle}>
          <img src={menuOpen ? Close : Menu} alt={menuOpen ? "Close" : "Menu"} className="menu-image" />
        </div>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {links.map((link, index) => (
            <li key={index} className="nav-item">
              <Link to={link.path} className="nav-link" onClick={handleMenuToggle}>
                <img src={link.icon} alt={`${link.label} Icon`} className="nav-icon" />
                {link.label}
              </Link>
            </li>
          ))}
          <li className="nav-item button-item">
            <Link to="/signin" onClick={handleMenuToggle}>
              <Button {...buttonProps} btnClass="nav-button" /> {/* Pass btnClass */}
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
    icon: PropTypes.string.isRequired, // Update prop type for icon
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
