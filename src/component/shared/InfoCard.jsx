
import PropTypes from 'prop-types';
import './InfoCard.css'; // External CSS file for styling

const InfoCard = ({
    iconSrc,
    iconHeight = '40px', // Reduce the height of the icon
    iconWidth = '40px',   // Reduce the width of the icon
    cardHeight = '100px',
    cardWidth = '220px',
    text,
    description,
  }) => {
    return (
      <div
        className="info-card"
        style={{
          height: cardHeight,
          width: cardWidth,
          padding: '10px', // Add padding inside the card
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start', // Align content to the left
        }}
      >
        <img
          src={iconSrc}
          alt="Icon"
          className="info-card-icon"
          style={{
            height: iconHeight,
            width: iconWidth,
            marginBottom: '10px', // Add margin to the bottom of the icon
          }}
        />
        <p className="info-card-text" style={{ marginBottom: '5px' }}>{text}</p>
        <p className="info-card-description">{description}</p>
      </div>
    );
  };

InfoCard.propTypes = {
  cardHeight: PropTypes.string,
  cardWidth: PropTypes.string,
  description: PropTypes.any,
  iconHeight: PropTypes.string,
  iconSrc: PropTypes.any,
  iconWidth: PropTypes.string,
  text: PropTypes.any
}
  

export default InfoCard;
