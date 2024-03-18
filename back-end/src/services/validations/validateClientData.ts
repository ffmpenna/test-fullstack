import IClient from '../../interfaces/IClient';
import ClientsModel from '../../models/clients.model';
import clientSchema from './schemas';

const validateClientInputs = (data: IClient) => {
  const { error } = clientSchema.validate(data);
  if (error) {
    const status = Object.values(data).some((e) => e === undefined) ? 400 : 422;
    return { status, message: error.message };
  }
};

const verifyExistingClient = async (id: number) => {
  const clientsModel = new ClientsModel();
  const existingClient = await clientsModel.getOne(id);
  if (!existingClient) return { status: 400, message: 'Client does not exist' };
};

const verifyConflictingClientData = async (data: IClient, id?: number) => {
  const clientsModel = new ClientsModel();
  const conflictData = await clientsModel.getByEmailCpfOrPhone(
    data.email,
    data.cpf,
    data.phone
  );

  if (conflictData && conflictData.id !== id) {
    return { status: 400, message: 'Email, CPF, or phone already exists' };
  }
};

const validateClient = async (data: IClient, id?: number) => {
  const validationError = validateClientInputs(data);
  if (validationError) return validationError;

  const existingClientError = await verifyConflictingClientData(data, id);
  if (existingClientError) return existingClientError;
};

const validateUptadeClient = async (data: IClient, id: number) => {
  const existingClientError = await verifyExistingClient(id);
  if (existingClientError) return existingClientError;

  const validationError = await validateClient(data, id);
  if (validationError) return validationError;
};

export { validateClient, validateUptadeClient, verifyExistingClient };
