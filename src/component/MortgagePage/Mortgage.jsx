import { useState } from 'react';
import SearchBar from '../shared/SearchBar';
import Card from '../shared/Card';
import Homeacq1 from '../../../public/assets/Homeacq1.png'; 
import Homeacq2 from '../../../public/assets/Homeacq2.png';
import Homeacq3 from '../../../public/assets/Homeacq3.png';
import Homeacq4 from '../../../public/assets/Homeacq4.png';
import searchIcon from '../../../public/assets/search.png';
import './Mortgage.css'; // Import the CSS file for additional styling

const properties = [
  { title: "Beautiful Beach House", price: 5000000, image: Homeacq1, description: "A lovely beach house with stunning ocean views.", name: "Beach House 1", address: "123 Ocean Drive, Lagos" },
  { title: "Urban Apartment", price: 4500000, image: Homeacq2, description: "A modern apartment in the city center with all amenities.", name: "City Apartment", address: "456 City Lane, Abuja" },
  { title: "Luxury Villa", price: 10000000, image: Homeacq3, description: "A luxurious villa with a private pool and garden.", name: "Villa Serenity", address: "789 Sunset Boulevard, Ikoyi" },
  { title: "Cozy Cottage", price: 2500000, image: Homeacq4, description: "A cozy cottage nestled in the countryside, perfect for a getaway.", name: "Country Cottage", address: "321 Countryside Road, Jos" },
  { title: "Modern Duplex", price: 6000000, image: Homeacq1, description: "A spacious duplex with modern finishes and a rooftop terrace.", name: "Duplex Haven", address: "654 Green Park, Lekki" },
  { title: "Penthouse Suite", price: 8500000, image: Homeacq2, description: "A stunning penthouse suite with panoramic city views.", name: "Skyline Penthouse", address: "987 Tower Plaza, Victoria Island" },
  { title: "Family Bungalow", price: 4000000, image: Homeacq3, description: "A comfortable bungalow perfect for family living.", name: "Bungalow Bliss", address: "432 Maple Avenue, Enugu" },
  { title: "Seaside Condo", price: 7500000, image: Homeacq4, description: "A stylish condo with easy access to the beach.", name: "Ocean Breeze Condo", address: "567 Beachfront Avenue, Port Harcourt" },
];

const Mortgage = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    const results = properties.filter(property => 
      property.title.toLowerCase().includes(term) ||
      property.description.toLowerCase().includes(term) ||
      property.address.toLowerCase().includes(term)
    );
    setFilteredProperties(results);
  };

  return (
    <div className="mortgageContainer">
      <h2 className="mainTitle">Explore Properties for Sale</h2>

      {/* Search Bar */}
      <div className="searchContainer">
        <SearchBar
          placeholder="Search Properties for Sale"
          height="40px"
          width="95%"
          borderRadius="15px"
          border="1px solid orange"
          onChange={handleSearch}
        >
          <img src={searchIcon} alt="Search" />
        </SearchBar>
      </div>

      {/* Cards Container */}
      <div className="cardGrid">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property, index) => (
            <Card 
              key={index}
              title={property.title}
              price={property.price}
              image={property.image}
              description={property.description}
              name={property.name}
              address={property.address}
            />
          ))
        ) : (
          <div className="noResults">
            <p>No properties found.</p>
            <a href="#">Try a different search</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mortgage;
