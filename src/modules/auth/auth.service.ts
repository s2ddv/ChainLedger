import jwt from 'jsonwebtoken';
import env from '../../config/env';
import { AuthPayload, AuthResponse } from './auth.types';
import { AppError } from '../../shared/errors/AppError';

// Placeholder — replace with real DB lookup later
const MOCK_USER = { email: 'dev@chainledger.com', password: '123456' };

export async function login(payload: AuthPayload): Promise<AuthResponse> {
  if (payload.email !== MOCK_USER.email || payload.password !== MOCK_USER.password) {
    throw new AppError('Invalid credentials', 401);
  }

  const token = jwt.sign({ email: payload.email }, env.JWT_SECRET, { expiresIn: '7d' });
  return { token };
}
