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
  paddingLeft, 
  paddingTopBottom,
  paddingRight,
  className, // Accept a className prop for external styling
  btnClass, // Add a class for the button
}) => {
  const styles = {
    btn: {
      backgroundColor: bgColor || 'blue',
      color: txColor || 'white',
      padding: `${paddingTopBottom || '8px'} ${paddingRight || '16px'} ${paddingTopBottom || '8px'} ${paddingLeft || '16px'}`, 
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
      className={`${className || ''} ${btnClass || ''}`} // Combine the className and btnClass
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
  paddingLeft: PropTypes.string,
  paddingTopBottom: PropTypes.string,
  paddingRight: PropTypes.string,
  className: PropTypes.string,
  btnClass: PropTypes.string, // Add btnClass prop validation
};

export default Button;
