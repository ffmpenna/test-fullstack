import sqlite3 from 'sqlite3';
import db from './DB/configDB';
import IClient from '../interfaces/IClient';

// Model das requisições da rota "/clients"
export default class ClientsModel {
  private database: sqlite3.Database; // Banco de dados Sqlite

  constructor() {
    this.database = db;
  }

  // ============== Conjunto das controllers de clientes ================== //

  async getAll(): Promise<IClient[]> {
    return new Promise<IClient[]>((resolve, reject) => {
      const query = 'SELECT * FROM clients';
      this.database.all(query, [], (err: Error | null, rows: IClient[]) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  async getOne(id: number): Promise<IClient> {
    return new Promise<IClient>((resolve, reject) => {
      const query = 'SELECT * FROM clients WHERE id = ?';
      this.database.get(query, [id], (err: Error | null, row: IClient) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  async getByEmailCpfOrPhone(email: string, cpf: string, phone: string): Promise<IClient | null> {
    return new Promise<IClient | null>((resolve, reject) => {
      const query = 'SELECT * FROM clients WHERE email = ? OR cpf = ? OR phone = ? LIMIT 1';
      this.database.get(query, [email, cpf, phone], (err, row: IClient) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  async insert(client: IClient): Promise<number> {
    const { name, email, cpf, phone, status } = client;
    return new Promise<number>((resolve, reject) => {
      const query =
        'INSERT INTO clients (name, email, cpf, phone, status) VALUES (?, ?, ?, ?, ?)';
      this.database.run(
        query,
        [name, email, cpf, phone, status],
        function (err: Error | null) {
          if (err) {
            reject(err);
          } else {
            resolve(this.lastID); // Retorna o ID do cliente inserido.
          }
        }
      );
    });
  }

  async update(id: number, updatedData: Partial<IClient>): Promise<number> {
    const { name, email, cpf, phone, status } = updatedData;
    const query = `
        UPDATE clients 
        SET name = ?, email = ?, cpf = ?, phone = ?, status = ? 
        WHERE id = ?
    `;
    return new Promise<number>((resolve, reject) => {
      this.database.run(
        query,
        [name, email, cpf, phone, status, id],
        function (err: Error | null) {
          if (err) {
            reject(err);
          } else {
            resolve(id); // Retorna o ID do cliente atualizado.
          }
        }
      );
    });
  }

  async delete(id: number): Promise<void> {
    const deleteSql = 'DELETE FROM clients WHERE id = ?';
    return new Promise<void>((resolve, reject) => {
      this.database.run(deleteSql, [id], function (err: Error | null) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}
