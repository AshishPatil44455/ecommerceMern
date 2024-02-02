import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router-dom";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const orderItems: OrderItemType[] = [
  {
    name: "Puma Shoes",
    photo: img,
    _id: "asdsaasdas",
    quantity: 4,
    price: 2000,
  },
];

const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "Adesh Patil",
    address: "Banglore",
    city: "city",
    country: "India",
    state: "Karnataka",
    pinCode: 123456,
    status: "Processing",
    subtotal: 2000,
    discount: 0,
    shippingCharge: 0,
    tax: 0,
    total: 2000,
    orderItems: orderItems,
    _id: "asdsaasdas",
  });

  const {
    name,
    address,
    city,
    country,
    state,
    pinCode,
    status,
    subtotal,
    discount,
    shippingCharge,
    tax,
    total,
  } = order;

  const updateHandler = () => {
    setOrder((prev)=>({
      ...prev,
      status:prev.status==="Processing"?"Shipped": "Delivered",
    }))
  };

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="productManagement">
        <section style={{padding:"4rem"}}>
          <h2>Order Items</h2>
          {order.orderItems.map((i) => (
            <ProductCard
              name={i.name}
              photo={i.photo}
              price={i.price}
              quantity={i.quantity}
              _id={i._id}
            />
          ))}
        </section>

<article className="shippingInfoCard">
  <h1>Order Summary</h1>
  <h5>user Info</h5>
  <p>Name: {name}</p>
  <p>Address: {`${address}, ${city},${state}, ${country}, ${pinCode}`}</p>
  <h5>Amount Details</h5>
  <p>Subtotal: ${subtotal}</p>
  <p>Shipping Charge: ${shippingCharge}</p>
  <p>Tax: ${tax}</p>
  <p>Discount: ${discount}</p>
  <p>Total: ${total}</p>


  <h5>Status Info</h5>
  <p>
    Status:{" "}
    <span
      className={
        status === "Delivered"
          ? "green"
          : status === "Shipped"
          ? "purple"
          : "red"
      }
    >
      {status}
    </span>
  </p>

  <button onClick={updateHandler}>Update Status</button>
</article>

      </main>
    </div>
  );
};

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => (
  <div className="transactionProductCard">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>
      ${price} x {quantity} = ${price * quantity}
    </span>
  </div>
);
export default TransactionManagement;
