
import { Link } from 'react-router-dom';
import './Footer.css';

// Import the images
import facebookIcon from '../../assets/facebook.png';
import xIcon from '../../assets/X.png';
import instagramIcon from '../../assets/instagram.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/about" className="footer-link">About</Link>
        <Link to="/services" className="footer-link">Services</Link>
        <Link to="/buy" className="footer-link">Listings</Link>
        <Link to="/agentfinder" className="footer-link">Agents</Link>
        <Link to="/contact" className="footer-link">Contact</Link>
      </div>
      <div className="footer-logo">
        @2024 HomeAcq Realty Company
      </div>
      <div className="footer-social">
        <a href="https://www.facebook.com/yourFacebookHandle" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src={facebookIcon} alt="Facebook" className="social-icon" />
        </a>
        <a href="https://twitter.com/yourTwitterHandle" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src={xIcon} alt="X (Twitter)" className="social-icon" />
        </a>
        <a href="https://www.instagram.com/yourInstagramHandle" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src={instagramIcon} alt="Instagram" className="social-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
