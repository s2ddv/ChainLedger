import { Request, Response, NextFunction } from 'express';
import { getTransaction } from './transaction.service';

export async function getTransactionByHash(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const hash = req.params.hash as string;
    const data = await getTransaction(hash);
    res.json(data);
  } catch (err) {
    next(err);
  }
}
