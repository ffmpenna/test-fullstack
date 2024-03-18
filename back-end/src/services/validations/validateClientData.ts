import IClient from '../../interfaces/IClient';
import ClientsModel from '../../models/clients.model';
import clientSchema from './schemas';

// Valida as chaves do body da requisição.
const validateClientInputs = (data: IClient) => {
  const { error } = clientSchema.validate(data); // Retorna um erro caso os dados forem inválidos.
  if (error) {
    const status = Object.values(data).some((e) => e === undefined) ? 400 : 422; // Se faltar alguma chave retorna Status 400, se não retorna 422.
    return { status, message: error.message };
  }
};

// Verifica se um cliente existe a partir do ID.
const verifyExistingClient = async (id: number) => {
  const clientsModel = new ClientsModel();
  const existingClient = await clientsModel.getOne(id);
  if (!existingClient) return { status: 404, message: 'Client does not exist' };
};

// Verifica se há algum dado único conflitante no banco de dados (email, cpf e telefone).
const verifyConflictingClientData = async (data: IClient, id?: number) => {
  const clientsModel = new ClientsModel();
  const conflictData = await clientsModel.getByEmailCpfOrPhone(
    data.email,
    data.cpf,
    data.phone
  );

  if (conflictData && conflictData.id !== id) {
    return { status: 409, message: 'Email, CPF, or phone already exists' };
  }
};

// Executa as validações acima.
const validateClient = async (data: IClient, id?: number) => {
  const validationError = validateClientInputs(data);
  if (validationError) return validationError;

  const existingClientError = await verifyConflictingClientData(data, id);
  if (existingClientError) return existingClientError;
};

// Executa as validações referentes ao update de cliente.
const validateUptadeClient = async (data: IClient, id: number) => {
  const existingClientError = await verifyExistingClient(id);
  if (existingClientError) return existingClientError;

  const validationError = await validateClient(data, id);
  if (validationError) return validationError;
};

export { validateClient, validateUptadeClient, verifyExistingClient };
