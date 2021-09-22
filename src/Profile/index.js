import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import { makeStyles } from "@material-ui/core/styles";
// import { findByLabelText } from '@testing-library/dom';


const useStyles = makeStyles((theme) => ({
  profileWrapper: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Profile = () => {
  const [value, setValue] = React.useState('female');

  const classes = useStyles();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return  <div className={classes.profileWrapper}>
    <div>Profile Name: User Name</div>

    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup
        row
        aria-label="gender"
        defaultValue="Other"
        name="radio-buttons-GenderGroup"
        // value={value}
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
        defaultValue="No"
        name="radio-buttons-AgeGroup"
        // value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl> 
</div>;
};

export default Profile;
