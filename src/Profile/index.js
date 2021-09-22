import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Profile = () => {
  return  <div>
  <Checkbox {...label} defaultChecked />
  <Checkbox {...label} />
  <Checkbox {...label} />
  <Checkbox {...label} />
</div>;
};

export default Profile;
