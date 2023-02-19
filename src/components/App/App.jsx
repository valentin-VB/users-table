import { Container, Typography } from '@mui/material';
import UsersDashbord from 'components/UsersDashbord/UsersDashbord';

export const App = () => {
  return (
    <main>
      <Container maxWidth="md" sx={{ padding: '25px' }}>
        <Typography variant="h3" sx={{ mb: '15px' }}>
          Permissions
        </Typography>
        <Typography variant="h6" sx={{ color: '#9F9F9F', mb: '30px' }}>
          Create and customize rules for your interface
        </Typography>
        <UsersDashbord />
      </Container>
    </main>
  );
};
