import provider from '../../config/blockchain';
import { TransactionResponse } from './transaction.types';
import { AppError } from '../../shared/errors/AppError';
import { ethers } from 'ethers';

export async function getTransaction(hash: string): Promise<TransactionResponse> {
  const tx = await provider.getTransaction(hash);

  if (!tx) {
    throw new AppError('Transaction not found', 404);
  }

  return {
    hash: tx.hash,
    from: tx.from,
    to: tx.to,
    value: ethers.formatEther(tx.value),
    blockNumber: tx.blockNumber,
  };
}
