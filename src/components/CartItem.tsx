import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

type CartItemProps = {
  CartItem: any;
};
const CartItem = ({ CartItem }: CartItemProps) => {
  const { photo, productId, name, price, quantity } = CartItem;

  return (
    <div className="cartItem">
      <img src={photo} alt={name} />
      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
        <span>₹{price}</span>
      </article>

      <div>
        <button>-</button>
        <p>{quantity}</p>
        <button>+</button>
      </div>
      <button>
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default CartItem;
