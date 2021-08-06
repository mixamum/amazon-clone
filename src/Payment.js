import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment_container">
        {/*Payment section - delivery address*/}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p></p>
          </div>
        </div>

        <div className="payment_section"></div>

        <div className="payment_section"></div>
        {/*Payment section - Review items*/}
        {/*Payment section - payment method*/}
      </div>
    </div>
  );
}

export default Payment;
