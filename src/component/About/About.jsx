import PropTypes from "prop-types"
import AboutImg from '../../assets/AboutImg.png'; // Import the image
import Member1 from '../../assets/Member1.png';
import Member2 from '../../assets/Member2.png';
import Member3 from '../../assets/Member3.png';
import Member4 from '../../assets/Member4.png';
import Easy from '../../assets/Easy.png';
import HeartShakeIcon from '../../assets/HeartShakeIcon.png';
import WorldIcon from '../../assets/WorldIcon.png';
import SellIcon from '../../assets/SellIcon.png';
import Shield from '../../assets/Shield.png';

import './About.css';
import TestimonialCard from "../shared/TestimonialCard";
import Button from "../shared/Button";

const InfoCard = ({
  iconSrc,
  iconHeight = '40px', // Reduce the height of the icon
  iconWidth = '40px',   // Reduce the width of the icon
  cardHeight = '120px',
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
        borderRadius: '8px',
        border: '1px solid DarkOrange',
        margin: '10px',
      }}
    >
      <img
        src={iconSrc}
        alt="Icon"
        className="info-card-icon"
        style={{
          height: iconHeight,
          width: iconWidth,
          marginBottom: '-15px', // Add margin to the bottom of the icon
        }}
      />
      <p className="info-card-text" style={{ marginBottom: '5px' }}>{text}</p>
      <p className="info-card-description" style={{ color: 'orange' }}>{description}</p>
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

const About = () => {
  return (
    <div>
      {/* Main About section */}
      <div className="about-container">
        <img src={AboutImg} alt="About Us" className="about-background" />
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Founded in 2016, Homecq is a real estate technology company with a mission
            to empower people to move freely. We're re-imagining the way people buy, sell, and rent homes, 
            with a focus on design, quality, and community.
          </p>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="team-container">
        <h2 className="team-header">Meet Our Team</h2>
        <div className="team-grid">
          {[
            { name: 'Matt Bobby', title: 'CEO and Founder', img: Member1 },
            { name: 'Sarah Parker', title: 'Chief Operating Officer', img: Member2 },
            { name: 'John Doe', title: 'Head of Marketing', img: Member3 },
            { name: 'Emily Stone', title: 'Lead Developer', img: Member4 },
          ].map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.img} alt={member.name} className="team-img" />
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-title">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section with Info Cards */}
      <div className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="info-cards-grid">
          {[
            {
              iconSrc: Easy,
              text: 'Easy to Use',
              description: 'Our platform is user-friendly and intuitive.',
            },
            {
              iconSrc: HeartShakeIcon,
              text: 'Trustworthy',
              description: 'Thousands of satisfied clients have trusted us.',
            },
            {
              iconSrc: WorldIcon,
              text: 'Global Reach',
              description: 'We operate worldwide with a large market presence.',
            },
            {
              iconSrc: SellIcon,
              text: 'Sell Faster',
              description: 'Our platform helps you sell your home faster.',
            },
            {
              iconSrc: Shield,
              text: 'Safe and Secure',
              description: 'We ensure all transactions are secure and reliable.',
            },
          ].map((card, index) => (
            <InfoCard
              key={index}
              iconSrc={card.iconSrc}
              text={card.text}
              description={card.description}
              cardHeight="140px"
              cardWidth="220px"
            />
          ))}
        </div>
      </div>

       {/* Testimonials Section */}
       <div className="container">
        <div className="testimonials">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-grid">
          
            <TestimonialCard 
              name="Michael Lee" 
              date="July 22, 2024"
              rating={4}
              reviewText="Exceptional knowledge and dedication. Our agent went above and beyond to find us the perfect home. Thank you!"
              onLike={() => handleLike(2)}
              onDislike={() => handleDislike(2)}
            />
            <TestimonialCard 
              name="Sarah Brown" 
              date="June 10, 2024"
              rating={5}
              reviewText="Professional and personable. They made our first home buying experience wonderful. We couldn’t be happier!"
              onLike={() => handleLike(3)}
              onDislike={() => handleDislike(3)}
            />
            <TestimonialCard 
              name="David Wilson" 
              date="May 30, 2024"
              rating={5}
              reviewText="Fantastic service from start to finish. Our agent’s expertise was invaluable in finding our dream home."
              onLike={() => handleLike(4)}
              onDislike={() => handleDislike(4)}
            />
          </div>
          <Button 
            ClassName="read-more-btn"
            onClick={() => window.location.href = '/reviews'}
            text="Read More Reviews"
            bgColor="rgb(220, 101, 41)"
            txColor="#fff"
            btnBorder="none"
            borderRadius="5px"
            padding="8px 16px"
            btnClass={"nav-button"}
            fontSize="14px"
            cursor="pointer"
            transition="background-color 0.3s ease"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
