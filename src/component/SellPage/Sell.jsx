
import Card from '../shared/Card';
import SearchBar from '../shared/SearchBar';
import searchIcon from '../../../public/assets/search.png';

import Homeacq1 from '../../../public/assets/Homeacq1.png'; 
import Homeacq2 from '../../../public/assets/Homeacq2.png';
import Homeacq3 from '../../../public/assets/Homeacq3.png';
import Homeacq4 from '../../../public/assets/Homeacq4.png';
import './Sell.css'; // Add any additional styling here

const Sell = () => {
  return (
    <div className="main-content">
      <h5>Explore Properties for Sale</h5>

      <div className='HomeType'>
        <SearchBar
          placeholder="Search Properties for Sale"
          height="40px"
          width="300px"
          borderRadius="15px"
          backgroundColor=""
          border="1px solid orange"
        >
          <img src={searchIcon} alt="Search" />
        </SearchBar>
      </div>

      <div className="card-container">
        <Card 
          title="Beautiful Beach House"
          price={5000000}
          image={Homeacq1}
          description="A lovely beach house with stunning ocean views."
          name="Beach House 1"
          address="123 Ocean Drive, Lagos"
        />
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
          title="Cozy Cottage"
          price={2500000}
          image={Homeacq4}
          description="A cozy cottage nestled in the countryside, perfect for a getaway."
          name="Country Cottage"
          address="321 Countryside Road, Jos"
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
        <Card 
          title="Family Bungalow"
          price={4000000}
          image={Homeacq3}
          description="A comfortable bungalow perfect for family living."
          name="Bungalow Bliss"
          address="432 Maple Avenue, Enugu"
        />
        <Card 
          title="Seaside Condo"
          price={7500000}
          image={Homeacq4}
          description="A stylish condo with easy access to the beach."
          name="Ocean Breeze Condo"
          address="567 Beachfront Avenue, Port Harcourt"
        />
      </div>
    </div>
  );
};

export default Sell;
