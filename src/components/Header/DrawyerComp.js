import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate=useNavigate()

  const { totalQuantity } = useSelector(
    (state) => state.allCart
  );
  const pages = ["Products", "Services", "ABoutUs", `Cart (${totalQuantity})` ];

  const handleDrawerItemClick = (pageText) => {

    if(pageText=='Products'){
      navigate('/')
    }
    else if(pageText=='Services'){
      navigate('/services')
    }
    else if(pageText=='Cart'){
      navigate('/cart')
    }
    setOpenDrawer(false);
  };

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((pageText, index) => (
            <ListItemButton key={index} onClick={() => handleDrawerItemClick(pageText)}>
              <ListItemIcon>
                <ListItemText>{pageText}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;