import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { TextField } from '@mui/material';
import ClientContext from '../../context/ClientContext';

// Input de texto com validação e controle.
export const ClientTextInput = ({ name, label, validator, onChange }) => {
  const { setFormsInfo } = useContext(ClientContext); // setState global dos inputs de formulário de clientes
  const [value, setValue] = useState(''); // Valor do input
  const [error, setError] = useState(); // Mensagem de erro do input
  const handleChange = (e) => {
    const newValue = e.target.value;
    const errorMessage = validator(newValue); // Se houver erro na validação, retorna a mensagem de erro.
    setValue(newValue);
    setValue(newValue);
    setError(errorMessage); // Armazena a mensagem de erro caso exista problemas na validação do input.
    onChange(!errorMessage); // Valida o input enquanto ele é preenchido.
    setFormsInfo((prevInfo) => {
      return { ...prevInfo, [name]: newValue }; // Armazena o valor do input no estado global.
    });
  };
  return (
    <TextField
      label={label}
      value={value}
      onChange={handleChange}
      error={!!error}
      helperText={error ? error : ' '}
      color='warning'
    />
  );
};

ClientTextInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  validator: PropTypes.func,
  onChange: PropTypes.func,
};
