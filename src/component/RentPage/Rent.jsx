import { useState } from 'react';
import Card from '../shared/Card';
import SearchBar from '../shared/SearchBar';
import searchIcon from '../../../public/assets/search.png';
import Homeacq1 from '../../../public/assets/Homeacq1.png';
import Homeacq2 from '../../../public/assets/Homeacq2.png';
import Homeacq3 from '../../../public/assets/Homeacq3.png';
import Homeacq4 from '../../../public/assets/Homeacq4.png';
import './Rent.css'; // Import the CSS file for additional styling

const properties = [
  { title: "Urban Apartment", price: 4500000, image: Homeacq1, description: "Modern apartment in city center.", name: "City Apartment", address: "456 City Lane, Abuja", type: "Apartment", state: "Abuja", features: ["Furnished", "Air Conditioning"] },
  { title: "Luxury Villa", price: 10000000, image: Homeacq2, description: "Luxurious villa with private pool.", name: "Villa Serenity", address: "789 Sunset Boulevard, Ikoyi", type: "Villa", state: "Lagos", features: ["Pool", "Garden"] },
  { title: "Modern Duplex", price: 6000000, image: Homeacq3, description: "Spacious duplex with rooftop terrace.", name: "Duplex Haven", address: "654 Green Park, Lekki", type: "Duplex", state: "Lagos", features: ["Rooftop Terrace", "Parking"] },
  { title: "Cozy Studio", price: 2500000, image: Homeacq4, description: "Cozy studio perfect for singles.", name: "Studio Comfort", address: "321 Countryside Road, Abuja", type: "Studio", state: "Abuja", features: ["Furnished", "Close to Public Transport"] },
];

const Rent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('All');
  const [selectedPropertyType, setSelectedPropertyType] = useState('All');
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const handleTypeChange = (e) => {
    setSelectedPropertyType(e.target.value);
  };

  const handleFeatureChange = (e) => {
    const { value, checked } = e.target;
    setSelectedFeatures(prevFeatures =>
      checked
        ? [...prevFeatures, value]
        : prevFeatures.filter(feature => feature !== value)
    );
  };

  const filteredProperties = properties.filter(property => {
    const isStateMatch = selectedState === 'All' || property.state === selectedState;
    const isTypeMatch = selectedPropertyType === 'All' || property.type === selectedPropertyType;
    const hasFeatures = selectedFeatures.every(feature => property.features.includes(feature));
    
    return (
      (property.address.toLowerCase().includes(searchTerm) ||
      property.title.toLowerCase().includes(searchTerm) ||
      property.description.toLowerCase().includes(searchTerm)) &&
      isStateMatch &&
      isTypeMatch &&
      hasFeatures
    );
  });

  return (
    <div className="rentContainer">
      <div className="filterArea">
        <div className="filterGroup">
          <label>State:</label>
          <select value={selectedState} onChange={handleStateChange}>
            <option value="All">All States</option>
            <option value="Abuja">Abuja</option>
            <option value="Lagos">Lagos</option>
            <option value="Ogun">Ogun</option>
            <option value="Kaduna">Kaduna</option>
            <option value="Kano">Kano</option>
            <option value="Enugu">Enugu</option>
            <option value="Anambra">Anambra</option>
          </select>
        </div>

        <div className="filterGroup">
          <label>Property Type:</label>
          <select value={selectedPropertyType} onChange={handleTypeChange}>
            <option value="All">All Types</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="Duplex">Duplex</option>
            <option value="Studio">Studio</option>
            <option value="Cottage">Cottage</option>
            <option value="Mansion">Mansion</option>
            <option value="Loft">Loft</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </div>

        <div className="filterGroup">
          <label>Features:</label>
          <div>
            <input type="checkbox" value="Furnished" onChange={handleFeatureChange} /> Furnished
            <input type="checkbox" value="Air Conditioning" onChange={handleFeatureChange} /> Air Conditioning
          </div>
        </div>

      </div>

      <div className="mainArea">
        <div className="searchHeader">
          <h5>Explore Properties for Rent</h5>
          <SearchBar
            placeholder="Search Properties for Rent"
            height="40px"
            width="95%"
            borderRadius="15px"
            border="1px solid orange"
            onChange={handleSearch}
          >
            <img src={searchIcon} alt="Search" />
          </SearchBar>
        </div>
        {filteredProperties.length > 0 ? (
          <div className="propertyGrid">
            {filteredProperties.map((property, index) => (
              <Card
                key={index}
                title={property.title}
                price={property.price}
                image={property.image}
                description={property.description}
                name={property.name}
                address={property.address}
              />
            ))}
          </div>
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

export default Rent;
