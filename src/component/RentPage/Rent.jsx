import { useState } from 'react';
import Card from '../shared/Card';
import SearchBar from '../shared/SearchBar';
import searchIcon from '../../assets/search.png';

import Homeacq1 from '../../assets/Homeacq1.png'; 
import Homeacq2 from '../../assets/Homeacq2.png';
import Homeacq3 from '../../assets/Homeacq3.png';
import Homeacq4 from '../../assets/Homeacq4.png';
import './Rent.css'; // Add any additional styling here

const Rent = () => {
  // Initial data for the properties
  const properties = [
    { id: 1, title: "Urban Apartment", price: 4500000, image: Homeacq1, name: "City Apartment", location: "Abuja", state: "Abuja" },
    { id: 2, title: "Luxury Villa", price: 10000000, image: Homeacq2, name: "Villa Serenity", location: "Ikoyi", state: "Lagos" },
    { id: 3, title: "Modern Duplex", price: 6000000, image: Homeacq3, name: "Duplex Haven", location: "Lekki", state: "Lagos" },
    { id: 4, title: "Cozy Studio", price: 2500000, image: Homeacq4, name: "Studio Comfort", location: "Abuja", state: "Abuja" },
    { id: 5, title: "Penthouse Suite", price: 15000000, image: Homeacq1, name: "Penthouse Luxury", location: "Victoria Island", state: "Lagos" },
    { id: 6, title: "Beachfront Villa", price: 20000000, image: Homeacq2, name: "Ocean View Villa", location: "Lekki", state: "Lagos" },
    { id: 7, title: "Charming Cottage", price: 3500000, image: Homeacq3, name: "Cottage Delight", location: "Ibadan", state: "Oyo" },
    { id: 8, title: "Luxury Mansion", price: 25000000, image: Homeacq4, name: "Mansion Grandeur", location: "Ikoyi", state: "Lagos" },
    { id: 9, title: "Elegant Apartment", price: 5000000, image: Homeacq1, name: "Elegance Suites", location: "Victoria Island", state: "Lagos" },
    { id: 10, title: "Modern Loft", price: 4000000, image: Homeacq2, name: "Loft Living", location: "Abuja", state: "Abuja" },
    { id: 11, title: "Spacious Villa", price: 8000000, image: Homeacq3, name: "Spacious Haven", location: "Lekki", state: "Lagos" },
    { id: 12, title: "Urban Loft", price: 5500000, image: Homeacq4, name: "Urban Living", location: "Ikoyi", state: "Lagos" },
  ];

  // State to hold current filter inputs (before applying)
  const [filterInputs, setFilterInputs] = useState({
    location: '',
    price: '',
    state: '',
  });

  // Handle input changes in the search bars
  const handleInputChange = (filterType, value) => {
    setFilterInputs({
      ...filterInputs,
      [filterType]: value,
    });
  };

  // Filter properties based on input filters
  const filteredProperties = properties.filter(property => {
    const isLocationMatch = filterInputs.location === '' || property.location.toLowerCase().includes(filterInputs.location.toLowerCase());
    const isStateMatch = filterInputs.state === '' || property.state.toLowerCase() === filterInputs.state.toLowerCase();
    const isPriceMatch = filterInputs.price === '' || property.price <= Number(filterInputs.price);

    return isLocationMatch && isStateMatch && isPriceMatch;
  });

  return (
    <div className="rent-page">
      <h1>Rent Properties</h1>
      
      <div className="filter-section">
        {/* Search Bars for Location, Price, and State */}
        <SearchBar
          placeholder="Search by Location"
          height="40px"
          width="350px"
          borderRadius="15px"
          border="1px solid orange"
          onChange={(e) => handleInputChange('location', e.target.value)}
        >
          <img src={searchIcon} alt="Search" />
        </SearchBar>

        <SearchBar
          placeholder="Max Price"
          height="40px"
          width="350px"
          borderRadius="15px"
          border="1px solid orange"
          onChange={(e) => handleInputChange('price', e.target.value)}
        >
          <img src={searchIcon} alt="Search" />
        </SearchBar>

        <SearchBar
          placeholder="Search by State"
          height="40px"
          width="350px"
          borderRadius="15px"
          border="1px solid orange"
          onChange={(e) => handleInputChange('state', e.target.value)}
        >
          <img src={searchIcon} alt="Search" />
        </SearchBar>
      </div>

      <div className="card-container">
        {filteredProperties.length > 0 ? (
          filteredProperties.map(property => (
            <Card 
              key={property.id}
              title={property.title}
              price={property.price}
              image={property.image}
              name={property.name}
              location={property.location}
              state={property.state}
            />
          ))
        ) : (
          <p>No properties found</p>
        )}
      </div>
    </div>
  );
};

export default Rent;
