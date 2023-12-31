import { Rating } from "@mui/material";
import "./card.scss";
import tickIcon from "../../svgs/tick.svg";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = (props) => {
  const { image, foter, valueRating, price, cartIcon, item } = props;
  const dispatch = useDispatch();

  const handleOnClick = () => {
    toast(<p style={{ fontSize: 16 }}>Added to the cart</p>, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      newestOnTop: false,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
      type: "success",
    });
    dispatch(addToCart(item));
  };
  return (
    <div className="cardClass">
      <img src={image} className="imgSize" />
      <p className="foterPara"> {foter} </p>
      <Rating name="read-only" value={valueRating} readOnly />
      <div className="headerDiv2">
        <img src={tickIcon} alt="tick icon" />
        <p className="foterP">In Stock</p>
      </div>

      <div className="headerDiv">
        {price}{" "}
        <div className="cartIconClass" onClick={handleOnClick}>
          {" "}
          <img src={cartIcon} alt="cart icon" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Card;
