import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import HeroBanner from "./HeroBanner";
import "./services.scss";
import { useEffect, useState } from "react";
import { Categorydata } from "../../mockData/mockData";

const Services = () => {
  const [categoryProduct, setCategoryProduct] = useState();

  const getCategoryProduct = () => {
    setCategoryProduct(Categorydata);
  };

  useEffect(() => {
    getCategoryProduct();
  }, []);

  console.log("111", categoryProduct);

  return (
    <>
      <HeroBanner />

      <Container fixed>
        <Grid container spacing={2}>
          <Grid item lg={12}>
            <div className="bgColor">HOT DEAL/ TOP SELL/ MOST POPULAR</div>
          </Grid>
        </Grid>
      </Container>

      <Container fixed>
        <div className="borderCategoryProduct">
          <Grid container spacing={2}>
            {
              categoryProduct?.map((product) => (
                <Grid item lg={3} key={product.name}>
                  {product.name}
                </Grid>
              ))}
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Services;
