// Import the CSS file for styling
import './Home.css';

// Import the image file
import Homeacq1 from '../../assets/Homeacq1.png'; 
import Homeacq2 from '../../assets/Homeacq2.png';
import Homeacq3 from '../../assets/Homeacq3.png';
import Homeacq4 from '../../assets/Homeacq4.png';
import Agent4 from '../../assets/Agent4.png'
import Agent3 from '../../assets/Agent3.png'
import Agent2 from '../../assets/Agent2.png'
import Agent1 from '../../assets/Agent1.png'
import img1 from '../../assets/img1.png';  // Adjusted relative path to match your folder structure
import Button from '../shared/Button';
import Card from '../shared/Card';

// Define the Home component
const Home = () => {
  return (
    <div>
      {/* Use the imported image */}
      <img src={img1} alt="Home Image" className="home-image" />
      <div className='Home-content'>
        <h1>Find your <br /> dream home</h1>
        <p>Expert Local Knowledge, Personalized Service. <br /> Exceptional Result.</p>
        <Button 
          btnClass="sign-in-btn"
          onClick={() => {}}
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
              price="5,000,000"
              title="Beautiful Beach House"
              /* description="This beautiful beach house features stunning ocean views and luxurious amenities." */
              image={Homeacq1}
            >
              
              
            </Card>
            <Card 
              price="5,000,000"
              title="Beautiful Beach House"
              /* description="This beautiful beach house features stunning ocean views and luxurious amenities." */
              image={Homeacq2}
            >
              
              
            </Card>
            <Card 
              price="5,000,000"
              title="Beautiful Beach House"
              /* description="This beautiful beach house features stunning ocean views and luxurious amenities." */
              image={Homeacq3}
            >
              
              
            </Card>
            <Card 
              price="5,000,000"
              title="Beautiful Beach House"
              /* description="This beautiful beach house features stunning ocean views and luxurious amenities." */
              image={Homeacq4}
            >
              
              
            </Card>
            {/* Add more <Card /> components as needed */}
          </div>
          
        </div>
</div>


                {/* Agent Div  */}
      <div className="container">
        <div className="Featurelistings">
          <h2>Meet Our Agents</h2>
          <div className="card-container">
            <Card 
               title="Real Estate Agent" 
               name="John Smith"
               image={Agent4}
               imageHeight={250}
            >
              
              
            </Card>
            <Card 
               title="Real Estate Agent" 
               name="Jane Doe"
               image={Agent3}
               imageHeight={250}
            >
              
              
            </Card>
            <Card 
              title="Real Estate Agent" 
              name="Mike Johnson"
              image={Agent2}
              imageHeight={250}
            >
              
              
            </Card>
            <Card 
              
              title="Real Estate Agent" 
              name="Sara williams"
              image={Agent1}
              imageHeight={250}
            >
              
              
            </Card>
            {/* Add more <Card /> components as needed */}
          </div>
          
        </div>
        
      </div>
      
    </div>
  );
};

// Export the Home component as the default export
export default Home;
