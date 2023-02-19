import { Container, Typography } from '@mui/material';
import UsersDashboard from 'components/UsersDashboard/UsersDashboard';

export const App = () => {
  return (
    <main>
      <Container maxWidth="md" sx={{ padding: '25px' }}>
        <Typography variant="h3" sx={{ mb: '15px' }}>
          Permissions
        </Typography>
        <Typography sx={{ color: '#9F9F9F', mb: '30px', fontSize: '25px' }}>
          Create and customize rules for your interface
        </Typography>
        <UsersDashboard />
      </Container>
    </main>
  );
};
