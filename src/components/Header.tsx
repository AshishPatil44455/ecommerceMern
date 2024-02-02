import { useState } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const user = {
  id: "asdfsdf",
  role: "admin",
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logoutHandler = () => {
    setIsOpen(false);
  };

  return (
    <nav className="header">
      <Link onClick={() => setIsOpen((prev) => !prev)} to="/">
        HOME
      </Link>
      <Link onClick={() => setIsOpen((prev) => !prev)} to="/search">
        <FaSearch />
      </Link>
      <Link onClick={() => setIsOpen((prev) => !prev)} to="/cart">
        <FaShoppingCart />
      </Link>

      {user?.id ? (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <FaUser />
          </button>
          <dialog open={isOpen}>
            <div>
              {user.role === "admin" && (
                <Link
                  onClick={() => setIsOpen((prev) => !prev)}
                  to="/admin/dashboard"
                >
                  Admin
                </Link>
              )}
              <Link onClick={() => setIsOpen((prev) => !prev)} to="/orders">
                Orders
              </Link>
              <button onClick={logoutHandler}>
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to="/login">
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
