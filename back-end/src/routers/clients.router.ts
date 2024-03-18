import express from 'express';
import { ClientsController } from '../controllers';

const router = express.Router();

const controller = new ClientsController();

router.get('/', (req, res, next) => controller.getAll(req, res) );
router.get('/:id', (req, res, next) => controller.getOne(req, res) );
router.post('/', (req, res, next) => controller.insert(req, res) );
router.put('/:id', (req, res, next) => controller.updateClient(req, res) );
router.delete('/:id', (req, res, next) => controller.deleteClient(req, res) );



export default router;