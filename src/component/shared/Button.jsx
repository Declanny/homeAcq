import PropTypes from 'prop-types';

const Button = ({
  btnFunc,
  bgColor,
  txColor,
  btnBorder,
  children,
  text,
  onClick,
  width, 
  className, // Accept a className prop for external styling
}) => {
  const styles = {
    btn: {
      backgroundColor: bgColor || 'blue',
      color: txColor || 'white',
      padding: '8px 16px',
      border: btnBorder || 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '14px',
      fontFamily: 'Noto Sans JP',
      fontWeight: '500',
      lineHeight: '15px',
      transition: 'background-color 0.3s ease',
      width: width || 'auto',
    },
  };

  return (
    <button 
      className={className}  // Pass the className here
      style={styles.btn} 
      onClick={onClick || btnFunc}
    >
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
  width: PropTypes.string,
  className: PropTypes.string, // Add className prop validation
};

export default Button;
