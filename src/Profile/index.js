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
  const [genderValue, setGenderValue] = React.useState('Other');
  const [adultValue, setAdultValue] = React.useState('No');

  const classes = useStyles();

  const handleChange = (event) => {
    // const gender = genderValue.slice();
    // const adult = adultValue.slice();
    
    switch (event.target.name) {
       case "gender":
         setGenderValue(() => event.target.value);
         break;
       case "age":
         setAdultValue(() => event.target.value);
         break;
     }
    console.log(genderValue);
    console.log(adultValue);
  };

  return  <div className={classes.profileWrapper}>
    <div>Profile Name: User Name</div>

    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup
        row
        aria-label="gender"
        // defaultValue="Other"
        name="gender"
        value={genderValue}
        onChange={handleChange}
      >
        <FormControlLabel name="gender" value="Woman" control={<Radio />} label="Woman" />
        <FormControlLabel name="gender" value="Man" control={<Radio />} label="Man" />
        <FormControlLabel name="gender" value="Other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    <FormControl component="fieldset">
      <FormLabel component="legend">Are you over 18?</FormLabel>
      <RadioGroup
        row
        aria-label="Age"
        // defaultValue="No"
        name="age"
        value={adultValue}
        onChange={handleChange}
      >
        <FormControlLabel name="age" value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel name="age" value="No" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl> 
</div>;
};

export default Profile;
