import PropTypes from 'prop-types';
import { Box, Divider, Typography } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

// Cabeçalho das página de formulário
function ClientFormHeader({ page }) {
  return (
    <Box>
      {/* ================= Título da página ================== */}
      <Box display='flex' alignItems='end' mb={3}>
        <PersonOutlineOutlinedIcon fontSize='large' />
        <Typography variant='h5' color='#333333'>Painel de clientes</Typography>
      </Box>

      <Divider />

      {/* =============== Subtítulo da página ================== */}
      <Box my={3}>
        {/* Render dinâmico a favor da página. */}
        <Typography mb={1} variant='h5'>
          {page === 'edit' && 'Editar usuário'}
          {page === 'create' && 'Novo usuário'}
        </Typography>
        <Typography variant='body1'>
          {page === 'create' && 'Informe os campos a seguir para criar novo usuário:'}
          {page === 'edit' && 'Preencha os campos disponíveis para editar este usuário'}
        </Typography>
      </Box>
    </Box>
  );
}

ClientFormHeader.propTypes = {
    page: PropTypes.string,
};

export default ClientFormHeader;
