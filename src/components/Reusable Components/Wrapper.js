import { Box } from '@mui/system';

const Wrapper = ({ justifyContent = 'space-between', children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: justifyContent,
        alignItems: 'center',
      }}
    >
      {children}
    </Box>
  );
};

export default Wrapper;
