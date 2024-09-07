import PropTypes from "prop-types"


const RadioInput = ({
  placeholder,
  height = '20px',
  width = '20px',
  border = '2px solid lightorange',
  borderColor = 'lightorange',
  borderRadius = '50%',
  checkedColor = 'yellow',
  uncheckedColor = 'lightorange',
  ...props
}) => {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
      <input
        type="radio"
        style={{
          height,
          width,
          border,
          borderColor,
          borderRadius,
          marginRight: '10px',
          appearance: 'none',
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          outline: 'none',
          cursor: 'pointer',
          backgroundColor: uncheckedColor,
          position: 'relative',
          display: 'inline-block',
        }}
        {...props}
        onChange={(e) => {
          e.target.style.backgroundColor = e.target.checked ? checkedColor : uncheckedColor;
        }}
      />
      {placeholder && <span>{placeholder}</span>}
    </label>
  );
};

RadioInput.propTypes = {
  border: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  checkedColor: PropTypes.string,
  height: PropTypes.string,
  placeholder: PropTypes.any,
  uncheckedColor: PropTypes.string,
  width: PropTypes.string
}

export default RadioInput;
