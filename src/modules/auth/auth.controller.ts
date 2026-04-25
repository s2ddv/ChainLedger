import { Request, Response, NextFunction } from 'express';
import { login } from './auth.service';

export async function loginHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const data = await login(req.body);
    res.json(data);
  } catch (err) {
    next(err);
  }
}
