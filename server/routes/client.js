import express from 'express';
import { createClient, getClients } from '../controllers/client.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/create', auth, createClient);
router.get('/getall', auth, getClients)

export default router;