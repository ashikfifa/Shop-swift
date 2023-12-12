import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { Button, Card, CardActions, CardContent, Container, Grid, Typography } from "@mui/material";

export default function App() {
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();

  console.log('itemss',items);

  return (
    <>
    <Container fixed>
    <Grid container spacing={2}>
    
          {items.map((item) => (
            <Grid item lg={4}>
             <Card sx={{ minWidth: 275 }}>
             <CardContent>
                <img height="376px" width="330px"  src={item.img} position="top" alt="..." />

                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{item.title}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{item.price}</Typography>
                  <CardActions>
                  <Button size="large" onClick={() => dispatch(addToCart(item))}>
                    Add to Cart
                  </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          ))}
          </Grid>
          </Container>
       </>
  );
}
