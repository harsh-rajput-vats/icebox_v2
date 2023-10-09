import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function RadioForm() {
  return (
    <FormControl>
      {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="new"
          control={<Radio size="small" />}
          label="New Dataset"
          
        />
        <FormControlLabel
          value="existing"
          control={<Radio size="small" />}
          label="Existing Dataset"
        />
      </RadioGroup>
    </FormControl>
  );
}
export default RadioForm;
