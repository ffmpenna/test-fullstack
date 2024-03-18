import { Link } from 'react-router-dom';
import { Box, Button, Divider, Typography } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

// Cabeçalho da página de clientes
function ClientHeader() {
  return (
    <Box>
      {/* ======================== Título da página ======================== */}
      <Box display='flex' alignItems='end' mb={3}>
        <PersonOutlineOutlinedIcon fontSize='large' />
        <Typography variant='h5' color='#333333'>Painel de clientes</Typography>
      </Box>

      <Divider />

      {/* ====================== Subtítulo da página ======================== */}
      <Box
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'start' },
        }}
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        my={3}
      >
        <Box>
          <Typography mb={1} variant='h6'>
            Listagem de usuários
          </Typography>
          <Typography>Escolha um cliente para visualizar os detalhes</Typography>
        </Box>

        {/* ====================== Botão Novo Cliente ========================== */}
        <Box sx={{ mt: { xs: 2, md: 0 } }}>
          <Button
            component={Link}
            to='/clients/create'
            variant='contained'
            size='large'
          >
            Novo cliente
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ClientHeader;
