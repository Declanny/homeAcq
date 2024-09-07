
import PropTypes from "prop-types"
import './TestimonialCard.css'; // Create this CSS file for styling

const TestimonialCard = ({ name, date, rating, reviewText, onLike, onDislike }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <h3>{name}</h3>
        <span className="testimonial-date">{date}</span>
      </div>
      <div className="testimonial-rating">
        {[...Array(5)].map((_, index) => (
          <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>★</span>
        ))}
      </div>
      <p className="testimonial-text">{reviewText}</p>
      <div className="testimonial-actions">
        <button className="like-btn" onClick={onLike}>👍</button>
        <button className="dislike-btn" onClick={onDislike}>👎</button>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  date: PropTypes.any,
  name: PropTypes.any,
  onDislike: PropTypes.any,
  onLike: PropTypes.any,
  rating: PropTypes.any,
  reviewText: PropTypes.any
}



export default TestimonialCard;
