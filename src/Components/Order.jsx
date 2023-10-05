import Button from "./Button";
import "./Order.css";

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <Button>Order</Button>
    </div>
  );
}

export default Order;