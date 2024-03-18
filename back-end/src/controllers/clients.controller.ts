import { Request, Response } from 'express';
import { ClientsService } from '../services';
import IClient from '../interfaces/IClient';

export default class ClientsController {
  private clientsService: ClientsService;

  constructor() {
    this.clientsService = new ClientsService();
  }

  private sendResponse = (
    res: Response,
    status: number,
    feedback: string,
    message: IClient | IClient[] | string
  ) => {
    res.status(status).json({ feedback, message });
  };

  async getAll(_req: Request, res: Response) {
    const { status, message } = await this.clientsService.getAll();
    const feedback =
      status === 200 ? 'Clientes listados com sucesso' : 'Erro ao listar clientes';
    this.sendResponse(res, status, feedback, message);
  }

  async getOne(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    const { status, message } = await this.clientsService.getOne(id);
    const feedback =
      status === 200 ? 'Cliente listado com sucesso' : 'Erro ao listar cliente';
    this.sendResponse(res, status, feedback, message);
  }

  async insert(req: Request, res: Response) {
    const clientInfo = req.body;
    const { status, message } = await this.clientsService.insert(clientInfo);
    const feedback =
      status === 201 ? 'Cliente criado com sucesso' : 'Erro ao criar o cliente';
    this.sendResponse(res, status, feedback, message);
  }

  async updateClient(req: Request, res: Response): Promise<void> {
    const id: number = parseInt(req.params.id);
    const updatedData = req.body;
    const { status, message } = await this.clientsService.updateClient(id, updatedData);
    const feedback =
      status === 200 ? 'Cliente atualizado com sucesso' : 'Erro ao atualizar o cliente';
    this.sendResponse(res, status, feedback, message);
  }

  async deleteClient(req: Request, res: Response): Promise<void> {
    const id: number = parseInt(req.params.id);
    const { status, message } = await this.clientsService.deleteClient(id);
    const feedback =
      status === 200 ? 'Cliente deletado com sucesso' : 'Erro ao deletar o cliente';
    this.sendResponse(res, status, feedback, message);
  }
}
