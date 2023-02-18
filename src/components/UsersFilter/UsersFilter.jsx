import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { StyledInput } from './UsersFilter.styled';

const UsersFilter = ({ onChange }) => {
  return (
    <>
      <StyledInput
        placeholder="Search"
        fullWidth
        size="small"
        variant="filled"
        onChange={e => onChange(e.currentTarget.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="medium" />
            </InputAdornment>
          ),
          disableUnderline: true,
        }}
      ></StyledInput>
    </>
  );
};

export default UsersFilter;
