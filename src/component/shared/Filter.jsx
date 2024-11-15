import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import './Filter.css';
import Button from "./Button";

const Filter = () => {
  const [activeFilter, setActiveFilter] = useState("Buy"); // Default to "Buy"
  const navigate = useNavigate(); // Initialize useNavigate

  const handleFilterClick = (filterType) => {
    setActiveFilter((prevFilter) => (prevFilter === filterType ? null : filterType));
  };

  const handleFilterSubmit = () => {
    // Navigate to the appropriate page based on the active filter
    if (activeFilter === "Buy") {
      navigate('/buy');
    } else if (activeFilter === "Rent") {
      navigate('/rent');
    } else if (activeFilter === "Lease") {
      navigate('/mortgage'); // Navigate to mortgage for lease option
    }
  };

  return (
    <div className="filter-container">
      <div className="filter-titles">
        <div className="button-group">
          <button
            className={`filter-title ${activeFilter === "Buy" ? "active" : ""}`}
            onClick={() => handleFilterClick("Buy")}
          >
            Buy
          </button>
          <button
            className={`filter-title ${activeFilter === "Rent" ? "active" : ""}`}
            onClick={() => handleFilterClick("Rent")}
          >
            Rent
          </button>
          <button
            className={`filter-title ${activeFilter === "Lease" ? "active" : ""}`}
            onClick={() => handleFilterClick("Lease")}
          >
            Lease
          </button>
        </div>
      </div>

      <div className="filter-content">
        {activeFilter === "Buy" && (
          <div className="filter-panel buy-filters">
            <h3>Buy Filters</h3>
            <input type="text" placeholder="Price Range" />
            <input type="text" placeholder="Location" />
            <input type="text" placeholder="Property Type" />
          </div>
        )}
        {activeFilter === "Rent" && (
          <div className="filter-panel rent-filters">
            <h3>Rent Filters</h3>
            <input type="text" placeholder="Rent Price Range" />
            <input type="text" placeholder="Location" />
            <input type="text" placeholder="Property Type" />
          </div>
        )}
        {activeFilter === "Lease" && (
          <div className="filter-panel lease-filters">
            <h3>Lease Filters</h3>
            <input type="text" placeholder="Lease Price Range" />
            <input type="text" placeholder="Location" />
            <input type="text" placeholder="Property Type" />
          </div>
        )}
      </div>

      {/* Button to trigger navigation */}
      <Button
      bgColor="rgb(220, 101, 41)"
      onClick={handleFilterSubmit} className="filter-submit-btn">
        Go to {activeFilter} Page
      </Button>
    </div>
  );
};

export default Filter;
