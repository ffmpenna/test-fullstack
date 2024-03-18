import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Stack } from '@mui/material';

//Botões de formulário
function ClientFormButtons({ page, isDisabled }) {
  return (
    <Stack spacing={3} direction='row'>
      <Button component={Link} to='/' variant='outlined'> {/* Redireciona para a página de clientes. */}
        Voltar
      </Button>
      <Button disabled={isDisabled} type='submit' variant='contained'>
        {page === 'create' ? 'Criar' : 'Salvar'} {/* Render dinâmico a favor da página. */}
      </Button>
    </Stack>
  );
}

ClientFormButtons.propTypes = {
  page: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default ClientFormButtons;
