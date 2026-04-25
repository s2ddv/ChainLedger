import { Request, Response, NextFunction } from 'express';
import { getWalletBalance } from './wallet.service';

export async function getBalance(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { address } = req.params;
    const data = await getWalletBalance(address);
    res.json(data);
  } catch (err) {
    next(err);
  }
}
