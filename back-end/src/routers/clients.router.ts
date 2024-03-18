import express from 'express';
import { ClientsController } from '../controllers';

const router = express.Router();

const controller = new ClientsController();

router.get('/', (req, res) => controller.getAll(req, res) ); // Lista todos os clientes
router.get('/:id', (req, res) => controller.getOne(req, res) ); // Lista cliente pelo ID
router.post('/', (req, res) => controller.insert(req, res) ); // Insere um novo cliente
router.put('/:id', (req, res) => controller.updateClient(req, res) ); // Edita um cliente existente
router.delete('/:id', (req, res) => controller.deleteClient(req, res) ); // Remove um cliente existente



export default router;