import IClient from '../interfaces/IClient';
import { ClientsModel } from '../models';
import {
  validateClient,
  validateUptadeClient,
  verifyExistingClient,
} from './validations/validateClientData';

// ======================== Conjunto das services de clientes ======================== //

export default class ClientsService {
  private clientsModel: ClientsModel;

  constructor() {
    this.clientsModel = new ClientsModel();
  }

  public async getAll(): Promise<{ status: number; message: IClient[] | string }> {
    const allClients = await this.clientsModel.getAll(); // Retorna a lista de todos os cliente.
    return { status: 200, message: allClients };
  }

  public async getOne(id: number): Promise<{ status: number; message: IClient | string }> {
    const validationError = await verifyExistingClient(id); // Se o cliente não existe, retorna um status e uma mensagem de erro.
    if (validationError) return validationError;
    const client = await this.clientsModel.getOne(id); // Retorna os dados do cliente.
    return { status: 200, message: client };
  }

  public async insert(
    client: IClient
  ): Promise<{ status: number; message: IClient | string }> {
    const validationError = await validateClient(client); // Se houver inconsistência nos dados do cliente, retorna um status e uma mensagem de erro.
    if (validationError) return validationError;

    const lastId = await this.clientsModel.insert(client); // Retorna o ID do cliente inserido.
    const insertedClient = await this.clientsModel.getOne(lastId); // Retorna os dados do cliente inserido.

    return { status: 201, message: insertedClient };
  }

  public async updateClient(
    id: number,
    updatedData: IClient
  ): Promise<{ status: number; message: IClient | string }> {
    const validationError = await validateUptadeClient(updatedData, id); // Se houver inconsistência nos dados do cliente, retorna um status e uma mensagem de erro.
    if (validationError) return validationError;

    await this.clientsModel.update(id, updatedData);
    const updatedClient = await this.clientsModel.getOne(id); // Retorna os dados do cliente atualizado.

    return { status: 200, message: updatedClient };
  }

  public async deleteClient(
    id: number
  ): Promise<{ status: number; message: IClient | string }> {
    const validationError = await verifyExistingClient(id); // Se o cliente não existe, retorna um status e uma mensagem de erro.
    if (validationError) return validationError;

    const clientToDelete = await this.clientsModel.getOne(id); // Retorna os dados do cliente a ser deletado.

    await this.clientsModel.delete(id);

    return { status: 200, message: clientToDelete };
  }
}
