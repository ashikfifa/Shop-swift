import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Rating,
  Slide,
} from "@mui/material";
import "./card.scss";
import tickIcon from "../../svgs/tick.svg";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { forwardRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Card = (props) => {
  const { image, foter, valueRating, price, cartIcon, item } = props;
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()

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
    setOpen(true);
    dispatch(addToCart(item));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseChkPage = () => {
    setOpen(false);
    navigate('/cart')
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

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"The product was added to your cart"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Grid container spacing={0}>
              <Grid item lg={3}>
            <img src={image} style={{height:"80px", width:"80%"}} className="imgSize" />
              </Grid>

              <Grid item lg={7}>
                <p className="foterPara"> {foter} </p>
              </Grid>

              <Grid item lg={2}>
                {price} Tk
              </Grid>
              
            </Grid>
            <div className="hrT"></div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Continue Shopping</Button>
          <Button onClick={handleCloseChkPage}>Checkout</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Card;
