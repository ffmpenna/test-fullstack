import { cpf } from 'cpf-cnpj-validator';
import { phone } from 'phone';

// Conjuto de funções que serão utilizadas para validar os inputs do formulário de criação ou edição de clientes.

export const nameValidator = (value) => {
  if (value.length < 3) return 'Nome precisa ter pelo menos 3 caracteres';
  if (value.length > 20) return 'Nome precisa ter no máximo 20 caracteres';
  if (!/^[a-zA-Z ]+$/.test(value)) return 'Nome deve conter apenas letras';
  return false;
};

export const emailValidator = (value) => {
  if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(value))
    return 'Email inválido';
  return false;
};

export const phoneValidator = (value) => {
  if (!phone(value, { country: 'BRA' }).isValid) return 'Número de telefone inválido';
  return false;
};

export const cpfValidator = (value) => {
  if (!cpf.isValid(value)) return 'Número de CPF inválido';
  return false;
};

export const statusValidator = (value) => {
  console.log({ value });
  if (value === '') return 'Uma opção deve ser selecionada';
  return false;
};
