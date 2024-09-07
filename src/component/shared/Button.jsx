import PropTypes from 'prop-types';

const Button = ({
  btnFunc,
  bgColor,
  txColor,
  btnBorder,
  children,
  text,
  onClick,
  width, // New prop for width
}) => {
  const styles = {
    btn: {
      backgroundColor: bgColor || 'blue',
      color: txColor || 'white',
      padding: '8px 16px', // Reduced padding for a smaller button
      border: btnBorder || 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '14px', // Reduced font size for a smaller button
      fontFamily: 'Noto Sans JP',
      fontWeight: '500',
      lineHeight: '15px',
      transition: 'background-color 0.3s ease',
      /* marginBottom: '10px', */
      width: width || 'auto', // Apply width prop or default to 'auto'
    },
  };

  return (
    <button style={styles.btn} onClick={onClick || btnFunc}>
      {children || text || 'Default'}
    </button>
  );
};

Button.propTypes = {
  bgColor: PropTypes.string,
  btnBorder: PropTypes.string,
  btnFunc: PropTypes.func,
  children: PropTypes.node,
  text: PropTypes.string,
  txColor: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.string, // PropType for the width
};

export default Button;
