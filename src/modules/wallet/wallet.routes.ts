import { Router } from 'express';
import { getBalance } from './wallet.controller';

const router = Router();

router.get('/:address/balance', getBalance);

export default router;
