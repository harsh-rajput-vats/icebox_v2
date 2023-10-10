import React from "react";
import "./agGenerateData.css";
import StaticButton from "../../StaticButton/StaticButton";
import SettingsIcon from "../../../assets/Icons/settings.svg";
import RadioForm from "../../RadioForm/RadioForm";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";

function GenerateData() {

  const handleSettingsClick = () => {
    alert("Settings Button Clicked");
  };

  const [group, setGroup] = React.useState("");

  const handleChangeGrp = (event) => {
    setGroup(event.target.value);
  };

  const [gender, setGender] = React.useState("");

  const handleChangeGen = (event) => {
    setGender(event.target.value);
  };

  function valuetext(value) {
    return value;
  }

  const minDistance = 10;

  const [value1, setValue1] = React.useState([10, 100]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <div className="bigboxCG">
      <div className="headCG">
        <ul className="leftlist">
          <li>
            <h3 id="boxTitle">Generate Data</h3>
          </li>
        </ul>

        <ul className="rightlist">
          <li>
            <StaticButton
              onClick={handleSettingsClick}
              SVGIcon={SettingsIcon}
              id="settings"
            />
          </li>
        </ul>
      </div>
      <div className="bodyCG">
        <div className="radioForm">
          <RadioForm />
        </div>

        <div className="datasetName">
          <TextField
            id="datasetName"
            label="Dataset Name (Req.)"
            variant="standard"
            size="small"
          />
        </div>

        <div className="generationBlock">
          <div className="innerBox">
            <div className="title">
              <p>Create Generation Rule</p>
            </div>
            <div className="identities">
              <TextField
                id="datasetName"
                label="No. of identities following this rule"
                variant="standard"
                size="small"
                sx={{ width: "32ch" }}
              />
            </div>
            <div className="botbox">
              <ul className="rules">
                <li className="group">
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="group">Group</InputLabel>
                    <Select
                      labelId="group"
                      id="group"
                      value={group}
                      onChange={handleChangeGrp}
                      label="Group"
                    >
                      <MenuItem value={"random"}>Random</MenuItem>
                      <MenuItem value={"north"}>North</MenuItem>
                      <MenuItem value={"J&K"}>Jammu and Kashmir</MenuItem>
                      <MenuItem value={"NCR"}>NCR</MenuItem>
                      <MenuItem value={"UP"}>Uttar Pradesh</MenuItem>
                      <MenuItem value={"NE"}>North-East</MenuItem>
                      <MenuItem value={"FSkin"}>Fair Skin</MenuItem>
                      <MenuItem value={"DSkin"}>Dark Skin</MenuItem>
                    </Select>
                  </FormControl>
                </li>

                <li className="gender">
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="gender">Gender</InputLabel>
                    <Select
                      labelId="gender"
                      id="gender"
                      value={gender}
                      onChange={handleChangeGen}
                      label="Gender"
                    >
                      <MenuItem value={"random"}>Random</MenuItem>
                      <MenuItem value={"male"}>Male</MenuItem>
                      <MenuItem value={"female"}>Female</MenuItem>
                    </Select>
                  </FormControl>
                </li>

                <li className="ageSlider">
                  <p className="naam">Age Group</p>
                  <Box className="slide" sx={{ width: 150 }}>
                    <Slider
                      getAriaLabel={() => "Minimum distance"}
                      value={value1}
                      onChange={handleChange1}
                      defaultValue={30}
                      valueLabelDisplay="auto"
                      step={10}
                      marks
                      min={10}
                      max={100}
                      getAriaValueText={valuetext}
                      disableSwap
                    />
                  </Box>
                </li>

                <li className="resetB">
                  <Button variant="contained" size="small">
                    Reset
                  </Button>
                </li> 
                <li className="addB">
                  <Button
                    variant="contained"
                    size="small"
                  >
                    Add
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenerateData;