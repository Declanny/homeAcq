
import './Home.css'; // Import CSS for styling

// Import image assets
import Homeacq1 from '../../../public/assets/Homeacq1.png'; 
import Homeacq2 from '../../../public/assets/Homeacq2.png';
import Homeacq3 from '../../../public/assets/Homeacq3.png';
import Homeacq4 from '../../../public/assets/Homeacq4.png';
import Agent4 from '../../../public/assets/Agent4.png';
import Agent3 from '../../../public/assets/Agent3.png';
import Agent2 from '../../../public/assets/Agent2.png';
import Agent1 from '../../../public/assets/Agent1.png';
import img1 from '../../../public/assets/img1.png';  // Ensure correct relative path

// Import shared components
import Button from '../shared/Button';
import Card from '../shared/Card';
import TestimonialCard from '../shared/TestimonialCard';
import Filter from '../shared/Filter'; // Assuming Filter component is used in the hero section

const Home = () => {
  const handleLike = (id) => {
    // Logic for liking a testimonial
    console.log(`Liked testimonial with id: ${id}`);
  };

  const handleDislike = (id) => {
    // Logic for disliking a testimonial
    console.log(`Disliked testimonial with id: ${id}`);
  };

  return (
    <div>
      {/* New Hero Section */}
      <div className="hero-section">
        <img 
          src={img1} 
          alt="Home Image" 
          className="hero-image" 
          loading="lazy"  // Lazy load image
        />
        <div className="hero-content">
          <h1 className="hero-title">Find Your Dream Property</h1>
          <p className="hero-subtitle">Buy, Rent, or Lease properties with ease</p>
          <Filter />
        </div>
      </div>

      {/* Feature Listings Section */}
      <div className="container">
        <div className="Featurelistings">
          <h2>Feature Listings</h2>
          <div className="card-container">
            <Card 
              price={5000000} 
              title="Beautiful Beach House"
              image={Homeacq1}
              imageHeight="185px"
              address="123 Ocean Drive, Miami, FL"
            />
            <Card 
              price={5000000}
              title="Cozy Mountain Cabin"
              image={Homeacq2}
              imageHeight="185px"
              address="456 Mountain Road, Denver, CO"
            />
            <Card 
              price={5000000}
              title="Luxury City Apartment"
              image={Homeacq3}
              imageHeight="185px"
              address="789 Park Ave, New York, NY"
            />
            <Card 
              price={5000000}
              title="Suburban Family Home"
              image={Homeacq4}
              imageHeight="185px"
              address="101 Maple St, San Francisco, CA"
            />
          </div>
        </div>
      </div>

      {/* Agents Section */}
      <div className="container">
        <div className="Featurelistings">
          <h2>Meet Our Agents</h2>
          <div className="card-container">
            <Card 
              title="Real Estate Agent" 
              name="John Smith"
              image={Agent4}
              imageHeight="250px"
            />
            <Card 
              title="Real Estate Agent" 
              name="Jane Doe"
              image={Agent3}
              imageHeight="250px"
            />
            <Card 
              title="Real Estate Agent" 
              name="Mike Johnson"
              image={Agent2}
              imageHeight="250px"
            />
            <Card 
              title="Real Estate Agent" 
              name="Sara Williams"
              image={Agent1}
              imageHeight="250px"
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container">
        <div className="testimonials">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-grid">
            <TestimonialCard 
              name="Emily Johnson" 
              date="August 15, 2024"
              rating={5}
              reviewText="The team provided outstanding service, making the entire home buying process seamless and stress-free. Highly recommend!"
              onLike={() => handleLike(1)}
              onDislike={() => handleDislike(1)}
            />
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
            btnClass="read-more-btn"
            onClick={() => window.location.href = '/reviews'}
            text="Read More Reviews"
            bgColor="rgb(220, 101, 41)"
            txColor="#fff"
            btnBorder="none"
            borderRadius="5px"
            padding="8px 16px"
            fontSize="14px"
            cursor="pointer"
            transition="background-color 0.3s ease"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
