import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";

const MiddleHeader = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="middle-header">
      <div className="middle-header-search-box">
        <input type="search" placeholder="ماذا ترید؟" />
        <button className="search-box-btn">ابحث</button>
      </div>
      <Link to="/cart" className="middle-header-shopping-cart">
        سله التسوق
        <BsCart3 className="icon" />
        {cartItems.length > 0 && (
          <span className="cart-notification">{cartItems.length}</span>
        )}
      </Link>
    </div>
  );
};

export default MiddleHeader;
