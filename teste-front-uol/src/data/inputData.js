import { cpfValidator, emailValidator, nameValidator, phoneValidator } from '../utils/validators';

// Array utilizado para renderizar os inputs do formulário de criação e edição de clientes.
const inputData = [
  {
    name: 'name',
    label: 'Nome',
    validator: nameValidator,
  },
  {
    name: 'email',
    label: 'Email',
    validator: emailValidator,
  },
  {
    name: 'phone',
    label: 'Telefone',
    validator: phoneValidator,
  },
  {
    name: 'cpf',
    label: 'CPF',
    validator: cpfValidator,
  },
];

export default inputData;