import { Divider, Stack, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import inputData from '../../data/inputData';
import api from '../../service/requests';
import parseStatus from '../../utils/parseStatus';

// Componente que renderiza as informações do cliente antes de serem editadas para auxiliar o uso do formulário de edição de cliente.
function ClientPrevClientData() {
  const { id } = useParams();

  const [prevClient, setPrevClient] = useState(); // Informações do cliente antes da edição.

  // Quando a página é renderizada, popula o estado prevClient com as informções do cliente antes de serem editadas.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { message } = await api.get(`/${id}`); // Recupera as informações que o cliente possuía antes de serem editadas.
        setPrevClient(message);
      } catch (error) {
        console.error(error.response.data.message);
      }
    };
    fetchData();
  }, [id]);

  return (
    prevClient && (
      <Stack divider={<Divider />} spacing={2}>
        <Typography variant='h6' lineHeight={1}>
          Informações atuais
        </Typography>
        <Stack spacing={1}>
          {inputData.map(({ name, label }, i) => (
            <TextField
              key={i}
              disabled
              label={label}
              value={prevClient[name]}
              helperText={' '}
            />
          ))}
          <TextField
            disabled
            label='Status'
            value={parseStatus(prevClient['status']).label}
            helperText={' '}
          />
        </Stack>
      </Stack>
    )
  );
}

export default ClientPrevClientData;
