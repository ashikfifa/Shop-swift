import { Rating } from "@mui/material";
import "./card.scss";
import tickIcon from "../../svgs/tick.svg";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";

const Card = (props) => {
  const { image, foter, valueRating, price, cartIcon,item } = props;

  const dispatch=useDispatch()

  const handleOnClick=()=>{
    console.log('000', price);
  }
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
        {price} <div className="cartIconClass" onClick={() => dispatch(addToCart(item))}> <img  src={cartIcon} alt="cart icon" /></div>
      </div>
    </div>
  );
};

export default Card;
