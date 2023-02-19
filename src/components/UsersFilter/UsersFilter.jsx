import InputAdornment from '@mui/material/InputAdornment';
import { StyledInput } from './UsersFilter.styled';
import { RiSearchLine } from 'react-icons/ri';

const UsersFilter = ({ onChange }) => {
  return (
    <StyledInput
      placeholder="Search"
      fullWidth
      size="small"
      variant="filled"
      onChange={e => onChange(e.currentTarget.value)}
      sx={{ maxWidth: '500px', paddingRight: '25px' }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <RiSearchLine fontSize="25px" />
          </InputAdornment>
        ),
        disableUnderline: true,
      }}
    ></StyledInput>
  );
};

export default UsersFilter;
