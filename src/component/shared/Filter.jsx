import { useState } from "react";
import './Filter.css';

const Filter = () => {
  // Set the default active filter to "Buy"
  const [activeFilter, setActiveFilter] = useState("Buy"); // Changed null to "Buy"

  const handleFilterClick = (filterType) => {
    setActiveFilter((prevFilter) => (prevFilter === filterType ? null : filterType));
  };

  return (
    <div className="filter-container">
      <div className="filter-titles">
        <div className="button-group"> {/* Changed class name to button-group */}
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
            {/* Add more buy filters */}
          </div>
        )}
        {activeFilter === "Rent" && (
          <div className="filter-panel rent-filters">
            <h3>Rent Filters</h3>
            <input type="text" placeholder="Rent Price Range" />
            <input type="text" placeholder="Location" />
            <input type="text" placeholder="Property Type" />
            {/* Add more rent filters */}
          </div>
        )}
        {activeFilter === "Lease" && (
          <div className="filter-panel lease-filters">
            <h3>Lease Filters</h3>
            <input type="text" placeholder="Lease Price Range" />
            <input type="text" placeholder="Location" />
            <input type="text" placeholder="Property Type" />
            {/* Add more lease filters */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
