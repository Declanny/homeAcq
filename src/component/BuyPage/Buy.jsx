import { useState } from 'react';
import Card from '../shared/Card';
import SearchBar from '../shared/SearchBar';
import searchIcon from '../../../public/assets/search.png';
import Homeacq1 from '../../../public/assets/Homeacq1.png';
import Homeacq2 from '../../../public/assets/Homeacq2.png';
import Homeacq3 from '../../../public/assets/Homeacq3.png';
import Homeacq4 from '../../../public/assets/Homeacq4.png';
import './BuyPage.css'; // Import the CSS file for additional styling

const properties = [
  { title: "Beautiful Beach House", price: 5000000, image: Homeacq1, description: "A lovely beach house with stunning ocean views.", name: "Beach House 1", address: "123 Ocean Drive, Lagos", type: "House", state: "Lagos", features: ["Furnished", "Pool"] },
  { title: "Urban Apartment", price: 4500000, image: Homeacq2, description: "A modern apartment in the city center with all amenities.", name: "City Apartment", address: "456 City Lane, Abuja", type: "Apartment", state: "Abuja", features: ["Furnished", "Air Conditioning"] },
  { title: "Luxury Villa", price: 10000000, image: Homeacq3, description: "A luxurious villa with a private pool and garden.", name: "Villa Serenity", address: "789 Sunset Boulevard, Ikoyi", type: "Villa", state: "Lagos", features: ["Pool", "Garden"] },
  { title: "Cozy Cottage", price: 2500000, image: Homeacq4, description: "A cozy cottage nestled in the countryside, perfect for a getaway.", name: "Country Cottage", address: "321 Countryside Road, Jos", type: "Cottage", state: "Plateau", features: ["Furnished"] },
];

const Buy = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [state, setState] = useState('All');
  const [propertyType, setPropertyType] = useState('All');
  const [features, setFeatures] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleTypeChange = (e) => {
    setPropertyType(e.target.value);
  };

  const handleFeatureChange = (e) => {
    const { value, checked } = e.target;
    setFeatures(prevFeatures =>
      checked
        ? [...prevFeatures, value]
        : prevFeatures.filter(feature => feature !== value)
    );
  };

  const filteredProperties = properties.filter(property => {
    const isStateMatch = state === 'All' || property.state === state;
    const isTypeMatch = propertyType === 'All' || property.type === propertyType;
    const hasFeatures = features.every(feature => property.features.includes(feature));
    
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
    <div className="buy-page">
      <div className="filter-options">
        <h4>Filter Properties</h4>
        <div className="filter-section">
          <label>State:</label>
          <select value={state} onChange={handleStateChange}>
            <option value="All">All States</option>
            <option value="Abuja">Abuja</option>
            <option value="Lagos">Lagos</option>
            <option value="Ogun">Ogun</option>
            <option value="Kaduna">Kaduna</option>
            <option value="Kano">Kano</option>
            <option value="Enugu">Enugu</option>
            <option value="Anambra">Anambra</option>
            <option value="Plateau">Plateau</option>
            {/* Add more Nigerian states as needed */}
          </select>
        </div>

        <div className="filter-section">
          <label>Property Type:</label>
          <select value={propertyType} onChange={handleTypeChange}>
            <option value="All">All Types</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="Duplex">Duplex</option>
            <option value="House">House</option>
            <option value="Cottage">Cottage</option>
            <option value="Mansion">Mansion</option>
            <option value="Loft">Loft</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </div>

        <div className="filter-section">
          <label>Features:</label>
          <div>
            <input type="checkbox" value="Furnished" onChange={handleFeatureChange} /> Furnished
            <input type="checkbox" value="Air Conditioning" onChange={handleFeatureChange} /> Air Conditioning
            <input type="checkbox" value="Pool" onChange={handleFeatureChange} /> Pool
            <input type="checkbox" value="Garden" onChange={handleFeatureChange} /> Garden
          </div>
        </div>
      </div>

      <div className="main-content">
        <h2 className='h2main'>Explore Properties for Sale</h2>
        <div className="search-container">
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

        {/* Property Cards */}
        <div className="card-container">
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
            <div className="no-properties">
              <p>No properties found.</p>
              <a href="#">Try a different search</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Buy;
