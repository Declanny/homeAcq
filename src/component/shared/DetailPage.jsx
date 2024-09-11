import { useLocation } from 'react-router-dom';
import './DetailPage.css';
import Button from './Button';
import villaIcon from '../../../public/assets/villa.png';
import nestyale from '../../../public/assets/nestyale.png';
import garage from '../../../public/assets/garage.png';
import waves from '../../../public/assets/waves.png';
import Card from '../shared/Card';
import Homeacq1 from '../../../public/assets/Homeacq1.png'; 
import Homeacq2 from '../../../public/assets/Homeacq2.png';
import Homeacq3 from '../../../public/assets/Homeacq3.png';

const DetailPage = () => {
  const location = useLocation();

  // Provide fallback values in case location.state is null
  const { title, description, image, price, name, address } = location.state || {
    title: 'Default Title',
    description: 'Default description about the property.',
    image: Homeacq1,  // Default image
    price: 0,
    name: 'Default Property Name',
    address: 'No address available',
  };

  return (
    <div className="detail-page">
      <img src={image} alt={title} className="detail-image" />
      
      <div className="detail-content">
        <h2>{title}</h2>
        {name && <p className="detail-name">{name}</p>}
        {address && <p className="detail-address">{address}</p>}
        {price && <p className="detail-price">₦{price}</p>}
        
        <div className="features-section">
          <h3>Property Features</h3>
          <div className="features-container">
            <div className="feature-card">
              <img src={villaIcon} alt="Feature 1" />
              <p>Feature 1 Description</p>
            </div>
            <div className="feature-card">
              <img src={nestyale} alt="Feature 2" />
              <p>Feature 2 Description</p>
            </div>
            <div className="feature-card">
              <img src={garage} alt="Feature 3" />
              <p>Feature 3 Description</p>
            </div>
            <div className="feature-card">
              <img src={waves} alt="Feature 4" />
              <p>Feature 4 Description</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h3>About </h3>
          <p>{description}</p>
        </div>

        <div className="location-section">
          <h3>Location</h3>
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(address)}`}
            width="100%"
            height="400"
            style={{ border: 0,  borderRadius: '10px' }}
            allowFullScreen=""
            loading="lazy"
            title="Property Location"
          ></iframe>
        </div>

        <div className="contact-section">
          <h3>Contact the Agent</h3>
          <form className="contact-form">
            <label>
              Name:
              <input type="text" name="name" required placeholder="Add value" />
            </label>
            <label>
              Email:
              <input type="email" name="email" required placeholder="Add value" />
            </label>
            <label>
              Message:
              <textarea placeholder="Type your message" name="message" required></textarea>
            </label>
            <Button 
              btnClass=""
              text="Send message to Agent"
              bgColor="rgb(220, 101, 41)"
              txColor="#fff"
              btnBorder="none"
              borderRadius="5px"
              padding="8px 16px"
              fontSize="14px"
              cursor="pointer"
              transition="background-color 0.3s ease"
            />
          </form>
        </div>

        <div className="main-content">
          <h2>Similar Properties</h2>
          <div className="card-container">
            <Card 
              title="Urban Apartment"
              price={4500000}
              image={Homeacq2}
              description="A modern apartment in the city center with all amenities."
              name="City Apartment"
              address="456 City Lane, Abuja"
            />
            <Card 
              title="Luxury Villa"
              price={10000000}
              image={Homeacq3}
              description="A luxurious villa with a private pool and garden."
              name="Villa Serenity"
              address="789 Sunset Boulevard, Ikoyi"
            />
            <Card 
              title="Modern Duplex"
              price={6000000}
              image={Homeacq1}
              description="A spacious duplex with modern finishes and a rooftop terrace."
              name="Duplex Haven"
              address="654 Green Park, Lekki"
            />
            <Card 
              title="Penthouse Suite"
              price={8500000}
              image={Homeacq2}
              description="A stunning penthouse suite with panoramic city views."
              name="Skyline Penthouse"
              address="987 Tower Plaza, Victoria Island"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;





// import { useLocation } from 'react-router-dom';
// import  {useState, useEffect} from 'react'
// import './DetailPage.css';
// import Button from './Button';
// import villaIcon from '../../assets/villa.png';
// import nestyale from '../../assets/nestyale.png';
// import garage from '../../assets/garage.png';
// import waves from '../../assets/waves.png';
// import Card from '../shared/Card';
// import Homeacq1 from '../../assets/Homeacq1.png'; 
// import Homeacq2 from '../../assets/Homeacq2.png';
// import Homeacq3 from '../../assets/Homeacq3.png';


// const DetailPage = () => {
//   const location = useLocation();
//   const { title, description, image, price, name, address } = location.state;

//   const [googleMapUrl, setGoogleMapUrl] = useState('');


//   useEffect(() => {
//     const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

//     const googleMapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(
//       address
//     )}`;
//     setGoogleMapUrl(googleMapUrl);
//   }, [address]);

//   return (
//     <div className="detail-page">
//       <img src={image} alt={title} className="detail-image" />
      
//       <div className="detail-content">
//         <h2>{title}</h2>
//         {name && <p className="detail-name">{name}</p>}
//         {address && <p className="detail-address">{address}</p>}
//         {price && <p className="detail-price">₦{price}</p>}
        
//   <div className="features-section">
//   <h3>Property Features</h3>
//   <div className="features-container">
//     <div className="feature-card">
//       <img src={villaIcon} alt="Feature 1" />
//       <p>Feature 1 Description</p>
//     </div>
//     <div className="feature-card">
//       <img src={nestyale} alt="Feature 2" />
//       <p>Feature 2 Description</p>
//     </div>
//     <div className="feature-card">
//       <img src={garage} alt="Feature 3" />
//       <p>Feature 3 Description</p>
//     </div>
//     <div className="feature-card">
//       <img src={waves} alt="Feature 4" />
//       <p>Feature 4 Description</p>
//     </div>
//   </div>
// </div>


//         <div className="about-section">
//           <h3>About </h3>
//           <p>{description}</p>
//         </div>

//         <div className="location-section">
//           <h3>Location</h3>
//           {/* <iframe
//             src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(address)}`}
//             width="100%"
//             height="400"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             title="Property Location"
//           ></iframe> */}


// {googleMapUrl && (
//             <iframe
//               src={googleMapUrl}
//               width="100%"
//               height="400"
//               style={{ border: '0' }}
//               allowFullScreen
//               loading="lazy"
//               title="Property Location"
//             ></iframe>
//           )}
//         </div>

//         <div className="contact-section">
//           <h3>Contact the Agent</h3>
//           <form className="contact-form">
//             <label>
//               Name:
//               <input type="text" name="name" required placeholder="Add value" />
//             </label>
//             <label>
//               Email:
//               <input type="email" name="email" required placeholder="Add value" />
//             </label>
//             <label>
//               Message:
//               <textarea placeholder= "Type your message" name="message" required></textarea>
//             </label>
//             <Button 
//             btnClass=""
            
//             text="Send message to Agent"
//             bgColor="rgb(220, 101, 41)"
//             txColor="#fff"
//             btnBorder="none"
//             borderRadius="5px"
//             padding="8px 16px"
//             fontSize="14px"
//             cursor="pointer"
//             transition="background-color 0.3s ease"
//           />
//           </form>
//         </div>

//         <div className="main-content">
//         <h2>Similar Properties</h2>
      

      
        
//   <div className="card-container">
  
//   <Card 
//     title="Urban Apartment"
//     price={4500000}
//     image={Homeacq2}
//     description="A modern apartment in the city center with all amenities."
//     name="City Apartment"
//     address="456 City Lane, Abuja"
//   />
//   <Card 
//     title="Luxury Villa"
//     price={10000000}
//     image={Homeacq3}
//     description="A luxurious villa with a private pool and garden."
//     name="Villa Serenity"
//     address="789 Sunset Boulevard, Ikoyi"
//   />

//   <Card 
//     title="Modern Duplex"
//     price={6000000}
//     image={Homeacq1}
//     description="A spacious duplex with modern finishes and a rooftop terrace."
//     name="Duplex Haven"
//     address="654 Green Park, Lekki"
//   />
//   <Card 
//     title="Penthouse Suite"
//     price={8500000}
//     image={Homeacq2}
//     description="A stunning penthouse suite with panoramic city views."
//     name="Skyline Penthouse"
//     address="987 Tower Plaza, Victoria Island"
//   />
 
  
// </div>

      
//       </div>


//       </div>
//     </div>
//   );
// };

// export default DetailPage;
