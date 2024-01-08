import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/cartSlice";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  List,
  ListItem,
  ListItemText,
  Typography,
  TextField,
  Grid,
  Paper,
} from "@mui/material";
import Container from "@mui/material/Container";

const CartPage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <>
      <Container lg={{ px: 7 }}>
        <Grid container spacing={2}>
          <Grid item lg={7}>
            <Card mb={4}>
              <CardHeader py={3}>
                <Typography variant="h5" mb={0}>
                  Cart - {cart.length} items
                </Typography>
              </CardHeader>
              <CardContent>
                {cart.length == 0 ? (
                  <>You need to add product</>
                ) : (
                  <>
                    {cart?.map((data) => (
                      <Grid container key={data.id}>
                        <Grid item lg={3}>
                          <img
                            src={data.img}
                            style={{ width: "100%" }}
                            alt="Blue Jeans Jacket"
                          />
                        </Grid>
                        <Grid item lg={5}>
                          <Typography variant="subtitle1" mb={2}>
                            <strong>{data.title}</strong>
                          </Typography>

                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={() => dispatch(removeItem(data.id))}
                          >
                            <i className="fas fa-trash"></i> &nbsp; Remove item
                          </Button>
                        </Grid>
                        <Grid item lg={4}>
                          <div
                            style={{
                              marginTop: "10%",
                              display: "flex",
                              alignItems: "center",
                              gap: "3px",
                            }}
                          >
                            <Button
                              variant="contained"
                              color="primary"
                              size="small"
                              onClick={() =>
                                dispatch(decreaseItemQuantity(data.id))
                              }
                            >
                              <i className="fas fa-minus"></i>
                            </Button>

                            <TextField
                              id={`quantity-${data.id}`}
                              type="number"
                              value={data.quantity}
                              onChange={() => null}
                              label="Quantity"
                              variant="outlined"
                            />

                            <Button
                              variant="contained"
                              color="primary"
                              size="small"
                              onClick={() =>
                                dispatch(increaseItemQuantity(data.id))
                              }
                            >
                              <i className="fas fa-plus"></i>
                            </Button>
                          </div>

                          <Typography variant="body1" textAlign="center">
                            <strong>{data.price}</strong>
                          </Typography>
                        </Grid>
                      </Grid>
                    ))}
                  </>
                )}
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={5}>
            <Card mb={4}>
              <CardContent>
                <Typography variant="h5" mb={0}>
                  Summary
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Total Quantity"
                      secondary={<span>{totalQuantity}</span>}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Total amount"
                      secondary={
                        <span>
                          <strong>{totalPrice}</strong>
                        </span>
                      }
                    />
                  </ListItem>
                </List>

                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                >
                  Go to checkout
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CartPage;
