import { Router } from 'express';
import { getTransactionByHash } from './transaction.controller';

const router = Router();

router.get('/:hash', getTransactionByHash);

export default router;
