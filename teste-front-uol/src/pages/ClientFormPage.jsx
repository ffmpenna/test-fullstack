import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import ClientForm from '../components/clientForm/ClientForm';
import ClientFormHeader from '../components/clientForm/ClientFormHeader';

function ClientFormPage({ page }) {
  return (
    <Container maxWidth='lg'>
      <ClientFormHeader page={page} />
      <ClientForm page={page} />
    </Container>
  );
}

ClientFormPage.propTypes = {
    page: PropTypes.string,
};

export default ClientFormPage;
