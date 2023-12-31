import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import "./triCycle.scss";
import sortIcon from "../../svgs/sortIcon.svg";
import fullViewIcon from "../../svgs/fullViewIcon.svg";
import descViewIcon from "../../svgs/descViewIcon.svg";
import listViewIcon from "../../svgs/listViewIcon.svg";
import cartIcon from "../../svgs/cart.svg";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { BabyProduct, BabyProductTriCycle } from "../../mockData/mockData";
import { useSelector } from "react-redux";
const TriCycle = () => {
  const [selectedValue, setSelectedValue] = useState("Walker & swing car");
  const [babyProduct, setBabyProduct] = useState([]);
  const [valueRating, setValueRating] = useState(2);
  const [state, setState] = useState({
    age: "",
    name: "hai",
  });

  const items = useSelector((state) => state.allCart.items);

  console.log('itemss',items);
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const babyProductList = () => {
    try {
      // const result = await  BabyProduct();
      setBabyProduct(BabyProduct);
    } catch (error) {
      console.error("Error fetching baby products:", error);
    }
  };

  useEffect(() => {
    babyProductList();
  }, []);

  return (
    <div className="container">
      <div className="triCycleParent">
        <p className="title">TriCycle</p>
        <span className="subTitle">
          {" "}
          Home/Cycle & Sports/Walker & Tricycle/Tricycle
        </span>

        <div className="hrT"></div>
        <div style={{ marginTop: "3%" }}></div>
        <Grid container spacing={2}>
          <Grid item lg={3}>
            <FormControl  className="colorBack">
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Walker & swing car"
                onChange={handleRadioChange}
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Walker & swing car"
                  control={<Radio />}
                  label="Walker & swing car"
                />
                <FormControlLabel
                  value="Tricycle"
                  control={<Radio />}
                  label="Tricycle"
                />
              </RadioGroup>
            </FormControl>

            <p className="productTitle">Product filters</p>

            <div className="hrT" style={{width:"73%"}}></div>
          </Grid>

          <Grid item lg={9}>
            <div className="headerDiv">
              <div className="headerDiv2">
                <div style={{ paddingTop: "5px" }}>
                  <img src={sortIcon} alt="sort icon" />
                </div>

                <div>Sort By</div>

                <div>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                      name: "age",
                      id: "age-native-simple",
                    }}
                  >
                    <option value="" disabled>
                      Popular First
                    </option>
                    <option value={10}>Newest Item First</option>
                    <option value={20}>Position: Low to High</option>
                    <option value={30}>Position: High to Low</option>
                  </Select>
                </div>
              </div>

              <div className="headerDiv2">
                <div>
                  <img src={fullViewIcon} alt="full view icon" />
                </div>
                <div>
                  <img src={descViewIcon} alt="desc view icon" />
                </div>
                <div>
                  <img src={listViewIcon} alt="list view icon" />
                </div>
              </div>
            </div>

            <div style={{ padding: "3% 0%" }}>
              {selectedValue === "Walker & swing car" && (
                <Grid container spacing={2}>
                  {BabyProduct.map((babyProductIndex) => (
                    <Grid item lg={3}>
                      <Card
                        image={babyProductIndex.img}
                        item={babyProductIndex}
                        cartIcon={cartIcon}
                        foter={babyProductIndex.name}
                        valueRating={valueRating}
                        price={babyProductIndex.price}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
              {selectedValue === "Tricycle" && (
                <Grid container spacing={2}>
                  {BabyProductTriCycle.map((BabyProductTriCycleIndex)=>
                  <Grid item lg={3}>
                    <Card
                        image={BabyProductTriCycleIndex.img}
                        item={BabyProductTriCycleIndex}
                        cartIcon={cartIcon}
                        foter={BabyProductTriCycleIndex.name}
                        valueRating={valueRating}
                        price={BabyProductTriCycleIndex.price}
                      />
                    </Grid>
                  )}
                
                  </Grid>
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default TriCycle;
