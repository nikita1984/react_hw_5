import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';


// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Profile = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return  <div>
    <div>Name: Nikita</div>

    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup
        aria-label="gender"
        defaultValue="Other"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Woman" control={<Radio />} label="Woman" />
        <FormControlLabel value="Man" control={<Radio />} label="Man" />
        <FormControlLabel value="Other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    <FormControl component="fieldset">
      <FormLabel component="legend">Are you over 18?</FormLabel>
      <RadioGroup
        aria-label="Age"
        defaultValue="No"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl> 
</div>;
};

export default Profile;
