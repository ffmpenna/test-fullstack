import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import ClientContext from '../../context/ClientContext';

// Input select com validação e controle.
export const ClientSelectInput = ({ name, label, validator, onChange }) => {
  const { setFormsInfo } = useContext(ClientContext); // setState global dos inputs de formulário de clientes
  const [value, setValue] = useState(''); // Valor do input
  const [error, setError] = useState(false); // Mensagem de erro do input
  const handleChange = (e) => {
    const newValue = e.target.value;
    const errorMessage = validator(newValue); // Se houver erro na validação, retorna a mensagem de erro.
    setValue(newValue);
    setError(errorMessage); // Armazena a mensagem de erro caso exista problemas na validação do input.
    onChange(!errorMessage); // Valida o input enquanto ele é preenchido.
    setFormsInfo((prevInfo) => {
      return { ...prevInfo, [name]: newValue }; // Armazena o valor do input no estado global.
    });
  };
  return (
    <FormControl
      variant='outlined'
      sx={{ m: 1, minWidth: 120 }}
      color='warning'
      error={!!error}
    >
      <InputLabel id='demo-simple-select-standard-label'>Status</InputLabel>
      <Select
        labelId='demo-simple-select-standard-label'
        id='demo-simple-select-standard'
        value={value}
        onChange={handleChange}
        label={label}
        error={!!error}
      >
        <MenuItem value=''>Escolha...</MenuItem>
        <MenuItem value={1}>Ativo</MenuItem>
        <MenuItem value={2}>Inativo</MenuItem>
        <MenuItem value={3}>Aguardando ativação </MenuItem>
        <MenuItem value={4}>Desativado</MenuItem>
      </Select>
      {error ? (
        <FormHelperText>{error}</FormHelperText>
      ) : (
        <FormHelperText> </FormHelperText> // Serve apenas para formatação (Cria um espaço abaixo do input para caber o helperText)
      )}
    </FormControl>
  );
};

ClientSelectInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  validator: PropTypes.func,
  onChange: PropTypes.func,
};
