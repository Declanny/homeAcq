
import PropTypes from 'prop-types';
import './Testimonial.css'; // Import the CSS file for styling

const Testimonial = ({ name, testimony, image, rating }) => {
  const stars = Array(rating).fill('★').join('');

  return (
    <div className="testimonial-card">
      {image && <img src={image} alt={name} className="testimonial-image" />}
      <div className="testimonial-content">
        <p className="testimonial-name">{name}</p>
        <p className="testimonial-stars">{stars}</p>
        <p className="testimonial-text">{testimony}</p>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  name: PropTypes.string.isRequired,
  testimony: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Testimonial;
