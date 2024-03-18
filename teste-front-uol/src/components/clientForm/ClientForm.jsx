import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';
import ClientContext from '../../context/ClientContext';
import ClientFormBody from './ClientFormBody';
import ClientPrevClientData from './ClientPrevData';
import api from '../../service/requests';

export default function ClientForm({ page }) {
  const { id } = useParams();
  const { formsInfo } = useContext(ClientContext); // Estado global dos inputs de formulário de clientes
  const navigate = useNavigate();

  const [notFound, setNotFound] = useState(false); // Indica existência de cliente.

  // Ao renderizar a página, verifica se o cliente a ser editado existe.
  useEffect(() => {
    if (page === 'edit') {
      const verifyClient = async () => {
        try {
          await api.get(`/${id}`);
          setNotFound(false);
        } catch (error) {
          setNotFound(true);
        }
      };
      verifyClient();
    }
  }, [id, page]);

  // Envia as informções ao DB.
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Diferencia a requisição de acordo com a página.
      if (page === 'create') {
        await api.post('/', formsInfo);
        alert('Usuário criado com sucesso!');
      } else if (page === 'edit') {
        await api.put(`/${id}`, formsInfo);
        alert('Usuário editado com sucesso!');
      }
      navigate('/');
      navigate(0);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return notFound ? (
    <Typography variant='h3' fontWeight={600}>
      Cliente não encontrado
    </Typography>
  ) : (
    <Box component='form' onSubmit={handleSubmit} noValidate>
      <Stack direction={{ xs: 'column-reverse', sm: 'row' }} spacing={{ xs: 5, sm: 10 }}>
        <ClientFormBody page={page} />
        {page === 'edit' && <ClientPrevClientData />}
      </Stack>
    </Box>
  );
}

ClientForm.propTypes = {
    page: PropTypes.string,
};
