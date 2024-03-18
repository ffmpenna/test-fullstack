import { Container,  } from '@mui/material';
import ClientGrid from '../components/clientList/ClientGrid';
import ClientHeader from '../components/clientList/ClientHeader';

function ClientsPage() {
  return (
    <Container maxWidth='lg'>
      <ClientHeader />
      <ClientGrid />
    </Container>
  );
}

export default ClientsPage;
