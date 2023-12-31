import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import HeroBanner from "./HeroBanner";
import "./services.scss";
import { useEffect, useState } from "react";
import { Categorydata } from "../../mockData/mockData";
import { useNavigate } from "react-router-dom";


const Services = () => {
  const [categoryProduct, setCategoryProduct] = useState();

  const navigate=useNavigate()

  const getCategoryProduct = () => {
    setCategoryProduct(Categorydata);
  };

  const handleProductClick=(productName)=>{
    console.log("111", productName);
    if(productName==='Tricycle'){
        navigate('/tri-cycle')
    }
  }

  useEffect(() => {
    getCategoryProduct();
  }, []);

  

  return (
    <>
    <div style={{marginTop:"-2%"}}>
    <HeroBanner />
    </div>
      

      <div className="container">
        <Grid container spacing={2}>
          <Grid item lg={12}>
            <div className="bgColor">HOT DEAL/ TOP SELL/ MOST POPULAR</div>
          </Grid>
        </Grid>
      </div>

      <div className="container">
        <Grid style={{ marginTop: "2%" }} container spacing={2}>
          {categoryProduct?.map((product) => (
            <Grid item lg={3} key={product.name}>
              <div onClick={() => handleProductClick(product.name)} className="text-center">
                <img className="imgList" src={product.img} width="95%" />{" "}
                <span className="nameFont"> {product.name}</span>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Services;
