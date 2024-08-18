import PropTypes from 'prop-types';
import './Card.css'; // Import the CSS file for styling

const Card = ({ title, description, image, price, children, imageHeight, name }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" style={{ height: imageHeight }} />}
      <div className="card-content">
        {name && <p className="card-name">{name}</p>}
        {price && <p className="card-price">₦{price}</p>}
        {title && <h6 className="card-title">{title}</h6>}
        {description && <p className="card-description">{description}</p>}
        {children && <div className="card-extra">{children}</div>}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  children: PropTypes.node,
  imageHeight: PropTypes.string,
  name: PropTypes.string, 
};

Card.defaultProps = {
  title: '',
  description: '',
  image: '',
  price: null,
  children: null,
  imageHeight: '185px',
  name: '', 
};

export default Card;
