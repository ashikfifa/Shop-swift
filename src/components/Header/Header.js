import { AppBar, Button, Container, IconButton, Tab, Tabs, Toolbar, Typography, useMediaQuery } from '@mui/material';
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from './DrawyerComp';
import { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../features/cartSlice';


const Header=()=>{
  const [value, setValue] = useState();
  const theme = useTheme();
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  
  console.log(theme);
  const isMatch = useMediaQuery('(min-width:1200px)');
  console.log('1111111111',isMatch);
    return(
        <>
<AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} />
          {!isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Shoppee
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab  component={Link}
    to="/" label="Products" />
                <Tab label="Services" />
                <Tab label="About Us" />
                <Tab component={Link}
    to="/cart" label={`Cart (${totalQuantity})`}/>
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
        </>
    )
}
export default Header