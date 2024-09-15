import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css'; // Import the CSS file for additional styling

const SearchBar = ({
  placeholder,
  height = '40px',
  borderRadius = '4px',
  backgroundColor = 'aliceblue',
  children,
  width = '100%',
  border = 'none',
  showRadio = false, // Control the display of the radio button
  radioName = '', // Name for the radio button group
  onChange, // New prop for handling input changes
}) => {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      height, 
      borderRadius, 
      backgroundColor, 
      padding: '0 10px', 
      width, 
      border, // Apply the border to the outer div
      boxSizing: 'border-box', // Ensure padding is included in the width and height
    }}>
      {showRadio && (
        <input
          type="radio"
          name={radioName}
          className="custom-radio" // Add a custom class for the radio button
        />
      )}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        height: '100%', 
        marginRight: '5px',
      }}>
        {children && React.cloneElement(children, {
          className: 'search-icon', 
        })}
      </div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange} // Add onChange handler here
        style={{
          height: '100%',
          border: 'none', // No border on input itself to avoid double borders
          outline: 'none',
          backgroundColor: 'transparent',
          paddingLeft: '10px',
          width: '100%', 
          flex: '1 1 auto', 
        }}
      />
    </div>
  );
};

SearchBar.propTypes = {
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  border: PropTypes.string,
  children: PropTypes.node,
  height: PropTypes.string,
  placeholder: PropTypes.any,
  width: PropTypes.string,
  showRadio: PropTypes.bool, // New prop type for the radio button
  radioName: PropTypes.string, // New prop type for the radio button name
  onChange: PropTypes.func, // New prop type for the onChange handler
};

export default SearchBar;
