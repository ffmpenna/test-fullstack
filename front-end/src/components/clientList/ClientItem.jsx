import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import CircleIcon from '@mui/icons-material/Circle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import formatPhoneNumber from '../../utils/formatPhoneNumber';
import parseStatus from '../../utils/parseStatus';
import { cpf as CPF } from 'cpf-cnpj-validator';

// Item da lista de clientes.
function ClientItem({ data }) {
  const { name, email, phone, cpf, status, id } = data;

  return (
    // Conjunto de infrmações de 1 item da lista.
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 3 }}
      justifyContent='space-around'
      alignItems='center'
      padding={2}
      border={'1px solid lightgray'}
      borderRadius={1}
    >
      {/* =================== Conjunto Nome e Email ================= */}
      <Stack minWidth='25%'>
        <Typography variant='h6'>{name}</Typography>
        <Typography variant='body2'>{email}</Typography>
      </Stack>

      {/* ================== Conjunto CPF e Telefone ================= */}
      <Stack spacing={1} minWidth='25%'>
        <Stack direction='row' alignItems='center' spacing={1}>
          <ArticleIcon color='disabled' fontSize='small' /> {/*Ícone do CPF */}
          <Typography>{CPF.format(cpf)}</Typography>
        </Stack>

        <Stack direction='row' alignItems='center' spacing={1}>
          <LocalPhoneIcon color='disabled' fontSize='small' /> {/*Ícone do Telefone */}
          <Typography>{formatPhoneNumber(phone)}</Typography>
        </Stack>
      </Stack>

      {/* ========================== Status ========================== */}
      <Stack direction='row' minWidth='25%' spacing={1}>
        <Typography color={parseStatus(status).color}>
          <CircleIcon fontSize='small' /> {/*Ícone do Status */}
        </Typography>
        <Typography mx={1}>{parseStatus(status).label}</Typography>
      </Stack>

      {/* ======================= Botão Editar ======================= */}
      <Button
        component={Link}
        to={`/clients/edit/${id}`}
        variant='outlined'
      >
        Editar
      </Button>
    </Stack>
  );
}

ClientItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    cpf: PropTypes.string,
    status: PropTypes.string,
    id: PropTypes.number,
  }),
};

export default ClientItem;
