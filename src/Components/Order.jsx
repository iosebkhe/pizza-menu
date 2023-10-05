import PropTypes from 'prop-types';
import Button from "./Button";
import "./Order.css";

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We&apos;re open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <Button>Order</Button>
    </div>
  );
}

Order.propTypes = {
  closeHour: PropTypes.number,
  openHour: PropTypes.number
};

export default Order;