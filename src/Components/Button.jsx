import PropTypes from 'prop-types';
import "./Button.css";

const Button = ({ children }) => {
  return (<button className="btn">{children}</button>);
};

Button.propTypes = {
  children: PropTypes.node
};

export default Button;