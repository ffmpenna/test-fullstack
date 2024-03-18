import IClient from '../Interfaces/IClient';
import { ClientsModel } from '../models';
import {
  validateClient,
  validateUptadeClient,
  verifyExistingClient,
} from './validations/validateClientData';

export default class ClientsService {
  private clientsModel: ClientsModel;

  constructor() {
    this.clientsModel = new ClientsModel();
  }

  public async getAll(): Promise<{ status: number; message: IClient[] | string }> {
    const allClients = await this.clientsModel.getAll();
    return { status: 200, message: allClients };
  }

  public async getOne(id: number): Promise<{ status: number; message: IClient | string }> {
    const validationError = await verifyExistingClient(id);
    if (validationError) return validationError;
    const client = await this.clientsModel.getOne(id);
    return { status: 200, message: client };
  }

  public async insert(
    client: IClient
  ): Promise<{ status: number; message: IClient | string }> {
    const validationError = await validateClient(client);
    if (validationError) return validationError;

    const lastId = await this.clientsModel.insert(client);
    const insertedClient = await this.clientsModel.getOne(lastId);

    return { status: 201, message: insertedClient };
  }

  public async updateClient(
    id: number,
    updatedData: IClient
  ): Promise<{ status: number; message: IClient | string }> {
    const validationError = await validateUptadeClient(updatedData, id);
    if (validationError) return validationError;

    await this.clientsModel.update(id, updatedData);
    const updatedClient = await this.clientsModel.getOne(id);

    return { status: 200, message: updatedClient };
  }

  public async deleteClient(
    id: number
  ): Promise<{ status: number; message: IClient | string }> {
    const validationError = await verifyExistingClient(id);
    if (validationError) return validationError;

    const clientToDelete = await this.clientsModel.getOne(id);

    await this.clientsModel.delete(id);

    return { status: 200, message: clientToDelete };
  }
}
