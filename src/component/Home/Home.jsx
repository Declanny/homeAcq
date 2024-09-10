import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Home.css';

// Import the image files
import Homeacq1 from '../../assets/Homeacq1.png'; 
import Homeacq2 from '../../assets/Homeacq2.png';
import Homeacq3 from '../../assets/Homeacq3.png';
import Homeacq4 from '../../assets/Homeacq4.png';
import Agent4 from '../../assets/Agent4.png';
import Agent3 from '../../assets/Agent3.png';
import Agent2 from '../../assets/Agent2.png';
import Agent1 from '../../assets/Agent1.png';
import img1 from '../../assets/img1.png';  // Adjusted relative path to match your folder structure
import Button from '../shared/Button';
import Card from '../shared/Card';
import TestimonialCard from '../shared/TestimonialCard';

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLike = (id) => {
    // Handle like button click
  };

  const handleDislike = (id) => {
    // Handle dislike button click
  };

  const handleExploreClick = () => {
    navigate('/buy'); // Navigate to the Buy page
  };

  return (
    <div>
      {/* Use the imported image */}
      <img src={img1} alt="Home Image" className="home-image" />
      <div className='Home-content'>
        <h1>Find your <br /> dream home</h1>
        <p>Expert Local Knowledge, Personalized Service. <br /> Exceptional Result.</p>
        <Button 
          btnClass="sign-in-btn"
          onClick={handleExploreClick} // Use the navigation function here
          text="Explore homes"
          bgColor="rgb(220, 101, 41)" // Example background color
          txColor="#fff"    // Example text color
          btnBorder="none"
          borderRadius="5px"
          padding="8px 16px" // Adjusted padding for smaller button
          fontSize="14px" // Adjusted font size for smaller button
          cursor="pointer"
          transition="background-color 0.3s ease"
        />
      </div>
      <div className="container">
        <div className="Featurelistings">
          <h2>Feature Listings</h2>
          <div className="card-container">
            <Card 
              price={5000000} 
              title="Beautiful Beach House"
              image={Homeacq1}
              imageHeight="185px"
            />
            <Card 
              price={5000000}
              title="Beautiful Beach House"
              image={Homeacq2}
              imageHeight="185px"
            />
            <Card 
              price={5000000}
              title="Beautiful Beach House"
              image={Homeacq3}
              imageHeight="185px"
              description="Beautiful Beach House"
            />
            <Card 
              price={5000000}
              title="Beautiful Beach House"
              image={Homeacq4}
              imageHeight="185px"
            />
          </div>
        </div>
      </div>

      {/* Agent Div */}
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

export default Home;
