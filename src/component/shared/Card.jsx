import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ title, description, image, price, name, address, imageHeight = '185px' }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/detail', {
      state: { title, description, image, price, name, address }
    });
  };

  return (
    <div className="card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      {image && <img src={image} alt={title} className="card-image" style={{ height: imageHeight }} />}
      <div className="card-content">
        {name && <p className="card-name">{name}</p>}
        {price && <p className="card-price">₦{price}</p>}
        {title && <h6 className="card-title">{title}</h6>}
        {/* Description is omitted on the home page */}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
  address: PropTypes.string, // This makes the address prop optional
  imageHeight: PropTypes.string,
};

export default Card;
