import { FormControl, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import "./triCycle.scss";
import { useState } from "react";
const TriCycle = () => {

    const [selectedValue, setSelectedValue] = useState('Walker & swing car');

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
      };

  return (
    <div className="container">
      <div className="triCycleParent">
        <p className="title">TriCycle</p>
        <span className="subTitle">
          {" "}
          Home/Cycle & Sports/Walker & Tricycle/Tricycle
        </span>

        <div className="hrT"></div>

        <Grid container spacing={2}>
          <Grid item lg={3}>
            <FormControl>
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
          </Grid>

          <Grid item lg={9}>
          {selectedValue === 'Walker & swing car' && <div>b</div>}
        {selectedValue === 'Tricycle' && <div>c</div>}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default TriCycle;
