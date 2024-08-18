// src/component/Navbar/Navbar.js

import PropTypes from "prop-types";
import { Link, useLocation } from 'react-router-dom';
import Button from '../shared/Button'; // Adjust the path as per your file structure
import './Navbar.css'; // Import the CSS file for styling

const Navbar = ({ logoText, links, buttonProps }) => {
  const location = useLocation();
  const isFixed = location.pathname === "/"; // Change "/" to the path where you want the navbar to overlay

  return (
    <nav className={`navbar ${isFixed ? 'overlay-navbar' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" className="logo-link">{logoText}</Link>
        </div>
        <ul className="nav-menu">
          {links.map((link, index) => (
            <li key={index} className="nav-item">
              <Link to={link.path} className="nav-link">{link.label}</Link>
            </li>
          ))}
          <li className="nav-item button-item">
            <Button {...buttonProps} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logoText: PropTypes.string.isRequired,
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
