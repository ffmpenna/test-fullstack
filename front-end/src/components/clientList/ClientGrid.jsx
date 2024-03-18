import { useContext } from 'react';
import { Stack, Typography } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';
import ClientContext from '../../context/ClientContext';
import ClientItem from './ClientItem';

// Lista de clientes
function ClientGrid() {
  const { clients } = useContext(ClientContext);
  return clients.length === 0 ? ( // Se existir clientes, os renderiza, se não, renderiza uma mensagem.
    /* =============== Mensagem de nenhum cliente =============== */
    <Stack direction='row' spacing={1} display='flex' color='gray'>
      <ErrorOutline fontSize='large' /> {/* Ícone de Erro */}
      <Typography variant='h4'>Nenhum cliente cadastrado.</Typography>
    </Stack>
  ) : (
    /* ==================== Lista de clientes ==================== */
    <Stack spacing={3}>
      {clients.map((clientData, i) => (
        <ClientItem key={i} data={clientData} />
      ))}
    </Stack>
  );
}

export default ClientGrid;
