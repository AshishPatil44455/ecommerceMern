import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "asdas",
    photo:
      "https://laptopmedia.com/wp-content/uploads/2022/06/1654598710_1710417-680x401.jpg",
    name: "Macbook",
    price: 123,
    quantity: 4,
    stock: 123,
  },
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = tax + subtotal + shippingCharges;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    if (couponCode) {
      setIsValidCouponCode(false);
    }
  }, [couponCode]);
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, dex) => <CartItem key={dex} CartItem={i} />)
        ) : (
          <h1>Cart is Empty</h1>
        )}
      </main>
      <aside>
        <p>Subtotal:₹{subtotal}</p>
        <p>ShippingCharges:₹{shippingCharges}</p>
        <p>Tax:₹{tax}</p>
        <p>
          Discount:<em>₹{discount}</em>
        </p>
        <p>
          <b>Total:₹{total}</b>
        </p>

        <input
          type="text"
          placeholder="Enter coupon code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon
              <VscError />
            </span>
          ))}

        {cartItems.length > 0 && <Link to="/Shipping">Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;
