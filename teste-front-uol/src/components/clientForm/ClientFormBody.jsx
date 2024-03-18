import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Divider, Stack, Typography } from '@mui/material';
import { ClientSelectInput } from './ClientSelectInput';
import { ClientTextInput } from './ClientTextInput';
import ClientFormButtons from './ClientFormButtons';
import inputData from '../../data/inputData';
import { statusValidator } from '../../utils/validators';
import createTextInputArray from '../../utils/createTextInputArray';

// Conjubto de inputs do formulário de clientes
function ClientFormBody({ page }) {
  // Armazena a informação da validade de cada input.
  const formValid = useRef({
    name: false,
    email: false,
    phone: false,
    cpf: false,
    status: false,
  });

  const isDisabled = !Object.values(formValid.current).every((isValid) => isValid); // Verifica se não há nenhum erro de validação nos imputs.

  const textInputs = createTextInputArray(inputData, formValid); // Array de inputs necessário para a criação de inputs com validação dinâmica.

  return (
    /* =================== Título do formulário =================== */
    <Stack divider={<Divider />} spacing={2}>
      {page === 'edit' && (
        <Typography variant='h6' lineHeight={1}>
          Novas informações
        </Typography>
      )}

      {/* ================== Inputs do formulário ================== */}
      <Stack spacing={1}>
        {textInputs.map(({ name, label, validator, onChange }, i) => (
          <ClientTextInput
            key={i}
            name={name}
            label={label}
            validator={validator}
            onChange={onChange}
          />
        ))}
        <ClientSelectInput
          name='status'
          label='Status'
          validator={statusValidator}
          onChange={(isValid) => (formValid.current.status = isValid)}
        />

        {/* ================== Botões do formulário ================== */}
        <ClientFormButtons page={page} isDisabled={isDisabled} />
      </Stack>
    </Stack>
  );
}

ClientFormBody.propTypes = {
  page: PropTypes.string,
};

export default ClientFormBody;
