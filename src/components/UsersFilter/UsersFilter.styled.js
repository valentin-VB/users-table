import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';

export const StyledInput = styled(TextField)({
  '& .MuiFilledInput-root': {
    border: '1px solid #red',
    borderRadius: 50,
    paddingBottom: '10px',
    paddingTop: '0px',
    backgroundColor: '#F3F3F3',
  },

  '& ::placeholder': {
    fontSize: '17px',
    fontWeight: '600',
  },
});
