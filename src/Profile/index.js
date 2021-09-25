import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import { makeStyles } from "@material-ui/core/styles";
import { handleSetChange } from "./profileSlice";
import { useDispatch, useSelector } from "react-redux";


const useStyles = makeStyles((theme) => ({
  profileWrapper: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Profile = () => {
  const { genderValue, adultValue } = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  const classes = useStyles();

  const handleChange = (event) => {
    console.log(event.currentTarget.name);
    console.log(event.target.value);
    dispatch(handleSetChange(event));
  };

  return  <div className={classes.profileWrapper}>
    <div>Profile Name: User Name</div>

    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup
        row
        aria-label="gender"
        name="gender"
        value={genderValue}
        onChange={handleChange}
      >
        <FormControlLabel value="Woman" control={<Radio />} label="Woman" />
        <FormControlLabel value="Man" control={<Radio />} label="Man" />
        <FormControlLabel value="Other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    <FormControl component="fieldset">
      <FormLabel component="legend">Are you over 18?</FormLabel>
      <RadioGroup
        row
        aria-label="Age"
        name="age"
        value={adultValue}
        onChange={handleChange}
      >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl> 
</div>;
};

export default Profile;
