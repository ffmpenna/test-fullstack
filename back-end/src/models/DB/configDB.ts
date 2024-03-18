import sqlite3 from 'sqlite3';

const DB_PATH = 'src/models/DB/clientDB.sqlite';

// Criação do banco de dados SQLite e tabela de clientes
const db = new sqlite3.Database(DB_PATH);
db.run(`
    CREATE TABLE IF NOT EXISTS clients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        cpf TEXT NOT NULL,
        status TEXT NOT NULL
    )
`);

export default db;