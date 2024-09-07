// src/components/Agent.jsx
import PropTypes from 'prop-types';
import Button from '../shared/Button'; // Import your existing Button component
import './Agent.css'; // Import the external CSS file

const Agent = ({ name, distance, buttonText, imageSrc, imageHeight, imageWidth }) => {
  return (
    <div className="agent-container">
      <img
        src={imageSrc}
        alt={name}
        className="agent-image"
        style={{ height: imageHeight, width: imageWidth }}
      />
      <div className="agent-details-container">
        <div className="agent-name">{name}</div>
        <div className="agent-distance">{distance}</div>
        <div className="agent-button-container">
          {buttonText && (
            <Button
              text={buttonText}
              bgColor="#f4a261" // Use the desired background color
              txColor="#fff" // Use the desired text color
              width="auto" // Adjust width if needed
              btnBorder="none" // You can customize the border if needed
            />
          )}
        </div>
      </div>
    </div>
  );
};

Agent.propTypes = {
  name: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  imageHeight: PropTypes.string,
  imageWidth: PropTypes.string,
};

export default Agent;
